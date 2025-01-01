import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import UpArrow from '@/assets/up.png';
import DownArrow from '@/assets/down.png';
import { useAppSelector } from '@/hooks/redux';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import ListItem from '@/components/ListItem';
import { useState, useEffect } from 'react';

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
      <div className="symbolCard__header">
        <span>{id}</span>
        {trend === 'UP' ? (
          <img src={UpArrow} className="symbolCard__trend" alt="Up Arrow" />
        ) : trend === 'DOWN' ? (
          <img src={DownArrow} className="symbolCard__trend" alt="Down Arrow" />
        ) : null}
      </div>
      <div className="symbolCard__body">
        <div className="symbolCard__price">
          <span>PRICE:</span>
          <strong>${price || '--'}</strong>
        </div>

        {showCardInfo && (
          <>
            <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
            <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
            <ListItem
              Icon={<MarketCapIcon />}
              label={`$${marketCap.toLocaleString()}`}
              spacing="space-between"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SymbolCard;
