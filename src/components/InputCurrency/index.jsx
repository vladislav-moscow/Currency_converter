import React from 'react';
import './currencyInput.scss';

function CurrencyInput (Props) {
  return (
    <div className="group">
      <input type="text" value={Props.amount} onChange={ev => Props.onAmountChange(ev.target.value)}/>
      <select name="" id="" value={Props.currency} onChange={ev => Props.onCurrencyChange(ev.target.value)}>
        {Props.currencies.map((currency) => {
           return <option value={currency}>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default CurrencyInput;
