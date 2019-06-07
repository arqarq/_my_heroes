export type ProductParamsType = {
  description: string,
  name: string,
  price: number
};

export type ObjectPassedByEventDTO = {
  wasCtrlKeyPressed: boolean,
  productPassedViaEvent: ProductParamsType
};
