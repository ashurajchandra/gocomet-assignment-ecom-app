import React from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.nav}>
    <div className={styles.menu}>
    <img src="https://images.indianexpress.com/2021/01/myntra.png" 
        alt="menu" />
        <ul className={styles.list}>
            <li>
                MEN
            </li>
            <li>
                WOMEN
            </li>
            <li>
                KIDS
            </li>
            <li>
                HOME AND LIVING
            </li>
            <li>
                BEAUTY
            </li>
        </ul>
    </div>
    <div className={styles.search}>
        <FaSearch className={styles.search_icon}/>
        <input type="text" placeholder="Search Products"
        //  onChange={ (e) => this.setState({searchProducts:e.target.value}) }
                // onKeyPress={ (e) => this.handleSearch(e) }
                />
    </div>
    <div className={styles.user}>
        <div className={styles.profile}>
            <div><FaUser /></div>
            <div className={styles.title}>Profile</div>
        </div>
        <div className={styles.wishlistIcon} >
            <div><FaHeart /></div>
            <div className={styles.title} >Wishlist</div>
        </div>
        <div className={styles.bagIcon}>
            <div><FaShoppingBag /></div>
            <div className={styles.title}>Bag</div>
        </div>
    </div>
    <div className={styles.bars}>
        <FaBars />
        {
        
            <div className={styles.show_profile}>
                <div>
                    <div><FaHeart /></div>
                    <div className={styles.title}>Wishlist</div>
                </div>
                <div>
                    <div><FaShoppingBag /></div>
                    <div className={styles.title}>Bag</div>
                </div>
            </div>
        }
    </div>
</div>
  )
}
