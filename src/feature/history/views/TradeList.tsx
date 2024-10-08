import SearchNewIcon from "@/assets/icons/SearchNewIcon";
import ServerIcon from "@/assets/icons/ServerIcon";
import EmptyState from "@/components/emptyState/EmptyState";
import {
  Button,
  Card,
  CardHeader,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { useTradeList } from "../hooks/useTradeList";
import { ITradeHistory } from "../interfaces";
import AddTradeModal from "./AddTradeModal";

const TradeList = () => {
  const {
    tableData,
    loading,
    page,
    setPage,
    totalPage,
    router,
    setValue,
    watch,
    getValues,
    handleSubmit,
    reset,
    onAddTrade,
    errors,
  } = useTradeList();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex flex-col lg:flex-row justify-between p-0 mb-6 text-asiatech-gray-800">
          <div className="w-full flex items-center justify-between gap-2">
            {/* <ServerIcon className="w-6 h-6 ml-2" /> */}
            <p className="font-extrabold text-base">نتایج معاملات</p>
            <Button
              color="primary"
              className=""
              onClick={() => {
                onOpen();
              }}
            >
              افزودن ترید
            </Button>
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
            td: "text-right py-6 ",
            thead: "shadow-none",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn className="!rounded-l-none rounded-r-lg" key="id">
              #
            </TableColumn>
            <TableColumn key="date"> شناسه </TableColumn>
            <TableColumn key="count"> RR</TableColumn>
            <TableColumn key="count"> نتیجه</TableColumn>
            <TableColumn key="count"> حجم</TableColumn>
            <TableColumn key="count"> صود</TableColumn>
            <TableColumn key="count"> زیان</TableColumn>
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
                  <TableRow className="bordertabel" key={data.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data?.id}</TableCell>
                    <TableCell>
                      {data?.attributes.RR ? (
                        data?.attributes.RR
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data.attributes.result ? (
                        data?.attributes.result
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data.attributes.volume ? (
                        data?.attributes.volume
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data?.attributes.takeProfit ? (
                        data?.attributes.takeProfit
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data?.attributes.stop ? (
                        data?.attributes.stop
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data?.attributes.drowDown ? (
                        data?.attributes.drowDown
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data?.attributes.sign ? (
                        data?.attributes.sign
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {data?.attributes.buySell ? (
                        data?.attributes.buySell
                      ) : (
                        <span>&mdash;</span>
                      )}
                    </TableCell>
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
        </div>
      </Card>
      <AddTradeModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        watch={watch}
        getValues={getValues}
        setValue={setValue}
        errors={errors}
        handleSubmit={handleSubmit}
        onClick={() => {
          onAddTrade();
        }}
      />
    </>
  );
};
export default TradeList;
