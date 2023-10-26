
import { ADDITEM,DELITEM } from "../actiontype/actiontype"
// for adding item to cart //
export const addCart = (product)=> {
    return{
        type : ADDITEM ,
        payload : product 
    }
}

// for deleting item from the cart //
export const delCart = (id)=> {
    return{
        type: DELITEM ,
        payload : id 
    }
}