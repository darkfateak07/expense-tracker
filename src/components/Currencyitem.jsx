import React from 'react';
export default function Currencyitem(props) {
    return (
        <div>
            <div className="currency-item">
                <div className="title">{props.title}</div>
                <div className="amount">{props.amount}</div>
        </div>
        </div>
    )
}