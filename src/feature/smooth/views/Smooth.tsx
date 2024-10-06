import ServerIcon from "@/assets/icons/ServerIcon";
import {
  Button,
  Card,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import ReactECharts from "echarts-for-react";
import React, { useEffect } from "react";
import { useSmooth } from "../hooks/useSmooth";

interface IbetTable {
  // id: number;
  initialBet: number;
  tournament: number;
  game: number;
  mostLossNum: number;
  result: string;
  bet: number;
  wallet: number;
  winRate: number;
  walletOut: number;
}
const Smooth = () => {
  const {
    loading,
    tradeObject,
    positionNumber,
    setPositionNumber,
    riskToRiward,
    setRiskToRiward,
    winRate,
    setWinRate,
    risk,
    setRisk,
    initialWallet,
    setWinitialWallet,
    handleSubmit,
    getValues,
    setValue,
  } = useSmooth();
  console.log(getValues());
  let winFlag: any = null;
  let cash = 0;
  let wallet = initialWallet;
  const initialBet = (wallet * risk) / 100;
  let walletOut = 0;
  let bet = initialBet;

  let tournament = 1;
  let winCount = 0;
  let winRatePer = 0;
  let gameSet = 0;
  let lossCount = 0;
  let mostLossNum = 0;
  let tradeNumber: number[] = [];
  let gameSetArr: number[] = [];
  let walletArr: number[] = [];
  // let gameRounds = 5
  let history: IbetTable[] = [
    // {
    //   cash: 0,
    //   tournament: 1,
    //   gameRounds:0
    // }
  ];
  let historyObj: IbetTable;
  const side = "h";

  const tossCoin = () => {
    const random = Math.random();
    const newResult = random < winRate / 100 ? "h" : "t";
    return newResult;
  };
  useEffect(() => {
    simulateTournament(positionNumber);
  }, []);

  const simulateTournament = (gameRounds: any) => {
    for (let i = 1; i <= tournament; i++) {
      for (let j = 1; j <= gameRounds; j++) {
        gameSet += 1;
        gameSetArr.push(gameSet);
        //toss a coin
        const res = tossCoin();
        //check res
        if (side === res) {
          // console.log("win");
          winFlag = "W";
        } else {
          // console.log("lose");
          winFlag = "L";
        }

        if (winFlag == "W") {
          lossCount = 0;
          winCount += 1;
          // initialWallet, setWinitialWallet;
          // setWinitialWallet(
          //   (prevWallet) => prevWallet + bet * riskToRiward - 0.5
          // );
          wallet = wallet + bet * riskToRiward - 0.5;
          if (bet > (wallet * 1) / 100) {
            bet = bet / 2;
          }
          if (bet > 300) {
            bet = (wallet * 1) / 100;
          }
          // bet = bet * 2;
        } else {
          // setWinitialWallet((prevWallet) => prevWallet - bet - 0.5);
          wallet = wallet - bet;
          lossCount += 1;
          if (lossCount > mostLossNum) {
            mostLossNum = lossCount;
          }
          // let lessMonyy = (wallet * 50) / 100;
          // console.log(lessMonyy);
          // if (bet > lessMonyy) {
          //   bet = initialBet;
          // }
          // if (bet > 300) {
          //   bet = bet / 2;
          // } else {
          //   bet *= 1.5;
          // }
          // if (lossCount == 5) {
          //   bet = (wallet * 2) / 100;
          // }
          bet *= 1.6;
        }
        winRatePer = (winCount / j) * 100;
        walletArr.push(wallet);
        historyObj = {
          initialBet: initialBet,
          tournament: i,
          game: j,
          result: winFlag,
          bet: Math.round(bet),
          wallet: Math.round(wallet),
          walletOut: Math.round(walletOut),
          winRate: Math.round(winRatePer),
          mostLossNum: mostLossNum,
        };
        history.push(historyObj);
        // console.log("wallet:", wallet);
        // console.log("bet:", bet);
      }
      // console.log("walletOut:", wallet);

      // console.log("historyObj:", historyObj);
      bet = initialBet;
      winFlag = null;
    }
  };
  simulateTournament(positionNumber);
  // simulateTournament(600);
  const option = {
    xAxis: {
      type: "category",
      data: gameSetArr,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: walletArr,
        type: "line",
        smooth: true,
      },
    ],
    dataZoom: [
      // {
      //   type: "inside",
      //   start: 0,
      //   end: 20,
      // },
      {
        type: "slider",
        xAxisIndex: 0,
        filterMode: "none",
      },
      {
        type: "slider",
        yAxisIndex: 0,
        filterMode: "none",
      },
      {
        type: "inside",
        xAxisIndex: 0,
        filterMode: "none",
      },
      {
        type: "inside",
        yAxisIndex: 0,
        filterMode: "none",
      },
      // {
      //   start: 0,
      //   end: 20,
      // },
    ],
  };
  return (
    <>
      <Card className="px-4 py-6 mt-6 overflow-visible">
        <CardHeader className="flex items-start flex-col p-0 mb-6 text-asiatech-gray-800">
          <div className="flex ">
            <span className="font-extrabold text-base">
              ماشین حساب مدریت سرمایه و ریسک
            </span>
          </div>
          <div className="w-full grid grid-cols-3 gap-3">
            <div className="w-full mt-4">
              <label className="text-asiatech-gray-700" dir="ltr">
                R:R
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="ریسک به ریوارد"
                className="w-full mt-2"
                // value={getValues("riskToRiward")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("riskToRiward", e.target.value);
                  // setRiskToRiward(e.target.value);
                }}
              />
            </div>
            <div className="w-full mt-4">
              <label className="text-asiatech-gray-700" dir="ltr">
                winRate
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="نرخ برد"
                className="w-full mt-2"
                // value={getValues("winRate")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("winRate", e.target.value);
                  // setWinRate(e.target.value);
                }}
              />
            </div>
            <div className="w-full mt-4">
              <label className="text-asiatech-gray-700" dir="ltr">
                risk
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="میزان ریسک"
                className="w-full mt-2"
                // value={getValues("risk")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("risk", e.target.value);
                  // setRisk(e.target.value);
                }}
              />
            </div>
            <div className="w-full mt-4">
              <label className="text-asiatech-gray-700" dir="ltr">
                wallet
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="کیف پول"
                className="w-full mt-2"
                // value={getValues("initialWallet")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("initialWallet", e.target.value);
                  // setWinitialWallet(e.target.value);
                }}
              />
            </div>
            <div className="w-full mt-4">
              <label className="text-asiatech-gray-700" dir="ltr">
                position number
              </label>
              <Input
                variant="bordered"
                type="text"
                placeholder="تعداد پوزیشن"
                className="w-full mt-2"
                // value={getValues("positionNumber")}
                classNames={{
                  input: "placeholder:text-asiatech-gray-500",
                  inputWrapper: [
                    "backdrop-saturate-200",
                    "focus-within:!border-asiatech-gray-500 !border-1",
                    "inputWrapper: h-[40px]",
                  ],
                }}
                onChange={(e: any) => {
                  setValue("positionNumber", e.target.value);
                  // setValue("user", e.target.value, { shouldValidate: true });
                  // setPositionNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <Button
            color="primary"
            className="text-white mt-4"
            onClick={() => handleSubmit()}
          >
            اعمال
          </Button>
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
            <TableColumn key="count"> شناسه</TableColumn>
            <TableColumn key="count"> نتیجه بازی</TableColumn>
            <TableColumn key="count"> نرخ برد</TableColumn>
            <TableColumn key="count"> مقدار شرط</TableColumn>
            <TableColumn key="count"> کیف پول</TableColumn>
            <TableColumn key="count"> سود و زیان</TableColumn>
          </TableHeader>
          <TableBody
            loadingContent={<Spinner />}
            isLoading={loading}
            emptyContent={
              loading ? " " : "بازه زمانی و نوع مشترک را انتخاب کنید."
            }
          >
            {history?.map((data: IbetTable, index: number) => {
              return (
                <TableRow className="bordertabel" key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {data?.result == "W" ? (
                      <span className="p-4 bg-asiatech-green-500 rounded-2xl ">
                        {data?.result}
                      </span>
                    ) : (
                      <span className="p-4 bg-asiatech-red-500 rounded-2xl ">
                        {data?.result}
                      </span>
                    )}
                  </TableCell>
                  <TableCell>{data?.winRate}</TableCell>
                  <TableCell className="text-2xl">{data.bet}</TableCell>
                  <TableCell>
                    <span className="bg-asiatech-orange-800 text-white p-4 rounded-2xl text-2xl">
                      {data.wallet}
                    </span>
                  </TableCell>
                  <TableCell>
                    {data.walletOut > 1000 ? (
                      <span className="bg-asiatech-green-400 text-asiatech-green-901 p-4 rounded-2xl text-2xl">
                        {data.walletOut}
                      </span>
                    ) : (
                      <span className="bg-asiatech-red-400 text-asiatech-red-901 p-4 rounded-2xl text-2xl">
                        {data.walletOut}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>

      <ReactECharts style={{ height: "600px" }} option={option} />
    </>
  );
};
export default Smooth;
