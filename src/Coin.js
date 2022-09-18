import React from 'react';
import './Coin.css';
import { Container } from '@mui/material';

const Coin = ({image, Name, symbol, price, volume, marketcap, priceChange}) => {
  return (
    <Container>
    <div className='container'>
        <div className='row'>
            <div className='coin'>
                <img src={image} alt='crypto' />
                <h1>{Name}</h1>
                <p className='symbol'>{symbol}</p>
            </div>
            <div className='data'>
                <p className='price'>Rs.{price}</p>
                <p className='volume'>Rs.{volume.toLocaleString()}</p>

                {priceChange < 0 ? (
            <p className='red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coin-marketcap'>
            Mkt Cap: {marketcap.toLocaleString()}
          </p>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Coin;

/* import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin; */