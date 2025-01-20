import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import SymbolCardHeader from '@/components/SymbolCard/src/SymbolCardHeader';
import PriceDisplay from '@/components/SymbolCard/src/PriceDisplay';
import SymbolCardInfo from '@/components/SymbolCard/src/SymbolCardInfo';
import { getCardClass } from '@/utils/get-card-class';
import { useCardShake } from '@/hooks/use-card-shake';

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
  const { shake, priceChangeClass } = useCardShake(price);

  const cardClass = getCardClass(selected, neutral);

  const handleOnClick = () => onClick(id);

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
