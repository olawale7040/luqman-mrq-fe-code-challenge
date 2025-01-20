import './symbolCardHeader.css';
import { FC, memo } from 'react';
import TrendArrow from './TrendArrow';

type SymbolCardHeaderProps = {
  id: string;
  trend: 'UP' | 'DOWN' | null;
};

const SymbolCardHeader: FC<SymbolCardHeaderProps> = ({ id, trend }) => {
  return (
    <div className="symbolCard__header">
      <span>{id}</span>
      <TrendArrow trend={trend} />
    </div>
  );
};

export default memo(SymbolCardHeader);
