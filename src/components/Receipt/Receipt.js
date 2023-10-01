import React from 'react'
import "./styles.css"
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/Money/moneySlice';

function Receipt() {
  const items = useSelector(selectItems);

  // Ürünlerin toplamını hesapla
  const total = items.reduce((acc, item) => {
    return acc + item.amount * item.price;
  }, 0);

  return (
    <div className="receipt">
      <h2>Your Receipt</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="receiptItem">
            <p>{item.title}</p>
            <p>x{item.amount}</p>
            <p className="dollar">${item.amount * item.price}</p>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "10px 0 " }} />

      <div className="receiptTotal">
        <p>
          <strong>TOTAL</strong>
        </p>
        {/* Ürünlerin toplamını göster */}
        <p className="dollar">${total}</p>
      </div>
    </div>
  );
}

export default Receipt;