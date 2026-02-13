"use strict";

const currencies = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const APIKEY = `57dfacaaa4962e77ebb33c1c`;
const API = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`;

const fromDropDown = document.querySelector("#from-currency-converter");
const toDropDown = document.querySelector("#to-currency-converter");
const result = document.querySelector("#result");
const fromFlag = document.querySelector(".from-flag-icon");
const toFlag = document.querySelector(".to-flag-icon");

for (let currency in currencies) {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.append(option);
}

for (let currency in currencies) {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.append(option);
}

fromDropDown.value = "USD";
toDropDown.value = "BDT";

const convertCurrency = () => {
  const amountInp = document.querySelector("#amount");
  let amount = amountInp.value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (amount < 1 || amount === "") {
    amount = 1;
    amountInp.value = 1;
  }

  if (amount.length != 0 && Number(amount)) {
    const getData = async () => {
      const loader = document.getElementById("loader");
      loader.style.display = "block"; 
      result.innerHTML = "";

      try {
        let response = await fetch(API);
        let data = await response.json();
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];

        if (!fromExchangeRate || !toExchangeRate) {
          result.innerHTML = `Conversion for ${fromCurrency} or ${toCurrency} not available.`;
          return;
        }

        const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
        if(convertedAmount > 1){
          const resultText = `${amount} ${fromCurrency} = ${Math.floor(convertedAmount)} ${toCurrency}`;
          result.innerHTML = resultText;
        }else{
          const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
          result.innerHTML = resultText;
        }
      } catch (error) {
        result.innerHTML = "Error fetching data.";
        console.error(error);
      } finally {
        loader.style.display = "none";
      }

    };

    getData();
  } else {
    result.innerHTML = `'${amount}' isn't a Number.`;
  }
};

document.querySelector("#convert-button").addEventListener("click", () => {
  convertCurrency();
});
window.addEventListener("load", convertCurrency);

fromDropDown.addEventListener("change", function () {
  fromFlag.src = `https://flagsapi.com/${currencies[this.value]}/flat/64.png`;
});

toDropDown.addEventListener("change", function () {
  toFlag.src = `https://flagsapi.com/${currencies[this.value]}/flat/64.png`;
});
