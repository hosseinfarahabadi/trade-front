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

import { useTradeList } from "../hooks/useTradeList";

interface IbetTable {
  tournament: number;
  game: number;
  result: string;
  bet: number;
  wallet: number;
  winRate: number;
  walletOut: number;
}
const Calculator = () => {
  const { loading, tradeObject } = useTradeList();
  console.log(tradeObject);

  let winFlag: any = null;
  const initialBet = 100;
  let cash = 0;
  let wallet = 10000;
  let walletOut = 0;
  let bet = initialBet;

  let tournament = 1;
  let winCount = 0;
  let winRate = 0;
  let gameSet = 0;
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
    const newResult = random < 0.5 ? "h" : "t";
    return newResult;
  };
  const simulateTournament = (gameRounds: any) => {
    for (let i = 1; i <= tournament; i++) {
      for (let j = 1; j <= gameRounds; j++) {
        gameSet += 1;
        gameSetArr.push(gameSet);
        //toss a coin
        const res = tossCoin();
        //check res
        if (side === res) {
          winFlag = "W";
        } else {
          winFlag = "L";
        }

        if (winFlag == "W") {
          winCount += 1;
          wallet = wallet + bet + bet;
          if (bet > 50) {
            bet = bet / 2;
          }
          if (bet > 3000) {
            bet = initialBet;
          }
          // bet = bet * 2;
        } else {
          wallet = wallet - bet;
          // if (bet > 300) {
          //   bet = bet / 2;
          // } else {
          //   bet *= 1.5;
          // }
          bet *= 1.5;
        }
        winRate = (winCount / j) * 100;
        walletArr.push(wallet);
        historyObj = {
          tournament: i,
          game: j,
          result: winFlag,
          bet: Math.round(bet),
          wallet: Math.round(wallet),
          walletOut: Math.round(walletOut),
          winRate: Math.round(winRate),
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

  simulateTournament(500);

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
        <CardHeader className="flex p-0 mb-6 text-asiatech-gray-800">
          <ServerIcon className="w-6 h-6 ml-2" />
          <span className="font-extrabold text-base">
            بیشترین مقدار شارژ کیف پول
          </span>
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
            <TableColumn key="date"> شماره بازی </TableColumn>
            <TableColumn key="count"> شماره دست</TableColumn>
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
                  <TableCell>{data.tournament}</TableCell>
                  <TableCell>{data.game}</TableCell>
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

      <ReactECharts option={option} />
    </>
  );
};
export default Calculator;
