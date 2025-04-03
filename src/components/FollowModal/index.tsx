"use client";
import classNames from "classnames";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@heroui/react";

import { IFollowModalType, useCommonStore } from "../../store/common";
import { List } from "./List";

export const FollowModal = () => {
  const { followModalData, toggleFollowModalData, switchFollowModal } =
    useCommonStore();

  return (
    <Modal
      isOpen={followModalData?.isOpen}
      placement="center"
      onClose={() => {
        toggleFollowModalData(
          followModalData?.uid as string,
          followModalData?.type as IFollowModalType
        );
      }}
      backdrop="blur"
      classNames={{
        base: "h-[700px]",
        wrapper: "rounded-[10px]",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <Tabs
                aria-label="Options"
                selectedKey={followModalData?.type as IFollowModalType}
                classNames={{
                  panel: "h-[calc(100%-50px)]",
                }}
                onSelectionChange={(key) => {
                  switchFollowModal(key as IFollowModalType);
                }}
              >
                <Tab key="1" title="Following">
                  <List type="1" uid={followModalData?.uid as string}></List>
                </Tab>
                <Tab key="2" title="Followers">
                  <List type="2" uid={followModalData?.uid as string}></List>
                </Tab>
              </Tabs>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
