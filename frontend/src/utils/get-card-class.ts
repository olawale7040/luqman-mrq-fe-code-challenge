export const getCardClass = (selected: boolean, neutral: boolean) => {
  if (selected) return 'symbolCard--scaleUp';
  if (neutral) return 'symbolCard--neutral';
  return 'symbolCard--scaleDown';
};
