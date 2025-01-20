import { useState, useEffect } from 'react';

export const useCardShake = (price: number) => {
  const [prevPrice, setPrevPrice] = useState(price);
  const [shake, setShake] = useState(false);
  const [priceChangeClass, setPriceChangeClass] = useState('');

  useEffect(() => {
    const priceDiff = price - prevPrice;
    const percentageChange = (priceDiff / prevPrice) * 100;

    let newPriceChangeClass = '';
    if (priceDiff > 0) {
      newPriceChangeClass = 'symbolCard__price--up';
    } else if (priceDiff < 0) {
      newPriceChangeClass = 'symbolCard__price--down';
    }

    setPriceChangeClass(newPriceChangeClass);

    if (percentageChange > 25) {
      setShake(true);
      setTimeout(() => setShake(false), 700);
    }

    setPrevPrice(price);
  }, [price]);

  return { shake, priceChangeClass };
};
