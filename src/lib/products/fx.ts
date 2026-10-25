export const RATE: Record<string, number> = {
  USD: 1, USDC: 1, USDT: 1, EUR: 0.92, GBP: 0.79, AED: 3.6725, CNY: 7.12, ZAR: 17.6,
  KES: 129.2, NGN: 1530, GHS: 12.4, TZS: 2600, UGX: 3680, RWF: 1440, ETB: 140, XOF: 565,
  XAF: 565, CDF: 2850, ZMW: 23.8, MWK: 1735, MZN: 63.9, BWP: 13.5, CAD: 1.37, JPY: 150,
  ARS: 1480, COP: 3950,
};

export const CURRENCY_FLAG: Record<string, string> = {
  USD: "us", USDC: "us", USDT: "us", EUR: "eu", GBP: "gb", AED: "ae", CNY: "cn", ZAR: "za",
  KES: "ke", NGN: "ng", GHS: "gh", TZS: "tz", XOF: "sn", XAF: "cm", CAD: "ca", JPY: "jp",
  ARS: "ar", COP: "co",
};

export function fmt(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
