"use client";
import styles from "./index.module.scss";
import classNames from "classnames";
import { ListItem } from "../../../../components/ListItem";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useCommonStore } from "../../../../store/common";
import { updateUser } from "../../../../service/user";

export const EditDescription = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, getUserInfo } = useCommonStore();
  const [bio, setBio] = useState(user?.bio);

  const handleUpdateUser = async () => {
    try {
      const result = await updateUser({ bio });
      if (result.code === 200) {
        getUserInfo();
        onClose();
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user?.bio) {
      setBio(user?.bio);
    }
  }, [user]);

  return (
    <>
      <ListItem
        title="Display Name"
        desc="Changing your display name won’t change your username"
        onClick={onOpen}
      >
        <i className="iconfont icon-icon_arrow_right"></i>
      </ListItem>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="rounded">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                DESCRIPTION
              </ModalHeader>
              <ModalBody>
                <Textarea
                  value={bio}
                  label=""
                  placeholder="bio"
                  className="rounded overflow-hidden"
                  onChange={(event) => {
                    setBio(event.target.value);
                  }}
                />
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
