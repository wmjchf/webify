"use client";

import classNames from "classnames";
import { ListItem } from "../../../../../components/ListItem";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import { UploadImage } from "../../../../../components/BackTop/UploadImage";
import { useCommonStore } from "../../../../../store/common";
import { DEFAULT_AVATAR } from "../../../../../constant/url";
import { useState } from "react";
import { updateUser } from "../../../../../service/user";

export const EditAvatar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, getUserInfo } = useCommonStore();
  const [imageUrl, setImageUrl] = useState("");

  const handleUpdateUser = async () => {
    try {
      const result = await updateUser({
        picture_url: imageUrl,
      });
      if (result.code === 200) {
        getUserInfo();
        onClose();
      }
    } catch (error) {}
  };

  return (
    <>
      <ListItem
        title="Avatar"
        desc="Edit your avatar or upload an image"
        onClick={onOpen}
      >
        <i className="iconfont icon-icon_arrow_right"></i>
      </ListItem>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">AVATAR</ModalHeader>
              <ModalBody className="flex justify-center items-center">
                <UploadImage
                  width={150}
                  height={150}
                  className="rounded-full w-[150px] h-[150px]"
                  src={user?.picture_url || DEFAULT_AVATAR}
                  onChanged={(url) => {
                    setImageUrl(url);
                  }}
                ></UploadImage>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="bordered"
                  className={classNames("rounded")}
                  size="sm"
                  onPress={() => {
                    onClose();
                  }}
                >
                  CANCEL
                </Button>
                <Button
                  color="danger"
                  onPress={handleUpdateUser}
                  size="sm"
                  className={classNames("rounded")}
                  isLoading={false}
                >
                  CONFIRM
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
