import React from 'react';
import './currencyInput.scss';

function CurrencyInput (Props) {
  return (
    <div className="currency">
      <input type="currency__text" value={Props.amount} onChange={ev => Props.onAmountChange(ev.target.value)}/>
      <select className='currency__select' name="" id="" value={Props.currency} onChange={ev => Props.onCurrencyChange(ev.target.value)}>
        {Props.currencies.map((currency, index) => {
           return <option key={index} className='currency__option' value={currency}>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default CurrencyInput;
