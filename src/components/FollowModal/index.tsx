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

import { useCommonStore } from "../../store/common";
import { List } from "./List";

export const FollowModal = () => {
  const { followModalData, toggleFollowModalData } = useCommonStore();

  return (
    <Modal
      isOpen={followModalData?.isOpen}
      placement="center"
      onClose={() => {
        toggleFollowModalData(followModalData?.uid as string);
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
                classNames={{
                  panel: "h-[calc(100%-50px)]",
                }}
              >
                <Tab key="following" title="Following">
                  <List type="following"></List>
                </Tab>
                <Tab key="followers" title="Followers">
                  <List type="followers"></List>
                </Tab>
              </Tabs>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
