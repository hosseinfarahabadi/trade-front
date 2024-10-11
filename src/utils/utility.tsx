export function buttonDisable(...params: any[]): boolean {
  return !params.every((param) => param !== "" && param != undefined);
}
export const nameofvalue = (
  rolesData: any,
  inName: string,
  outName: string,
  value: any
) => {
  let temp: string = "";
  rolesData.forEach((roleData: any) => {
    if (roleData.attributes[inName] == value) {
      temp = roleData[outName];
    }
  });
  return temp;
};
