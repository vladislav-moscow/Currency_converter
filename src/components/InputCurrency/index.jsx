
import './InputCurrency.scss';

function InputCurrency (amount, currency, currencies, onAmountChange, onCurrencyChange) {
  return (
    <div className="group">
      <input type="text" value={amount} onChange={ev => onAmountChange(ev.target.value)}/>
      <select name="" id="" value={currency} onChange={ev => onCurrencyChange(ev.target.value)}>
        {currencies.map((currency) => {
           return <option value={currency}>{currency}</option>
        })}
      </select>
    </div>
  )
}

export default InputCurrency