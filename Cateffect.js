import React, { useEffect, useState } from "react";
const CatFact = () => {
  const [facts, setFacts] = useState([]);
  
   useEffect(() => {
    console.log("Inside Effect");
    // setVal(!val)
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFacts(data);
      })
      .catch(err=>{
        console.log(err)
      })

  },[]);

  return (
    <div>{facts}</div>

  )
};

export default CatFact;
