import React from "react";
import  ProductItem from './ProductItem'

export default function ProductList({productList}) {
  return <div className="products">
           {productList.map((item) =>{
            return <ProductItem item={item}/>
           })}
     
          </div>;
}
