import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/products')
      .then(products => {
        setProduct(products.data[0]);
      });
  }, []);

  if (product) {
    return <h1>{product.name}</h1>;
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;