import React from 'react';

import Filter from "../Filter"
import styles from "./Home.module.css"
export default function Home() {
  return (
    <main>
    <div className={styles.heading}>
    <p>
        Home/Clothing/ <b>Shirts For Men and Women</b>
    </p>
    <p>
        <b>Shirts for men and women</b>
    </p>
    <div className={styles.headingList}>
    <ul className={styles.subHeading1}>
        <li>
            <b>FILTERS</b>
        </li>
        <li>
            <div className={styles.clear}
            //  onClick={()=>this.handleClearAll()}
             >Clear All</div>
        </li>
    </ul>
    <ul className={styles.subHeading2}>
        <li>
            Add ons
        </li>
        <li>
            Better Cotton Initiative
        </li>
        <li>
            Bundles
        </li>
        <li>
            Character
        </li>
        <li>
            Collar
        </li>
        <li>
            Country of Origin
        </li>
        <li>
            Fabric
        </li>
        <li>
            <b>+17 more</b>
        </li>
    </ul>
    <div className={styles.sort}>
        <span>Sort:Price Recommended</span>
        <div 
        // onClick={ () => this.handleSortLowToHigh(products.products) }
        >Low To High</div>
        <div
        //  onClick={ () => this.handleSortHighToLow(products.products) }
        >High To Low</div>
    </div>
    </div>
    </div>
    <div className={styles.main}>
        <Filter />
        {/* {renderProducts.length > 0 ? <div className="products_page">
            {
                renderProducts.map(prod => <Product product={prod} key={prod.id} handleViewSimilar={this.handleViewSimilar} handleRemoveFromWishlist={this.handleRemoveFromWishlist} handleRemoveFromBag={this.handleRemoveFromBag}  /> )
            }
        </div> : 
        <div className="add_products">
            <div className="add_products_title">
                <p>Nothing is Present, Please add products!</p>
            </div>
            <button className="add-btn"
            //  onClick={ () => this.handleNormalDisplay() }
             >ADD
            </button>
        </div> 
        } */}
    </div>
</main>
  )
}
