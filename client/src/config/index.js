// export const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,80}$/;

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const NODE = process.env.NODE_ENV;

export const bedroomsOptions = ["Any", "1+", "3+", "5+", "8+", "15+"];

export const sqftOptions = [
  "Any",
  "30 sq+",
  "60sq+",
  "80sq+",
  "100sq+",
  "150sq+",
  "250sq+",
  "500sq+",
];

export const rentPriceOption = [
  "Any",
  "₺ 400+",
  "₺ 600+",
  "₺ 800+",
  "₺ 1000+",
  "₺ 1500+",
  "₺ 2000+",
  "₺ 5000+",
];

export const listDateOptions = [
  "Any",
  "1 veya az",
  "2 veya az",
  "7 veya az",
  "14 veya az",
  "20 veya az",
  "30 veya az",
];
