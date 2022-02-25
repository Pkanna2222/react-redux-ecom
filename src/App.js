import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from './redux/actions.js';
import './style.css';

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  //const [allProducts, setAllProducts] = useState(null);

  const fetchProducts = () => {
    const allItems = axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log('err', err));

    dispatch(setProducts(allItems));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {
        products.map(item => (
          <div>{item.id}</div>
        ))
      }
    </div>
  );
}
