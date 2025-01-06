import './priceDisplay.css';
import { formatNumber } from '@/utils/format-number';
import { FC, memo } from 'react';

type PriceDisplayProps = {
  price: number;
};

const PriceDisplay: FC<PriceDisplayProps> = ({ price }) => (
  <div className="symbolCard__price">
    <span className="priceLabel">PRICE:</span>
    <strong className="priceValue">{price ? `$${formatNumber(price)}` : '--'}</strong>
  </div>
);

export default memo(PriceDisplay);
