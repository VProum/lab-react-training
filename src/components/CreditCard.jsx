import React from 'react';
import './Creditcard.css';

const CreditCard = (props) => {
  const divStyle = {
    background: props.bgColor,
    color: props.color
  };

  return (
    <div className="creditcard border" style={divStyle}>
      <img
        src={props.type == 'Visa' ? './img/visa.png' : './img/master-card.svg'}
        alt="bank"
      />
      <div className="dot">* * * *</div>
      <div className="dot">* * * *</div>
      <div className="dot">* * * *</div>
      <div className="number">{props.number.slice(-4)}</div>
        <div className="expire">{`Expires ${props.expirationMonth}/${props.expirationYear}`}</div>
        <div className="bank"> {props.bank}</div>
      <div className="owner">{props.owner}</div>
    </div>
  );
};

export default CreditCard;
