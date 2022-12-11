import React, { memo } from 'react';

import ProductsData from '../../mockData/products.json';
import './product.css';

const Products = () => {
    const { products } = ProductsData;

    return (
        <div className="container">
            {
                products.map(({ id, title, url}) => {
                    return (
                        <div key={id}>
                          <h1>{title}</h1>
                          <img src={require(`../../assets/images/${url}`)} alt={title} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default memo(Products);