const formatterCache = new Map();

function getFormatter(minimumFractionDigits: number, maximumFractionDigits: number) {
  const cacheKey = `${minimumFractionDigits}-${maximumFractionDigits}`;
  if (formatterCache.has(cacheKey)) {
    return formatterCache.get(cacheKey);
  }
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    minimumFractionDigits,
    maximumFractionDigits
  });
  formatterCache.set(cacheKey, formatter);
  return formatter;
}

export const formatNumber = (number: number, decimalPlaces = 2) => {
  const formatter = getFormatter(decimalPlaces, decimalPlaces);
  return formatter.format(number);
};
