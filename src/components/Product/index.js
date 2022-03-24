import React from 'react'

import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';

import styles from "./Product.module.css";
export default function Product(props) {
    const { name, price,brand, description, image, id } = props.product;
  return (
    <div className={styles.productContainer}>                
    <div className={styles.productImage}>
        <img src={image} alt="product-img" />
       {/* { (isProducts || isFilter || isBag || isWishList) &&  */}
       <div className={styles.viewSimilar} 
    //    onClick={ () => handleViewSimilar(brand) }
        >
           <p>view similar</p>
       </div> 
       {/* } */}
       {/* { !isWishList &&  */}
       <div className={styles.wishlistOption}
        // onClick={ () => handleWishlist() } 
        ><FaHeart /></div>
        {/* } */}
    </div>
    <div className={styles.productDetails}>
        <div className={styles.productName} >{name}</div>
        <div className={styles.productDesc}>{description}</div>
        <div className={styles.productPrice}> Rs. {price}</div>
        {/* { props.state.isWishList && */}
         <div>Size:{props.product.size}</div>
          {/* } */}
        {/* { props.state.isWishList &&  */}
        <div className={styles.removeBtn}
        //  onClick={ () => handleRemoveFromWishlist(id) } 
         >Remove</div>
          {/* } */}
        {/* { props.state.isBag &&  */}
        <div>Size:{props.product.size}</div> 
        {/* } */}
        {/* { props.state.isBag &&  */}
        <div className={styles.removeBtn}
        //  onClick={ () => handleRemoveFromBag(id) }
         >Remove</div>
          {/* } */}
    </div>
</div>
  )
}
