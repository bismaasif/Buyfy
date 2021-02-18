import React, {useEffect} from 'react'
import {fetchproducts} from './../../Redux/Product/ProductActions';
import { connect } from 'react-redux';
import { categorizedproduct } from '../../Utility/Products';
const Category=({fetchproducts,category})=>{
    console.log(category);
    useEffect(() => {
//cdm
        fetchproducts();
        
    },[])
    return(
        <>
        <h3>category</h3>

        </>
    )
}
var actions={
    fetchproducts
}
var mapState=(state)=>({
    category:categorizedproduct(state.products)
})
export default connect(mapState,actions)(Category);