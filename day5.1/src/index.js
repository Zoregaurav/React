

function third(){
  console.log("third is render");
}


function second(){
    let b=21;
    console.log("second is render",b);
     third();
}


function first(){
    console.log("First is render");
    second();
}


first();