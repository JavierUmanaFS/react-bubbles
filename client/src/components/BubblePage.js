import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [loading, setLoading] = useState(false)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {

    axiosWithAuth()
    .get('/api/colors')
    .then(res => {
      
      setColorList(res.data)
    })
    .catch(err => console.log(err))
  }, [loading])
 
  console.log(loading)

  return (
    <>
      <ColorList 
      colors={colorList} 
      updateColors={setColorList}
      loading={loading}
      setLoading={setLoading} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
