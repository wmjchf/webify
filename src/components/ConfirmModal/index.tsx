"use client";
import classNames from "classnames";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export interface IConfirmModalRef {
  open: () => void;
}
interface IConfirmModal {
  title: string;
  content: string;
  onConfirm?: () => Promise<void>;
  ref?: React.Ref<IConfirmModalRef>;
}
export const ConfirmModal = forwardRef<IConfirmModalRef, IConfirmModal>(
  (props, ref) => {
    const { title, content, onConfirm } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    useImperativeHandle(
      ref,
      () => {
        return {
          open: () => {
            setIsOpen(true);
          },
        };
      },
      []
    );
    return (
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} className="rounded">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{content}</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="bordered"
                  className={classNames("rounded")}
                  size="sm"
                  onPress={() => {
                    setIsOpen(false);
                  }}
                >
                  CANCEL
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  className={classNames("rounded")}
                  isLoading={loading}
                  onPress={async () => {
                    try {
                      setLoading(true);
                      await onConfirm?.();
                      setIsOpen(false);
                    } catch (error) {
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  CONFIRM
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  }
);
