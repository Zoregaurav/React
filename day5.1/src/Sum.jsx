import React from "react";


//As childern use karte hein.....
//React memo :If my parent re-renders, don't re-render me unless my props changed

const Sum = React.memo(({num})=> {
  console.log("Sum render");

  return (
    <>
      <h1>Sum is : {(num * (num + 1)) / 2}</h1>
    </>
  );
});

export default Sum;


