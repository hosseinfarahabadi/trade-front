




export interface ITradeHistory {
  id: number
  attributes: Attributes
}
export interface ITradeObject {
  
   result: string;
    drowDown: number;

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
