"use client";

import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import Cookies from "js-cookie";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import classNames from "classnames";
import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import styles from "./index.module.scss";
import { getWalletSignatureContent, login } from "../../../service/user";
import { useCommonStore } from "../../../store/common";

export const ConfirmWallet = () => {
  const { address, isConnected, chainId } = useAccount();
  const { confirmLoginOpen, toggleConfirmLoginOpen } = useCommonStore();
  const { setToken, setUid, getUserInfo, getAllList } = useCommonStore();
  const { signMessageAsync } = useSignMessage();
  const [signing, setSigning] = useState(false);

  const { disconnect } = useDisconnect();

  async function signInWithEthereum() {
    if (!address) {
      return;
    }
    try {
      const {
        data: { message },
      } = await getWalletSignatureContent();

      if (message) {
        setSigning(true);

        const signature = await signMessageAsync({
          message,
        });

        const {
          data: { token, uid },
        } = await login({
          signature,
          walletAddress: address,
          message,
        });
        setSigning(false);
        setToken(token);
        setUid(`${uid}`);
        getUserInfo();
        getAllList();
        toggleConfirmLoginOpen();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isConnected && address && !Cookies.get("token")) {
      toggleConfirmLoginOpen();
    }
  }, [isConnected, address]);

  return (
    <Modal
      isOpen={confirmLoginOpen}
      onOpenChange={toggleConfirmLoginOpen}
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
