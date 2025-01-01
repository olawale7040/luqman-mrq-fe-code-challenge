import './symbolsGrid.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
};

const getCardProps = (id: string, selectedId: string | null) => ({
  selected: selectedId === id,
  neutral: selectedId === null
});

const SymbolsGrid = ({ onSymbolClick }: SymbolsGridProps) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);

  const handleCardClick = (id: string) => {
    setSelectedCard((prev) => (prev === id ? null : id));
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
          {...getCardProps(id, selectedCard)}
        />
      ))}
    </div>
  );
};

export default SymbolsGrid;
