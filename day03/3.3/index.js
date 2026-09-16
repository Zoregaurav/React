
//Understand the rendering throught this Example....


function fifth(){
    console.log("fifth function is called");
}


function fourth(b){
    console.log("fourth function is called",b);
    fifth();
}


function third(){
    let b=8;
    console.log("Third function is called",b);
    fourth(b);
}

function second(){
    console.log("second function is called");
}


function first(){
    console.log("First function is called");
    Second();
}

first();