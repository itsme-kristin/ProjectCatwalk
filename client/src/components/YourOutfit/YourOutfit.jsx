import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import AddOutfitButton from './AddOutfitButton.jsx';
import OutfitCard from './OutfitCard.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

var inline = {
  leftButton: {
    position: 'absolute',
    top: '50%',
    left: '2px',
    fontSize: 32,
    color: '#3f51b5',
    userSelect: 'none',
    cursor: 'pointer'
  },

  rightButton: {
    position: 'absolute',
    top: '50%',
    right: '-5px',
    fontSize: 32,
    color: '#3f51b5',
    userSelect: 'none',
    cursor: 'pointer'
  }
}

const YourOutfit = ({ handleClick, currentProduct, outfitList, setOutfitList }) => {
  const classes = useStyles();
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  useEffect(() => {
    setIsDeleting(true);
    setOutfitList(outfitList);
  }, [outfitList]);

  const handleAddOutfitClick = () => {
    if (outfitList.length === 0) {
      setOutfitList([currentProduct]);
      return;
    }
    const newOutfitList = outfitList.slice();
    for (var i = 0; i < newOutfitList.length; i++) {
      var current = newOutfitList[i];
      if (current.id === currentProduct.id) {
        return;
      }
    }
    newOutfitList.push(currentProduct);
    setOutfitList(newOutfitList);
  }

  const handleDeleteOutfitClick = (id) => {
    setIsDeleting(false);
    const editedOutfitList = outfitList.slice();
    for (var i = 0; i < editedOutfitList.length; i++) {
      var current = editedOutfitList[i];
      if (current.id === id) {
        editedOutfitList.splice(i, 1);
        setOutfitList(editedOutfitList);
        return;
      }
    }
  }
  if (outfitList && isDeleting) {
    return (
      <div onClick={(e) => handleClick(e, 'Outfit List')}>
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
                leftChevron={<i className="material-icons" style={inline.   leftButton}>arrow_circle_left</i>}
                rightChevron={<i className="material-icons" style={inline.rightButton}>arrow_circle_right</i>}
                outsideChevron
                chevronWidth={chevronWidth}
              >
                {outfitList.map((product, index) => <OutfitCard
                  handleDeleteOutfitClick={handleDeleteOutfitClick}
                  product={product}
                  key={index}
                />)}
              </ItemsCarousel>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  } else {
    return null;
  }
};

export default YourOutfit;