const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (price) => intl.format(price); // so that this is not a hook
export default function useCurrency(price) {
  return priceConverter(price);
}
