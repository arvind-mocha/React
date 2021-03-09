import React from "react";

function ImageList(props) {
  const images = props.images.map(({ descriptions, id, urls }) => {
    return <img key={id} src={urls.regular} alt={descriptions} />;
  });

  return <div>{images}</div>;
}

export default ImageList;
