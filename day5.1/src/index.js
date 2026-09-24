

function third(num){
  console.log("third is render",num);
}


function second(){
    let b=21;
    let d=10;
    console.log("second is render",b,d);

    third(b);
}


function first(){
    console.log("First is render");

    second();
}

first();