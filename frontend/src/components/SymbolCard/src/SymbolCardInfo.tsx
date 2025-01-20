import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatNumber } from '@/utils/format-number';
import { memo } from 'react';

type CardInfoProps = {
  companyName: string;
  industry: string;
  marketCap: number;
};

const SymbolCardInfo = ({ companyName, industry, marketCap }: CardInfoProps) => {
  return (
    <>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem
        Icon={<MarketCapIcon />}
        label={`$${formatNumber(marketCap)}`}
        spacing="space-between"
      />
    </>
  );
};

export default memo(SymbolCardInfo);
