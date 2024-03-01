import {React , createContext, useState} from "react";
import Productsdata from "../productsdata";




export const ShopContext = createContext(null);
const getDefaultCart =()=>{
    let cart={}
    for(let i =1; i < Productsdata.length + 1; i++){
       cart[i]=0;
    }
    return cart;
}

export default function ShopContextProvider(props){
      const [CartItems, setCartItems] = useState(getDefaultCart);
      

       const getProductTotal = (itemId) =>{
        let total = 0;
        let itemInfo = Productsdata.find((product) => product.id === Number(itemId) )
        total = CartItems[itemId] * itemInfo.price; 
return total.toFixed(2)
       }
      const getTotalAmount= ()=>{
             let totalAmount = 0;
             for(let item in CartItems){
               if(CartItems[item] > 0){
                let itemInfo = Productsdata.find((product) => product.id === Number(item))
                totalAmount  += CartItems[item] * itemInfo.price; 
               }
             }
             return totalAmount.toFixed(2);
      }
const getTotalItems =()=>{
  let total = 0;
  for(let item in CartItems){
    total +=CartItems[item]
  }
  return total;

}

const addToCart =(itemId)=>{
    setCartItems((prev)=>({ ...prev, [itemId]: prev[itemId] + 1}) )
}
const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({ ...prev, [itemId]: prev[itemId] - 1}) )
}
const updateCartItem =(newAmount,itemId)=>{
    setCartItems((prev)=>({ ...prev, [itemId]: newAmount}) )
}
const remove = (itemId)=>{
  setCartItems((prev)=>({ ...prev, [itemId]: 0}) )
}
// Navbar functions

const contextValue ={
    CartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalAmount,
    getProductTotal,
    remove,
    getTotalItems
    
}

     return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
     )
}

