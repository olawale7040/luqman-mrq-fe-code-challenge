const formatterCache = new Map();

function getFormatter() {
  const cacheKey = 'defaultFormatter';
  if (formatterCache.has(cacheKey)) {
    return formatterCache.get(cacheKey);
  }
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact'
  });
  formatterCache.set(cacheKey, formatter);
  return formatter;
}

export const formatNumber = (number: number) => {
  const formatter = getFormatter();
  return formatter.format(number);
};
