import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './RatingsReviews/Reviews.jsx';
import YourOutfit from './YourOutfit/YourOutfit.jsx';
import Overview from './Overview/Overview.jsx';

import { makeStyles } from '@material-ui/core/styles';
import { Container, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    border: "dotted 1px grey"
  }
})

const App = () => {
  const classes = useStyles();
  const [productId, setProductId] = useState(38322);
  const [product, setProduct] = useState(null);
  const [productMeta, setProductMeta] = useState(null);
  const [outfitList, setOutfitList] = useState([]);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then(products => {
        setProduct(products.data);
        return axios.get(`/api/reviews/meta?product_id=${productId}`)
      }).then(meta => {
        setProductMeta(meta.data);
      });
  }, [productId]);

  if (product && productMeta) {
    return (
      <Container maxWidth="lg" className={classes.root}>
        <React.Fragment>
        <h1>{product.name}</h1>
        <Overview product={product} productMeta={productMeta}/>
        <RelatedProducts currentProduct={product} setProductId={setProductId} />
        <YourOutfit currentProduct={product} outfitList={outfitList} setOutfitList={setOutfitList} productMeta={productMeta}/>
        {/* <Reviews currentProduct={product} productMeta={productMeta} /> */}
        </React.Fragment>
      </Container>
    );
  }
  else {
    return <CircularProgress />
  }
};

export default App;