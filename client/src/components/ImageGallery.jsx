import React from 'react';

const ImageGallery = () => {
  // TEMPORARY STYLING
  var styles = {
    flexGrow: "2",
    border: "solid 1px black",
    textAlign: "center"
  }

  var styles2= {
    display: "flex",
    flexDirection: "row",
    border: "solid 1px black",
    textAlign: "center",
  }

  var styles3 = {
    display: "flex",
    flexGrow: "1",
    flexDirection: "column",
  }

  var styles4 = {
    border: "solid 1px black",
    height: "125px",
    textAlign: "center",
  }

  var styles5 = {
    flexGrow: "2",
    border: "solid 1px black",
    textAlign: "center",
  }

  return (
    <div style={styles}>
      <div style={styles2}>
        <div style={styles3}>
          <div style={styles4}>P</div>
          <div style={styles4}>P</div>
          <div style={styles4}>P</div>
          <div style={styles4}>P</div>
        </div>
        <div style={styles5}>
          <h1>Image Gallery</h1>
        </div>
      </div>
    </div>

  )
}

export default ImageGallery;