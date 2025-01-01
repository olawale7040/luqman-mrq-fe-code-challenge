import TrendArrow from './TrendArrow';

type SymbolCardHeaderProps = {
  id: string;
  trend: 'UP' | 'DOWN' | null;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <div className="symbolCard__header">
      <span>{id}</span>
      <TrendArrow trend={trend} />
    </div>
  );
};

export default SymbolCardHeader;
