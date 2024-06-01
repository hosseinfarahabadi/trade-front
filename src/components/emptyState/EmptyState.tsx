import EmptyTableIcon from "@/assets/icons/EmptyTableIcon";
import { ReactNode } from "react";
interface IemptyState {
  icon?: ReactNode;
  iconClassName?: string;
  text?: string;
}
function EmptyState({
  iconClassName = "w-48 h-48",
  icon = <EmptyTableIcon className={iconClassName} />,
  text = "با جستجوی پیشرفته ابتدا تاریخ را انتخاب کنید",
}: IemptyState) {
  return (
    <div className="w-full flex flex-col mt-10 justify-center items-center">
      {icon}
      <p className="text-asiatech-gray-600 text-sm font-medium">{text}</p>
    </div>
  );
}
export default EmptyState;
