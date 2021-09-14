import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import OutfitCardPhoto from './OutfitCardPhoto.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
    maxHeight: 350,
  },
  media: {
    paddingTop: '70.25%',
  },
  content: {
    paddingTop: '10%',
  }
}));

const OutfitCard = (props) => {
  const [outfitCardInfo, setOutfitCardInfo] = useState(null);
  const classes = useStyles();



  const getOutfitInfo = () => {
    axios.get(`/api/products/${props.productId}`)
      .then(productInfo => {
        setOutfitCardInfo(productInfo.data);
      })
      .catch(err => {
        console.info('There was an error retrieving product information from the server.');
      });
  }

  useEffect(() => {
    getOutfitInfo();
  }, []);


  return productCardInfo && (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <div>I am an Outfit card!</div>
          <div>Star Rating</div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default OutfitCard;