import { FC } from 'react';

type PriceDisplayProps = {
  price: number;
};

const PriceDisplay: FC<PriceDisplayProps> = ({ price }) => (
  <div className="symbolCard__price">
    <span>PRICE:</span>
    <strong>${price || '--'}</strong>
  </div>
);

export default PriceDisplay;
