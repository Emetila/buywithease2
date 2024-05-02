// import React from "react";
// import style from './style.module.css'
// import { CustomButton } from "../../components/Button";

// const CartPage = ( cartItem, setCartItem) => {
//     return (<> 
//         <div>
//             <>
//             {cartItem.length === 0 && 
//             <h2 className={style.emptycart}>Cart is empty please select a Product</h2>}
//             </>
//             <CustomButton className={style.button} onClick={event =>  window.location.href='/product'} type="secondary">Explore Products</CustomButton>
//         </div>
//         <div className={style.cartcontainer}>
//             <div className={style.cartproduct}>
//                 {
//                     cartItem.map((item)=> {
//                         <div className={style.wrapper}>
//                             <div className={style.cartproductcontainer}>
//                                 <div className={style.cartimage}>
//                                     <img src={item.img} alt={item.Title} />

//                                 <div className={style.cartitem}>
//                                     <h2>{item.Title}</h2> 
//                                     <h3>{item.Price}</h3>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>
//                     })
//                 }
//             </div>
//         </div>
        
//         </> 
//     );
// }
 
// export default CartPage;