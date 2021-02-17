import React, { useState } from 'react'
import { connect } from 'react-redux';
import {ProductActions} from './../../Redux/Product/ProductActions';
const Test=({ProductActions})=>{
    var[title,settitle]=useState("");
    var[category,setcategory]=useState("");
    var [cost,setcost]=useState("");
    var [description,setdescription]=useState("");
    var[quantity,setquantity]=useState("");
    var[coverpic,setcoverpic]=useState("");
    var submit=(e)=>{
        e.preventDefault();
        var productobj={
            title,
            category,
            cost,
            description,
            quantity,
            coverpic
           

        }
        ProductActions(productobj);
    };
    return(
        <>
        <form onSubmit={submit}>
            <input onChange={(e)=>settitle(e.target.value)} type="text" placeholder="title" value={title}/> <br/>
            <input onChange={(e)=>setcategory(e.target.value)} type="text" placeholder="category" value={category}/><br/>
            <input onChange={(e)=>setcost(e.target.value)} type="text" placeholder="cost" value={cost}/><br/>
            <textarea onChange={(e)=>setdescription(e.target.value)} cols="1" rows="5" placeholder="description" value={description}/><br/>
            <input onChange={(e)=>setquantity(e.target.value)} type="text" placeholder="quantity" value={quantity}/><br/>
            <input onChange={(e)=> setcoverpic(e.target.files[0])} type="file" placeholder="coverpic" /><br/>
            <button type="submit">submit</button>

        </form>
        </>
    )
}
var actions={
    ProductActions
}
export default connect(null,actions)(Test);