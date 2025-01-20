import './symbolsView.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectActiveSymbol, setActiveSymbol } from '@/store/dashboardOptionsSlice';
import DesktopInfo from './src/DesktopInfo';

const SymbolsView = () => {
  const selectedSymbolId = useAppSelector(selectActiveSymbol);
  const dispatch = useAppDispatch();

  const handleSymbolClick = (symbolId: string) => {
    dispatch(setActiveSymbol(selectedSymbolId === symbolId ? null : symbolId));
  };

  return (
    <div className="symbolsView">
      <DesktopInfo />
      <div className="symbolsView__content">
        <div className="symbolsView__cards">
          <SymbolsGrid onSymbolClick={handleSymbolClick} selectedSymbolId={selectedSymbolId} />
        </div>
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={selectedSymbolId} />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
