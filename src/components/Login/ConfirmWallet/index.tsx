"use client";
import { getCsrfToken, signIn } from "next-auth/react";
import { useAccount, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";

export const ConfirmWallet = () => {
  const { address } = useAccount();

  const { signMessageAsync } = useSignMessage();

  async function createSiweMessage(address: `0x${string}`, statement: string) {
    const nonce = await getCsrfToken();
    const domain = window.location.host;
    const origin = window.location.origin;
    const message = new SiweMessage({
      domain,
      address,
      statement,
      uri: origin,
      version: "1",
      chainId: 1,
      nonce,
    });
    return message.prepareMessage();
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

      const signature = await signMessageAsync({
        message,
      });
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
  return <div onClick={signInWithEthereum}>{address}</div>;
};
