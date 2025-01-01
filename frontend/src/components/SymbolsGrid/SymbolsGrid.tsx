import './symbolsGrid.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import { selectSelectedCardId, setSelectedCardId } from '@/store/dashboardOptionsSlice';

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
};

const getCardProps = (id: string, selectedId: string | null) => ({
  selected: selectedId === id,
  neutral: selectedId === null
});

const SymbolsGrid = ({ onSymbolClick }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const selectedCardId = useAppSelector(selectSelectedCardId);

  const handleCardClick = (id: string) => {
    dispatch(setSelectedCardId(selectedCardId === id ? null : id));
    onSymbolClick(id);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid">
      {stockSymbols.map((id, i) => (
        <SymbolCard
          price={prices[id]}
          onClick={handleCardClick}
          key={i}
          id={id}
          {...getCardProps(id, selectedCardId)}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
