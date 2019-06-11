export type ProductParamsType = {
  description: string,
  name: string,
  price: number
};

export type ObjectPassedByEventDTO = {
  wasCtrlKeyPressed: boolean,
  productPassedViaEvent: ProductParamsType
};

export type FormDataNow = {
  name: string,
  address: string
};

export type ShippingOptions = {
  type: string,
  price: number
};
