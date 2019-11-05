export const LOCALE_ID_NUMBERS: {[key: number]: string} = { // keys of object as numbers - only indexer access allowed in TS
  1033: 'en', // 1033: 'en-US'
  1045: 'pl',
  2057: 'en-GB'
};

export const LOCALE_ID_CURRENCIES: {[key: string]: {code: string, display: string}} = {
  en: {
    code: 'USD',
    display: 'symbol'
  },
  pl: {
    code: 'PLN',
    display: 'symbol'
  }
};

export const IVY_ON = true;
