import { useState, useEffect } from 'react';

export const useCardShake = (price: number) => {
  const [prevPrice, setPrevPrice] = useState(price);
  const [shake, setShake] = useState(false);
  const [priceChangeClass, setPriceChangeClass] = useState('');

  useEffect(() => {
    const priceDiff = price - prevPrice;
    const percentageChange = (priceDiff / prevPrice) * 100;

    if (priceDiff > 0) {
      setPriceChangeClass('symbolCard__price--up');
    } else if (priceDiff < 0) {
      setPriceChangeClass('symbolCard__price--down');
    } else {
      setPriceChangeClass('');
    }

    if (percentageChange > 25) {
      setShake(true);
      setTimeout(() => setShake(false), 700);
    }

    setPrevPrice(price);
  }, [price]);

  return { shake, priceChangeClass };
};
