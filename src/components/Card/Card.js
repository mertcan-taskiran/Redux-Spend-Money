import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy, selectItems, selectValue, sell } from '../../redux/Money/moneySlice'


function Card({ item }) {
    
    const dispatch = useDispatch();
    const products = useSelector(selectItems);
    const value = useSelector(selectValue);

    const findItem = (item) => {
        let addedItem = products.find((product) => product.title === item.title);
        return addedItem ? addedItem.amount : 0;
    };

    const handleChange = ({ e, amountOld, title, price }) => {
        let val = e.target.value === "" ? 0 : e.target.value;
        let gap = parseInt(val) - parseInt(amountOld);
        gap > 0
            ? dispatch(buy({ amount: gap, price, title }))
            : dispatch(sell({ amount: gap * -1, price, title }));
    };

    const buyItems = (amount, price, title) => {
        dispatch(buy({ amount, price, title }));
    };
    const sellItems = (amount, price, title) => {
        dispatch(sell({ amount, price, title }));
    };

    return (
        
            
                <div key={item.id} className="card">
                    <div className='image'>

                        <img src={item.img}  alt={item.title} />{" "}
                    </div>
                    <div className="title">{item.title}</div>{" "}
                    <div className="price">{item.price}</div>{" "}
                    <div className="cardControl">
                        <button
                            disabled={!findItem(item)}
                            className="red"
                            onClick={() => sellItems(1, item.price, item.title)}
                        >
                            Sell
                        </button>
                        <input
                            pattern="\d*"
                            type="number"
                            className="item-input inputAmount"
                            value={findItem(item)}
                            onChange={(e) =>
                                handleChange({
                                    e,
                                    amountOld: findItem(item),
                                    title: item.title,
                                    price: item.price,
                                })
                            }
                        />
                        <button
                            disabled={value < 0}
                            className="green"
                            onClick={() => buyItems(1, item.price, item.title)}
                        >
                            Buy
                        </button>
                    </div>
                
        
    

    </div >
  );
}

export default Card