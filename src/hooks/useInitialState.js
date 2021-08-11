import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([{ mylist: [], trends: [], originals: [] }]);
 
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []); // el arreglo vacio para que no se genere un loop infinito

  return videos;
};

export default useInitialState;