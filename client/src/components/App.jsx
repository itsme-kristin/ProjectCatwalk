import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './RatingsReviews/Reviews.jsx';
import YourOutfit from './YourOutfit/YourOutfit.jsx';
import Overview from './Overview/Overview.jsx';

const App = () => {
  const [product, setProduct] = useState(null);
  var hardCode = {"id":38322,"campus":"hr-atx","name":"Camo Onesie","slogan":"Blend in to your crowd","description":"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.","category":"Jackets","default_price":"140.00","created_at":"2021-08-13T14:38:00.907Z","updated_at":"2021-08-13T14:38:00.907Z"};
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(products => {
        setProduct(products.data[0]);
      });
  }, []);

  if (product) {
    return (
      <React.Fragment>
      <h1>{product.name}</h1>
      <Overview productId={product.id}/>
      <RelatedProducts currentProduct={product} setProduct={setProduct}/>
      <YourOutfit currentProduct={product} outfitList={outfitList} setOutfitList={setOutfitList}/>
      <Reviews currentProduct={product} />
      </React.Fragment>
    );
  }
  else {
    return <h1>Hi</h1>
  }
};

export default App;