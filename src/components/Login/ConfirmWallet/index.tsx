"use client";

import {
  useAccount,
  useDisconnect,
  useSignMessage,
  useSwitchAccount,
} from "wagmi";
import { SiweMessage } from "siwe";
import Cookies from "js-cookie";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { getNonce, login } from "../../../service/user";
import { useCommonStore } from "../../../store/common";
import classNames from "classnames";
import styles from "./index.module.scss";

export const ConfirmWallet = () => {
  const { address, isConnected, chainId } = useAccount();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setToken } = useCommonStore();
  const { signMessageAsync } = useSignMessage();
  const [signing, setSigning] = useState(false);
  const nonceRef = useRef<string>("");
  const { disconnect } = useDisconnect();
  async function createSiweMessage(address: `0x${string}`, statement: string) {
    try {
      const { data: nonce } = await getNonce(address);
      nonceRef.current = nonce;
      const domain = window.location.host;
      const origin = window.location.origin;
      const message = new SiweMessage({
        domain,
        address,
        statement,
        uri: origin,
        chainId,
        nonce,
        version: "1",
      });
      return message.prepareMessage();
    } catch (error) {
      console.log(error, "erwrewrwe");
    }
  }

  async function signInWithEthereum() {
    if (!address) {
      return;
    }
    try {
      const message = await createSiweMessage(
        address,
        `Sign in with Ethereum to the app.`
      );

      if (message) {
        setSigning(true);
        const signature = await signMessageAsync({
          message,
        });
        console.log(message);
        const { data: token } = await login({
          loginType: 1,
          signature,
          nonce: nonceRef.current,
          message,
        });
        setSigning(false);
        setToken(token);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (isConnected && address && !Cookies.get("token")) {
      onOpen();
    }
  }, [isConnected, address]);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={classNames("rounded")}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              CONNECT WALLET
            </ModalHeader>
            <ModalBody>
              <p className="text-sm">
                You are connecting the following address:
              </p>
              <p
                className={classNames(
                  styles.address,
                  "text-sm rounded-full text-center py-2"
                )}
              >
                {address}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="bordered"
                className={classNames("rounded")}
                size="sm"
                onPress={() => {
                  onClose();
                  disconnect();
                }}
              >
                DISCONNECT
              </Button>
              <Button
                color="danger"
                onPress={signInWithEthereum}
                size="sm"
                className={classNames("rounded")}
                isLoading={signing}
              >
                CONFIRM
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
