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

import { ITradeModal } from "../interfaces";

export default function JournalModal({
  isOpen,
  watch,
  setValue,
  edit,
  errors,
  onOpenChange,
  onClick,
}: ITradeModal) {
  console.log(edit);
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
              افزودن سابقه ترید
            </ModalHeader>
            <ModalBody>
              {/* <form onSubmit={handleSubmit(onAddTrade)}> */}
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    <span className="text-asiatech-red-800">*</span> نام
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="نام ژورنال"
                    className="w-full mt-2"
                    value={watch("name")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("name", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                isDisabled={watch("name") ? false : true}
                color="primary"
                className="text-white "
                // type="submit"
                onClick={() => {
                  onClick();
                  onClose();
                }}
              >
                {edit ? <span>ویرایش</span> : <span>افزودن</span>}
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
