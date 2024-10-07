import { DatePickerIcon } from "@/components/DatePickerIcon";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { ITradeModal } from "../interfaces";

export default function AddTradeModal({
  isOpen,
  watch,
  setValue,
  onOpenChange,
  onClick,
}: ITradeModal) {
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
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    result
                  </label>
                  <Input
                    variant="bordered"
                    type="text"
                    placeholder="result"
                    className="w-full mt-2"
                    value={watch("result")}
                    classNames={{
                      input: "placeholder:text-asiatech-gray-500",
                      inputWrapper: [
                        "backdrop-saturate-200",
                        "focus-within:!border-asiatech-gray-500 !border-1",
                        "inputWrapper: h-[40px]",
                      ],
                    }}
                    onChange={(e: any) => {
                      setValue("result", e.target.value, {
                        shouldValidate: true,
                      });
                    }}
                  />
                </div>
                <div className="w-full md:w-60">
                  <label className="text-asiatech-gray-700" dir="ltr">
                    RR
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
              {/* <div className="w-full md:w-60 flex items-end">
              <Button
                  type="button"
                  color="primary"
                  isDisabled={isLoading}
                  onClick={(onClick}>
                { "جستجو"}
              </Button>
            </div> */}
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="text-white "
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
