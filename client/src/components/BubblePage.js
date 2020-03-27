import React, { useState, useEffect } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";
//import { useParams } from "react-router-dom";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isLoading, setLoading ] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  
  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(res => {
      return setColorList(res.data)
    })
    .catch(err => console.log(err))
  },[isLoading])


  return (
    <>
      <ColorList 
      colors={colorList} 
      updateColors={setColorList} 
      isLoading={isLoading}
      setLoading={setLoading}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
