import { Dispatch, SetStateAction } from "react"
import { FieldErrors, UseFormGetValues, UseFormHandleSubmit, UseFormSetValue, UseFormWatch } from "react-hook-form"






export interface ITradeHistory {
  id: number
  attributes: Attributes
}

export interface Attributes {
  volume: string
  result: string
  stop: string
  takeProfit: string
  RR: string
  sign: string
  buySell: string
  drowDown: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

// export interface ITradeHistory {
//   id: number
//   volume: number
//   result: string
//   stop: number
//   takeProfit: number
//   RR: number
//   sign: string
//   buySell: string
//   drowDown: number
//   createdAt: string
//   updatedAt: string
//   publishedAt: string
//   users: Users
// }

// export interface Users {
//   id: number
//   username: string
//   email: string
//   provider: string
//   password: string
//   resetPasswordToken: any
//   confirmationToken: any
//   confirmed: boolean
//   blocked: boolean
//   createdAt: string
//   updatedAt: string
// }

export interface ITradeObject {
  
   id: number;
   result: string;
    drowDown: string;

}
export interface Root {
  volume: number
  stop: number
  takeProfit: number
  RR: number
  drowDown: number
  sign: string
  result: string
  buySell: string
}

export interface ItradeObj {
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
export interface IformData {
  volume: string
  result: string
  stop: string
  takeProfit: string
  RR: string
  sign: string
  buySell: string
  drowDown: string
}
export interface ITradeModal {
  isOpen: boolean;
  componentToShow?: any;
  edit: boolean;
  onOpenChange: (isOpen: boolean) => void;
  watch: UseFormWatch<IformData>;
  getValues: UseFormGetValues<IformData>;
  errors: FieldErrors<IformData>;
  handleSubmit: any;
  setValue: UseFormSetValue<IformData>;
  onClick: Function;
}
export interface IDeleteModal {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClick: Function;
}
