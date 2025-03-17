"use client";

import { useAccount, useDisconnect, useSignMessage } from "wagmi";
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
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { getWalletSignatureContent, login } from "../../../service/user";
import { useCommonStore } from "../../../store/common";

import styles from "./index.module.scss";

export const ConfirmWallet = () => {
  const { address, isConnected, chainId } = useAccount();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setToken } = useCommonStore();
  const { signMessageAsync } = useSignMessage();
  const [signing, setSigning] = useState(false);
  const nonceRef = useRef<string>("");
  const { disconnect } = useDisconnect();
  async function createSiweMessage() {
    try {
      const {
        data: { nonce, message },
      } = await getWalletSignatureContent();

      nonceRef.current = nonce;
      const domain = window.location.host;
      const origin = window.location.origin;
      const siweMessage = new SiweMessage({
        domain,
        address,
        statement: message,
        uri: origin,
        chainId,
        nonce,
        version: "1",
      });
      return siweMessage.prepareMessage();
    } catch (error) {
      console.log(error, "erwrewrwe");
    }
  }

  async function signInWithEthereum() {
    if (!address) {
      return;
    }
    try {
      const message = await createSiweMessage();

      if (message) {
        setSigning(true);

        const signature = await signMessageAsync({
          message,
        });
        console.log(signature, "erwrewrwe");
        const { data: token } = await login({
          signature,
          walletAddress: address,
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
