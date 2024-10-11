import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { IDeleteModal, ITradeModal } from "../interfaces";

export default function DeleteModal({
  isOpen,
  onOpenChange,
  onClick,
}: IDeleteModal) {
  return (
    <Modal
      backdrop="opaque"
      onOpenChange={onOpenChange}
      isOpen={isOpen}
      hideCloseButton={true}
      size="xl"
      placement="center"
      scrollBehavior="inside"
      //   className="max-sm:mx-4"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-asiatech-gray-900">
              حذف سابقه ترید
            </ModalHeader>
            <ModalBody>
              <div className="">آیا از حذف این سابقه مطمئن هستید؟</div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                className="text-white "
                // type="submit"
                onClick={() => {
                  onClick();
                  onClose();
                }}
              >
                حذف
              </Button>
              <Button
                color="default"
                className="text-white bg-asiatech-gray-600"
                onClick={onClose}
              >
                بازگشت
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
