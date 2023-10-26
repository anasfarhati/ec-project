import React, {useState, useEffect} from 'react' ;

import {addCart} from '../redux/action' ;
import  { useParams } from 'react-router' ;
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
function Product() {
  const{id}=useParams(); 
   
    // var url = window.location.pathname;
    // var id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(url,'ffgfff',id)
    const [product, setProduct]=useState([]);
    const[loading, setLoading]=useState(false);
     console.log(id)
     const dispatch = useDispatch();
     
    useEffect(()=>{
      
        const getProduct = async ()=> {
            setLoading(true);
            try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`) ;
         console.log(res)
            if (!res.ok) {
              throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
            }
            
            
            setProduct (await res.json());
          }catch(error){
              console.error('Error fetching data:',error);
            }finally{
            setLoading(false);
            }
          
        }
        getProduct();
        console.log("hello")


    },[id]);
    console.log(product)
    const addProduct = ()=>{
      dispatch(addCart(product));
     }
    const Loading =()=>{
        return(
            <>
            <div className="col-md-6">
              <Skeleton height={400}/>
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
             <Skeleton height={50} width={300} />
             <Skeleton height={75} />
             <Skeleton height={25} width={150} />
             <Skeleton height={50} />
             <Skeleton height={150} />
             <Skeleton height={50} width={100} />
             <Skeleton height={50} width={100} style={{marginLeft:6}} />
            
            
             
            </div>
            </>

        )

    }
    const ShowProduct =()=>{
        return(
            <>
            <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
          
            <div className="col-md-6">
            <h4 className='text-uppercase text-black-50'>
              {product.category}
            </h4>
           <h1 className='display-5'>{product.title}</h1> 
           <p className='lead'>
            Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
           </p>
           <h3 className='display-6 fw-bold my-4'>
            $ {product.price}
           </h3>
           <p className='lead'>{product.description}</p>
           <button className='btn btn-outline-dark px-4 py-2' onClick={addProduct}>
            Add to Cart
           </button>
           <NavLink to ='/cart' className='btn btn-dark ms-2 px-3 py-2'> Go to Cart</NavLink>
            </div>
          
            </>
        )
    }
    
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
            { loading ? <Loading/>: <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
