import { ADDITEM,DELITEM } from "../actiontype/actiontype";

const cart = {
    product : [] ,
    quantity : {}


} ;
const handleCarte = (state= cart , {type,payload})=>{
    
   switch (type) {
    case ADDITEM:
        // check if the product is already exist or not //
        
        
        const exist = state.product.find((x)=>x.id === payload.id ); 
        if(exist){
            
            state.quantity[payload.title]= state.quantity[payload.title]+1
            // increase qunatity //
// product:state.product.map((x)=>x.id === payload.id ? {...x, xyz: x.xyz+1} : x )//
            return {...state  }; 
           
        }
        else{
            state.product.push(payload)
            state.quantity[payload.title]=1
         
            
            return  {
                    ...state ,
                    product:[ ...state.product ]
            }
        }
        break;
    case DELITEM :
            const exist1 = state.product.find((x)=> x.id === payload.id )
            console.log(exist1)
            if(exist1){
                return {...state, product:state.product.filter((x)=>x.id !== payload.id)};
            }else{
                return{...state, product:state.productstate.map((x)=>
                x.id === payload.id ? {...x, xyz : x.xyz.x-1 }: x ) };
                }
            break ;
   
    default:
        
        return state ;
   }
}
export default handleCarte ;