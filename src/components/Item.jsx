import React,{useState} from "react";

function Item(props){
 
  
  return (<div onClick={()=>{props.click(props.id)}}>  
    <li>{props.name}</li>
    </div>)
}
export default Item;