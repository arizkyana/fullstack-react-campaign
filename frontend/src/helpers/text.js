export const getCurrency = (priceText) => {
  const reverse = priceText.toString().split("").reverse().join("");
  const ribuan = reverse.match(/\d{1,3}/g);
  return ribuan?.join(".").split("").reverse().join("");
};
