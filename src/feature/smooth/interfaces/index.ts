




export interface ITradeHistory {
  id: number
  attributes: Attributes
}
export interface ITradeObject {
  
   id: number;
   result: string;
    drowDown: number;

}
export interface IformData {
  
  risk:string;
  initialWallet:string;
  winRate:string;
  riskToRiward:string;
  positionNumber:string;

}

export interface Attributes {
  volume: number
  result: string
  stop: number
  takeProfit: number
  RR: number
  sign: string
  buySell: string
  drowDown: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}
