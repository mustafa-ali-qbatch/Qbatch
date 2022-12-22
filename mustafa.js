export const getValues = (key) => (array) =>
  array.reduce((obj, item) => {
    const [date] = Object.keys(item);
    const [month, keys] = [date.slice(4, 6), Object.keys(item)];
    obj[month] = Object.values(item[keys][key]);
    return obj;
  }, {});
