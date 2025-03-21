"use client";
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
  Input,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useCommonStore } from "../../../../store/common";
import { updateUser, getUserInfo } from "../../../../service/user";

export const DisplayName = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user, getUserInfo } = useCommonStore();
  const [nickname, setNickname] = useState(user?.nickname);

  const handleUpdateUser = async () => {
    try {
      const result = await updateUser({ nickname });
      if (result.code === 200) {
        getUserInfo();
        onClose();
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user?.nickname) {
      setNickname(user?.nickname);
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
                DISPLAY NAME
              </ModalHeader>
              <ModalBody>
                <Input
                  value={nickname}
                  label=""
                  placeholder="display name"
                  className="rounded overflow-hidden"
                  onChange={(event) => {
                    setNickname(event.target.value);
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
