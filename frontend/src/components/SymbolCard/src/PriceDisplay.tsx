import { formatNumber } from '@/utils/format-number';
import { FC, memo } from 'react';

type PriceDisplayProps = {
  price: number;
};

const PriceDisplay: FC<PriceDisplayProps> = ({ price }) => (
  <div className="symbolCard__price">
    <span>PRICE:</span>
    <strong>${formatNumber(price) || '--'}</strong>
  </div>
);

export default memo(PriceDisplay);
