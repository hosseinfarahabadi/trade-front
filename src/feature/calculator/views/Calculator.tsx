import ServerIcon from "@/assets/icons/ServerIcon";
import {
  Card,
  CardHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import ReactECharts from "echarts-for-react";

import { useCalculator } from "../hooks/useCalculator";
import { ITradeObject } from "../interfaces";
import NumberSeparator from "@/utils/NumberSeprator";

interface IbetTable {
  id: number;
  result: string;
  bet: number;
  wallet: number;
  winRate: number;
  walletOut: number;
  RR: string;
}
const Calculator = () => {
  const { loading, tradeObject } = useCalculator();

  let winFlag: any = null;
  let cash = 0;
  let wallet = 1000;
  const initialBet = 10;
  let walletOut = 0;
  let bet = initialBet;

  let tournament = 1;
  let winCount = 0;
  let winRate = 0;
  let gameSet = 0;
  let lossCount = 0;
  let mostLossNum = 0;
  let tradeNumber: number[] = [];
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

  const simulateTrade = () => {
    tradeObject.map((trade: ITradeObject, index: number) => {
      tradeNumber.push(index);
      if (trade.result == "w") {
        lossCount = 0;
        winCount += 1;
        wallet = wallet + bet + bet;
        if (bet > (wallet * 1) / 100 / 2) {
          bet = bet / 2;
        }
        if (bet > 300) {
          bet = (wallet * 1) / 100;
        }
        winRate = (winCount / tradeObject.length) * 100;
        walletArr.push(wallet);
        historyObj = {
          id: trade.id,
          result: trade.result,
          bet: Math.round(bet),
          wallet: Math.round(wallet),
          walletOut: Math.round(walletOut),
          winRate: Math.round(winRate),
          RR: trade.RR,
        };
        history.push(historyObj);
        // bet = bet * 2;
      } else if (trade.result == "l") {
        wallet = wallet - bet;
        lossCount += 1;
        if (lossCount > mostLossNum) {
          mostLossNum = lossCount;
        }
        // let lessMonyy = (wallet * 50) / 100;
        // if (bet > lessMonyy) {
        //   bet = initialBet;
        // }
        // if (bet > 300) {
        //   bet = bet / 2;
        // } else {
        //   bet *= 1.5;
        // }
        bet *= 1.5;
        winRate = (winCount / tradeObject.length) * 100;
        walletArr.push(wallet);
        historyObj = {
          id: trade.id,
          result: trade.result,
          bet: Math.round(bet),
          wallet: Math.round(wallet),
          walletOut: Math.round(walletOut),
          winRate: Math.round(winRate),
          RR: trade.RR,
        };
        history.push(historyObj);
      } else {
      }
    });
  };
  simulateTrade();
  // const tossCoin = () => {
  //   const random = Math.random();
  //   const newResult = random < 0.5 ? "h" : "t";
  //   return newResult;
  // };
  // const simulateTournament = (gameRounds: any) => {
  //   for (let i = 1; i <= tournament; i++) {
  //     for (let j = 1; j <= gameRounds; j++) {
  //       gameSet += 1;
  //       gameSetArr.push(gameSet);
  //       //toss a coin
  //       const res = tossCoin();
  //       //check res
  //       if (side === res) {
  //         // console.log("win");
  //         winFlag = "W";
  //       } else {
  //         // console.log("lose");
  //         winFlag = "L";
  //       }

  //       if (winFlag == "W") {
  //         lossCount = 0;
  //         winCount += 1;
  //         wallet = wallet + bet + bet;
  //         if (bet > (wallet * 1) / 100 / 2) {
  //           bet = bet / 2;
  //         }
  //         if (bet > 300) {
  //           bet = (wallet * 1) / 100;
  //         }
  //         // bet = bet * 2;
  //       } else {
  //         wallet = wallet - bet;
  //         lossCount += 1;
  //         if (lossCount > mostLossNum) {
  //           mostLossNum = lossCount;
  //         }
  //         // let lessMonyy = (wallet * 50) / 100;
  //         // console.log(lessMonyy);
  //         // if (bet > lessMonyy) {
  //         //   bet = initialBet;
  //         // }
  //         // if (bet > 300) {
  //         //   bet = bet / 2;
  //         // } else {
  //         //   bet *= 1.5;
  //         // }
  //         bet *= 1.5;
  //       }
  //       winRate = (winCount / j) * 100;
  //       walletArr.push(wallet);
  //       historyObj = {
  //         initialBet: initialBet,
  //         tournament: i,
  //         game: j,
  //         result: winFlag,
  //         bet: Math.round(bet),
  //         wallet: Math.round(wallet),
  //         walletOut: Math.round(walletOut),
  //         winRate: Math.round(winRate),
  //         mostLossNum: mostLossNum,
  //       };
  //       history.push(historyObj);
  //       // console.log("wallet:", wallet);
  //       // console.log("bet:", bet);
  //     }
  //     // console.log("walletOut:", wallet);

  //     // console.log("historyObj:", historyObj);
  //     bet = initialBet;
  //     winFlag = null;
  //   }
  // };

  // simulateTournament(500);

  const option = {
    xAxis: {
      type: "category",
      data: tradeNumber,
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
        <CardHeader className="flex p-0 mb-6 text-asiatech-gray-800">
          <ServerIcon className="w-6 h-6 ml-2" />
          <span className="font-extrabold text-base">
            ماشین حساب مدریت سرمایه و ریسک
          </span>
        </CardHeader>

        <Table
          aria-label="reasons table"
          shadow="none"
          isHeaderSticky
          className="!p-0 mt-1 overflow-x-auto  "
          removeWrapper
          classNames={{
            th: "text-center !bg-asiatech-blue-500",
            td: "text-right  ",
            tr: "!bg-asiatech-blue-500",
            thead: "shadow-none  ",
            table: "text-asiatech-gray-800",
          }}
        >
          <TableHeader>
            <TableColumn key="count"> شناسه</TableColumn>
            <TableColumn key="count"> نتیجه بازی</TableColumn>
            <TableColumn key="count"> نرخ برد</TableColumn>
            <TableColumn key="count"> مقدار شرط</TableColumn>
            <TableColumn key="count"> کیف پول</TableColumn>
            <TableColumn key="count"> RR</TableColumn>
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
                <TableRow className="bordertabel" key={data.id}>
                  <TableCell>{data?.id}</TableCell>
                  <TableCell>
                    {data?.result == "w" ? (
                      <div className="p-4 w-10 bg-asiatech-green-500 rounded-2xl ">
                        {data?.result}
                      </div>
                    ) : (
                      <div className="p-4 w-10 flex justify-center bg-asiatech-red-500 rounded-2xl ">
                        {data?.result}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{data?.winRate}</TableCell>
                  <TableCell className="text-2xl">{data.bet}</TableCell>
                  <TableCell className="">
                    <div className=" p-4 rounded-2xl ">
                      {NumberSeparator(data.wallet)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="">{data.RR}</span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>

      <ReactECharts option={option} />
    </>
  );
};
export default Calculator;
