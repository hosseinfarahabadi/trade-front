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

export default function AddTradeModal({
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
                  <label className="text-asiatech-gray-700 " dir="ltr">
                    <span className="text-asiatech-red-800">*</span> result
                  </label>
                  <Select
                    onChange={(e: any) => {
                      setValue("result", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                    selectedKeys={[String(watch("result"))]}
                    // selectedKeys={getValues("result") ? new Set<Key>([String(getValues("result"))]) : ""}
                    defaultSelectedKeys={"w"}
                    // disabledKeys={totalPage < 2 ? ["10", "15"] : totalPage < 3 ? ["15"] : []}
                    variant="bordered"
                    className="w-full mt-2 shadow-none "
                    classNames={{
                      trigger: "p-4  h-10 bg-white shadow-none border-1 ",
                      label: "hidden ",
                      value: "text-right",
                      innerWrapper: "!pt-0",
                      selectorIcon: "right-[unset] left-3",
                    }}
                  >
                    <SelectItem value="w" key="w">
                      w
                    </SelectItem>
                    <SelectItem value="l" key="l">
                      l
                    </SelectItem>
                  </Select>
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    <span className="text-asiatech-red-800">*</span> RR
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="RR"
                    className="w-full mt-2"
                    value={watch("RR")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("RR", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.RR && (
                    <p className="text-red-500 text-sm mt-1 mr-2">{`${errors.RR.message}`}</p>
                  )}
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    buySell
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="buySell"
                    className="w-full mt-2"
                    value={watch("buySell")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("buySell", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    drowDown
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="drowDown"
                    className="w-full mt-2"
                    value={watch("drowDown")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("drowDown", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    takeProfit
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="takeProfit"
                    className="w-full mt-2"
                    value={watch("takeProfit")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("takeProfit", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    stop
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="stop"
                    className="w-full mt-2"
                    value={watch("stop")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("stop", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    volume
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="volume"
                    className="w-full mt-2"
                    value={watch("volume")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("volume", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    sign
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="sign"
                    className="w-full mt-2"
                    value={watch("sign")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("sign", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                isDisabled={watch("RR") ? false : true}
                color="primary"
                className="text-white "
                // type="submit"
                onClick={() => {
                  onClick();
                  onClose();
                }}
              >
                افزودن
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
