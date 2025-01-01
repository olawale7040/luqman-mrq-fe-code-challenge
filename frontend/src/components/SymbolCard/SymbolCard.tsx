import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import { useState, useEffect } from 'react';
import SymbolCardHeader from '@/components/SymbolCard/src/SymbolCardHeader';
import PriceDisplay from '@/components/SymbolCard/src/PriceDisplay';
import SymbolCardInfo from '@/components/SymbolCard/src/SymbolCardInfo';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  selected: boolean;
  neutral: boolean;
};

const SymbolCard = ({ id, onClick, price, selected, neutral }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const showCardInfo = useAppSelector(selectShowCardInfo);

  const [prevPrice, setPrevPrice] = useState(price);
  const [shake, setShake] = useState(false);
  const [priceChangeClass, setPriceChangeClass] = useState('');

  const handleOnClick = () => onClick(id);

  const cardClass = selected
    ? 'symbolCard--scaleUp'
    : neutral
    ? 'symbolCard--neutral'
    : 'symbolCard--scaleDown';

  useEffect(() => {
    const priceDiff = price - prevPrice;
    const percentageChange = (priceDiff / prevPrice) * 100;

    if (priceDiff > 0) {
      setPriceChangeClass('symbolCard__up');
    } else if (priceDiff < 0) {
      setPriceChangeClass('symbolCard__down');
    } else {
      setPriceChangeClass('');
    }

    if (percentageChange > 25) {
      setShake(true);
      setTimeout(() => setShake(false), 700);
    }

    setPrevPrice(price);
  }, [price]);

  return (
    <div
      onClick={handleOnClick}
      className={`symbolCard ${shake ? 'symbolCard__shake' : ''} ${cardClass} ${priceChangeClass}`}
    >
      <SymbolCardHeader id={id} trend={trend} />
      <div className="symbolCard__body">
        <PriceDisplay price={price} />

        {showCardInfo && (
          <SymbolCardInfo companyName={companyName} industry={industry} marketCap={marketCap} />
        )}
      </div>
    </div>
  );
};

export default SymbolCard;
