import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';
import OutfitCard from './OutfitCard.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
  }
}));

const YourOutfit = (props) => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const handleAddOutfitClick = () => {
    if (props.outfitList.length === 0) {
      props.setOutfitList([props.currentProduct]);
      return;
    }
    const newOutfitList = props.outfitList.slice();
    for (var i = 0; i < newOutfitList.length; i++) {
      var current = newOutfitList[i];
      if (current.id === props.currentProduct.id) {
        return;
      }
    }
    newOutfitList.push(props.currentProduct);
    props.setOutfitList(newOutfitList);
  }

  const handleDeleteOutfitClick = (id) => {
    const editedOutfitList = props.outfitList.slice();
    for (var i = 0; i < editedOutfitList.length; i++) {
      var current = editedOutfitList[i];
      if (current.id === id) {
        editedOutfitList.splice(i, 1);
        props.setOutfitList(editedOutfitList);
        return;
      }
    }
  }

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h4" gutterBottom>
        YOUR OUTFIT
      </Typography>
      <Grid container direction="row">
        <Grid item xs={2}>
          <AddOutfitButton handleAddOutfitClick={handleAddOutfitClick}/>
        </Grid>
        <Grid item xs={10}>
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3}
              gutter={20}
              leftChevron={<button>{'<'}</button>}
              rightChevron={<button>{'>'}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {props.outfitList.map((product, index) => <OutfitCard
                handleDeleteOutfitClick={handleDeleteOutfitClick}
                product={product}
                key={index}
              />)}
            </ItemsCarousel>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default YourOutfit;