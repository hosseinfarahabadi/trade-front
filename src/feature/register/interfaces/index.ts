




export interface ITradeHistory {
  id: number
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
  users: Users
}

export interface Users {
  id: number
  username: string
  email: string
  provider: string
  password: string
  resetPasswordToken: any
  confirmationToken: any
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}
export interface ITradeObject {
  
   id: number;
   result: string;
    drowDown: number;

}
export interface IformData {
  
  name:string;
  password:string;
  email:string;
  username:string;
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
