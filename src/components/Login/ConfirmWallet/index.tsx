"use client";

import { useAccount, useSignMessage, useSwitchAccount } from "wagmi";
import { SiweMessage } from "siwe";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
import { getNonce, login } from "../../../service/user";
import { useCommonStore } from "../../../store/common";

export const ConfirmWallet = () => {
  const { address, isConnected, chainId } = useAccount();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setToken } = useCommonStore();
  const { signMessageAsync } = useSignMessage();

  async function createSiweMessage(address: `0x${string}`, statement: string) {
    try {
      const { data: nonce } = await getNonce(address);
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
        const signature = await signMessageAsync({
          message,
        });
        const { data: token } = await login({
          loginType: "1",
          signature,
          message,
        });
        setToken(token);
      }

      // 处理登录/注册
      // signIn("credentials", {
      //   message: JSON.stringify(message),
      //   redirect: false,
      //   signature,
      // });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (isConnected && address && !localStorage.getItem("token")) {
      onOpen();
    }
  }, [isConnected, address]);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              CONNECT WALLET
            </ModalHeader>
            <ModalBody>
              <p>You are connecting the following address:</p>
              <p>{address}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                CANCEL
              </Button>
              <Button color="primary" onPress={signInWithEthereum}>
                CONFIRM
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
