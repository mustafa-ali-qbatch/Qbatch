/* eslint-disable no-var */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable implicit-arrow-linebreak */
import { sortBy, map, orderBy, sumBy, omit, omitBy } from "lodash";
import moment from "moment";
export const getMonths = (apiData) => {
  const months = apiData.reduce((arr, keywordObj) => {
    const [date] = Object.keys(keywordObj);
    const month = date.slice(4, 6);
    if (!arr.includes(month)) arr.push(month);
    return arr;
  }, []);
  months.sort();
  return months;
};
export const getAdsDate = (date) => moment(date).format("YYYY-MM-DD");
export const getValues = (key) => (data) =>
  data.reduce((obj, item) => {
    const [date] = Object.keys(item);
    const [month, keys] = [date.slice(4, 6), Object.keys(item)];
    obj[month] = Object.values(item[keys][key]);
    return obj;
  }, {});

export const getKeywords = (data, key) => {
  const objKey = Object.keys(data[0]);
  return Object.keys(data[0][objKey][key]);
};
export const getData = (apiData) => {
  return apiData?.data?.data;
};
export const getSocialTotal = (contacts) =>
  sumBy(contacts, (contact) =>
    sumBy(Object.values(omit(contact, "kind", "value")), "followers")
  );

export const getArrayValues = (ref, storeName, key) => {
  if (typeof ref.value[storeName][key] === "string") {
    ref.value[storeName][key] = ref.value[storeName][key].split(",");
  }
};
export const getTrafficMonths = (monthArray) => {
  const months = sortBy(
    monthArray.map((item) => {
      const [month] = item.split("-");
      return month;
    }),
    (date) => moment(date, "MMM")
  ).map((month) => month.toLowerCase());
  return months;
};

export const getSortedValues = (keywords, values) => {
  const arrayOfArray = keywords.map((keyword, _i) => [keyword, values[_i]]);
  const newArr = orderBy(arrayOfArray, (arr) => parseInt(arr[1]), ["desc"]);
  return [0, 1].map((key) => map(newArr, key));
};
export const getPercentageValues = (values) => {
  let sum = 0;
  values.forEach((item) => {
    sum += parseFloat(item);
  });
  const newValues = values.map((item) => {
    return parseFloat(((parseFloat(item) / sum) * 100).toFixed(2));
  });
  return newValues;
};
export const parseUrl = (url) => {
  if (!url) return "#";
  const arr = url.split("/");
  if (arr[0]?.includes("http")) return url;
  else return `https://${url}`;
};
export const filtersData = {
  stores: {
    product_count: {
      min: "",
      max: "",
    },
    estimated_sales: {
      min: "",
      max: "",
    },
    keyword: "",
    categories: "",
    description: "",
    platform_rank: {
      min: "",
      max: "",
    },
    state: "",
  },
  social: {
    kind: "",
    followers: {
      min: "",
      max: "",
    },
    value: "",
  },
  organic: {
    domain_name: "",
    competitor_relevance: {
      min: "",
      max: "",
    },
    keyword: "",
    position: {
      min: "",
      max: "",
    },
    traffic_percentage: {
      min: "",
      max: "",
    },
    search_volume: {
      min: "",
      max: "",
    },
    cpc: {
      min: "",
      max: "",
    },
  },
  paid: {
    domain_name: "",
    competitor_relevance: {
      min: "",
      max: "",
    },
    keyword: "",
    position: {
      min: "",
      max: "",
    },
    traffic_percentage: {
      min: "",
      max: "",
    },
    search_volume: {
      min: "",
      max: "",
    },
    cpc: {
      min: "",
      max: "",
    },
  },
};
export const sanitizeQP = (params = {}) => omitBy(params, (val) => !val);

export const thresholds = ["min", "max"];
export const colorMapping = {
  facebook: "1877f2",
  facebookgroup: "1877f2",
  facebookold: "3b5998",
  twitter: "1da1f2",
  youtube: "ff0000",
  instagrammagenta: "c32aa3",
  instagram: "c32aa3",
  instagramblue: "4c5fd7",
  instagrampurple: "7232bd",
  instagramorange: "f46f30",
  instagramyellow: "ffdc7d",
  google: "4285f4",
  googleblue: "4285f4",
  googlered: "ea4335 ",
  googleyellow: "fbbc05 ",
  googlegreen: "34a853",
  pinterest: "bd081c",
  googleplus: "db4437",
  linkedin: "0a66c2",
  vimeoblue: "1ab7ea",
  tumblr: "2c4762",
  snapchat: "fffc00",
  whatsappgreen: "25d366",
  whatsapp: "25d366",
  whatsappteal1: "075e54",
  whatsappteal2: "128c7e",
  tiktok: "010101",
  tiktokblack: "010101",
  tiktookblue: "69c9d0",
  tiktokpink: "ee1d52",
  tiktokwhite: "fff",
  mastodon: "2b90d9",
  apple: "a6b1b7",
  amazon: "ff9900",
  alexablue: "00a7ce",
  alexadkblue: "232f3e",
  microsoft: "03a5f0",
  microsoftred: "f35022",
  microsoftgreen: "80bb03",
  microsoftblue: "03a5f0",
  microsoftyellow: "ffb903",
  periscope: "40a4c4",
  foursquarepink: "f94877 ",
  foursquarenavy: "073282",
  foursquareblue: "2d5be3 ",
  yelp: "d32323",
  swarm: "ffa633",
  medium: "02b875",
  skypeblue: "00aff0",
  skypedkblue: "0078d7",
  android: "a4c639",
  stumbleupon: "e94826",
  flickrpink: "f40083",
  flickrblue: "006add",
  yahoo: "430297",
  twitch: "9146ff",
  soundcloud: "ff5500",
  spotifygreen: "1ed760",
  spotifydarkgreen: "1db954",
  dribbble: "ea4c89",
  slackpurple: "4a154b ",
  slackblue: "36c5f0 ",
  slackgreen: "2eb67d ",
  slackred: "e01e5a ",
  slackyellow: "ecb22e ",
  reddit: "ff5700",
  deviantart: "05cc47",
  pocket: "ee4056",
  quora: "aa2200",
  quorablue: "2b6dad",
  slideshareorange: "e68523",
  slideshareblue: "00a0dc",
  fivehundredpx: "0099e5",
  vk: "4a76a8",
  listlyorange: "df6d46",
  listlyblue: "52b1b3",
  vine: "00b489",
  steam: "171a21",
  discord: "5865f2",
  telegram: "0088cc",
  clarity: "61bed9",
  homeadvisor: "f89000",
  houzz: "4dbc15",
  angi: "ff6153",
  glassdoor: "0caa41",
};
export const itercomChat = function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic("reattach_activator");
    ic("update", w.intercomSettings);
  } else {
    var d = document;
    var i = function () {
      i.c(arguments);
    };
    i.q = [];
    i.c = function (args) {
      i.q.push(args);
    };
    w.Intercom = i;
    var l = function () {
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.intercom.io/widget/p04m2pjq";
      var x = d.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    };
    if (document.readyState === "complete") {
      l();
    } else if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  }
};
export default {};
