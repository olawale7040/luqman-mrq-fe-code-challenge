import { FC, memo } from 'react';
import UpArrow from '@/assets/up.png';
import DownArrow from '@/assets/down.png';

export const getTrendIcon = (trend: 'UP' | 'DOWN' | null) => {
  switch (trend) {
    case 'UP':
      return <img src={UpArrow} className="symbolCard__trend" alt="Up Arrow" />;
    case 'DOWN':
      return <img src={DownArrow} className="symbolCard__trend" alt="Down Arrow" />;
    default:
      return null;
  }
};

type TrendArrowProps = {
  trend: 'UP' | 'DOWN' | null;
};

const TrendArrow: FC<TrendArrowProps> = ({ trend }) => {
  return getTrendIcon(trend);
};

export default memo(TrendArrow);
