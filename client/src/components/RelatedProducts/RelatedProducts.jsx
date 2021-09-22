import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 230,
    height: 350,
  },
  content: {
    paddingTop: '10%',
  },
  title: {
    fontSize: '20px',
    padding: '10px',
    margin: '10px',
  },
  button: {
    color: "white",
    cursor: "pointer",
    backgroundColor: "rgb(63, 81, 181)",
  }
}));

const RelatedProducts = ({ handleClick, currentProduct, setProductId }) => {
  const classes = useStyles();
  const [relatedProductsList, setRelatedProductsList] = useState(null);
  const [doneSearching, setDoneSearching] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 60;

  useEffect(() => {
    setDoneSearching(false);
    axios.get(`/api/products/${currentProduct.id}/related`)
      .then(productIds => {
        setRelatedProductsList(productIds.data);
        setDoneSearching(true);
      })
      .catch(err => {
        console.info('There was an error getting related product information from the server.')
      })
  }, [currentProduct]);

  if (doneSearching) {
    return (
      <div onClick={(e) => handleClick(e, 'Related Products List')}>
      <Typography className={classes.title} variant="h4" gutterBottom>
        RELATED PRODUCTS
      </Typography>
      <div style={{ minHeight: "380px", padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button className={classes.button}>{'<'}</button>}
          rightChevron={<button className={classes.button}>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          >
            {relatedProductsList.map((productId, index) => {
              return <ProductCard currentProduct={currentProduct} cardId={productId} key={index} setProductId={setProductId}/>
            })}
        </ItemsCarousel>
      </div>
    </div>
    );
  } else {
    return (
      <div onClick={(e) => handleClick(e, 'Related Products List')}>
        <Typography className={classes.title} variant="h4" gutterBottom>
          RELATED PRODUCTS
        </Typography>
        <div style={{ minHeight: "380px", padding: `0 ${chevronWidth}px` }}>
          <Card className={classes.root} >
            <CardContent className={classes.content}>
              <CircularProgress />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
};

export default RelatedProducts;