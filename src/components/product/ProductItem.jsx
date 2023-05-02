import React from "react";

export default function ProductItem({item}) {
  return <div className="productitem">
           <h2>name: {item.title}</h2>
           <p>{item.description}</p>
           <p>${item.price}</p>
           <img src={item.image} alt={item.title} width='100px' />
    
         </div>;
}
