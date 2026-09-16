// It is JS libraray:
//     |
// React:It is a js library
//     |
// it is just a js Object

// const { createElement } = require("react");



// const element=document.createElement('h1');

//here:we building this using js:
// element.textContent="Hello Coder Army";
// element.id="first";
// element.className="second";
// element.style.backgroundColor="brown";
// element.style.fontSize="80px";
  

// const element2=document.createElement('h2');
// element2.textContent="Sab changa si hai";
// element2.id="third";
// element2.className="second";
// element2.style.backgroundColor="purple";
// element2.style.fontSize="100px";
// element2.style.color="brown";

// const element3=document.createElement('h2');
// element3.textContent="Sab changa si hai";
// element3.id="third";
// element3.className="second";
// element3.style.backgroundColor="purple";
// element3.style.fontSize="100px";
// element3.style.color="brown";


//Optimized Approach:

//attributes={id:"first",className:"Second"}

// element.style.backroundColor=attributes.style;
// element.style.color=attributes.style.color;


// const React={
//   createElement:function(tag,attributes,children) {
    
//         const element=document.createElement(tag);
//         element.textContent=children 
    
//         element.id=attributes.id;
//         element.className=attributes.className;
    
//         // making dynamic:
    
//         for(const key in attributes){
//             if(key=="style"){
//                  Object.assign(element.style.attributes.style);
//             }
//             element[key]=attributes[key];
//         }
       
//        // element["id"]="first";
//        return element;
//     }
// }

// const ReactDom={
//     render:function(child,parent){
//        parent.append(child);
//     }  
// }


const React ={
    createElement:function(tag,attributes,children){
        return {
            type:tag,
            props:{
                ...attributes,  
                  children  
            }
        }
    }
}


const ReactDom={
     render:function(reactElement,parent){
        const element=document.createElement(reactElement.type)

         for(const key in reactElement.props){
             
         }
     }
}

const element=React.createElement('h1',{id:"first",className:"Second"},"hello coder army");
// const element2=React.createElement('h2',{id:"third",className:"second"},"sab changasi hain");



// const root=document.getElementById("root");
// // root.append(element);
// // root.append(element2);
// // root.append(element3);

// //optimized version for append


const root=document.getElementById("root");
ReactDom.render(element,root);

// React ->blue Print ->virtual dom (light weight copy)
// ReactDom--> actual oose implement karna /banana 


//                 React 
//      |            |                |
//      Browser    react-native    react-pdf

//    ReactDom     renderCoder    


// babel ->is nothing but jsx code ->convert into actual react

//here we write jsx code in real world ...


//ham react ke syntax ko nahi likhte kyuki that is more complex so we write in jsx code internally that jsx is converted into React...




