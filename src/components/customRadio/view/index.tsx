import { VisuallyHidden, useRadio } from "@nextui-org/react";

export default function CustomeRadio(props: any) {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getControlProps,
  } = useRadio(props);
  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
    </Component>
  );
}
