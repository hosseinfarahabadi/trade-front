import SearchNewIcon from "@/assets/icons/SearchNewIcon";
import ServerIcon from "@/assets/icons/ServerIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { Key } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { DateObject } from "react-multi-date-picker";
import { useMostDeleteVm } from "../hooks/useMostDeleteVm";
import SearchModal from "./SearchModal";
import { ITradeHistory } from "../interfaces";

const MostDeleteVm = () => {
  const { tableData, loading, page, setPage, totalPage, perPage, setPerPage } =
    useMostDeleteVm();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex flex-col lg:flex-row justify-between p-0 mb-6 text-asiatech-gray-800">
          <div className="flex gap-2">
            <ServerIcon className="w-6 h-6 ml-2" />
            <span className="font-extrabold text-base">
              گزارش مشترکین با بیشترین تعداد حذف ماشین
            </span>
          </div>
        </CardHeader>

        <Table
          aria-label="reasons table"
          shadow="none"
          isHeaderSticky
          className="!p-0 mt-1 overflow-x-auto"
          removeWrapper
          classNames={{
            th: "text-center",
            td: "text-center py-6 ",
            thead: "shadow-none",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn className="!rounded-l-none rounded-r-lg" key="id">
              #
            </TableColumn>
            <TableColumn key="date"> شناسه </TableColumn>
            <TableColumn key="count"> حجم</TableColumn>
            <TableColumn key="count"> نتیجه</TableColumn>
            <TableColumn key="count"> صود</TableColumn>
            <TableColumn key="count"> زیان</TableColumn>
            <TableColumn key="count"> RR</TableColumn>
            <TableColumn key="count"> drowDown</TableColumn>
            <TableColumn key="count"> نماد</TableColumn>
            <TableColumn key="count"> buy/Sell</TableColumn>
          </TableHeader>
          <TableBody
            loadingContent={<Spinner />}
            isLoading={loading}
            emptyContent={
              loading ? " " : <EmptyState text="اطلاعاتی وجود ندارد" />
            }
          >
            {tableData &&
              tableData?.map((data: ITradeHistory, index: number) => {
                return (
                  <TableRow className="bordertabel" key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data?.id}</TableCell>
                    <TableCell>{data?.attributes.volume}</TableCell>
                    <TableCell>{data?.attributes.result}</TableCell>
                    <TableCell>{data?.attributes.takeProfit}</TableCell>
                    <TableCell>{data?.attributes.stop}</TableCell>
                    <TableCell>{data?.attributes.RR}</TableCell>
                    <TableCell>{data?.attributes.drowDown}</TableCell>
                    <TableCell>{data?.attributes.sign}</TableCell>
                    <TableCell>{data?.attributes.buySell}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <div className="mt-10 w-full flex flex-wrap justify-start items-center">
          {totalPage > 1 && (
            <Pagination
              isDisabled={loading}
              isCompact
              showControls
              classNames={{ next: "rotate-180", prev: "rotate-180" }}
              total={totalPage}
              initialPage={page}
              onChange={(e: any) => {
                setPage(e);
              }}
            />
          )}
          {/* <SearchModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            onClick={() => {
              setPage(1);
            }}
          /> */}
        </div>
      </Card>
    </>
  );
};
export default MostDeleteVm;
