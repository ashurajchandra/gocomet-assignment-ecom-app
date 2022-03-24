import React from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import styles from "./Navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.nav}>
    <div className={styles.menu}>
    <div className={styles.headerLogo}>
    <img src="https://images.indianexpress.com/2021/01/myntra.png" 
        alt="menu" className='logo' />
    </div>
        <div className={styles.categoryList}>
            <div className={styles.category} >
                MEN
            </div>
            <div className={styles.category}>
                WOMEN
            </div>
            <div className={styles.category}>
                KIDS
            </div>
            <div className={styles.category}>
                HOME AND LIVING
            </div>
            <div className={styles.category}>
                BEAUTY
            </div>
        </div>
    </div>
    <div className={styles.rightNav}>
    <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon}/>
        <input type="text" placeholder="Search Products"
        //  onChange={ (e) => this.setState({searchProducts:e.target.value}) }
                // onKeyPress={ (e) => this.handleSearch(e) }
                />
    </div>
    <div className={styles.user}>
        <div className={styles.profile}>
            <FaUser className={styles.reactIcons}/>
            <div className={styles.title}>Profile</div>
        </div>
        <div className={styles.wishlistIcon} >
            <FaHeart className={styles.reactIcons} />
            <div className={styles.title} >Wishlist</div>
        </div>
        <div className={styles.bagIcon}>
            <FaShoppingBag className={styles.reactIcons}/>
            <div className={styles.title}>Bag</div>
        </div>
    </div>
    </div>
    {/* <div className={styles.bars}>
        <FaBars />
        
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
    </div> */}
</div>
  )
}
