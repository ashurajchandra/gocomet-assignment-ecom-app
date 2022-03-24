import React from 'react'
import styles from "./Filter.module.css";
export default function Filter() {
  return (
    <div className={styles.sidebar}>
    <div className={styles.filter}
    //  onClick={ () => this.handleShowFilter() }
     >APPLY</div>
    <section>
        <div >
        <p> <b>GENDER</b></p>
        <input type="radio" name="gender" value="men" 
        // onChange={ (e) => this.handleGender(e) }
        ></input>
        <label for="gender">Men</label>
        </div>
        <div>
        <input type="radio" name="gender" value="women" 
        // onChange={ (e) => this.handleGender(e) }
        ></input>
        <label for="gender">Women</label>
        </div>
        <div>
        <input type="radio" name="gender" value="boys" 
        // onChange={ (e) => this.handleGender(e) }
        ></input>
        <label for="gender">Boys</label>
        </div>
        <div>
        <input type="radio" name="gender" value="girls"
        //  onChange={ (e) => this.handleGender(e) }
         ></input>
        <label for="gender">Girls</label>
        </div>
    </section>

    <section>
        <div >
        <p> <b>BRAND</b></p>
        <input type="checkbox" name="brand" value="ColorPlus"
        //  onChange={ (e) => this.handleBrand(e) }
         ></input>
        <label for="brand">ColorPlus</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="Mufti" 
        // onChange={ (e) => this.handleBrand(e) }
        ></input>
        <label for="brand">Mufti</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="roadster"
        //  onChange={ (e) => this.handleBrand(e) }
         ></input>
        <label for="brand">Roadster</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="Blackberrys" 
        // onChange={ (e) => this.handleBrand(e) }
        ></input>
        <label for="brand">Blackberrys</label>
        </div>
    </section>

    <section>
        <div>
        <p><b> PRICE</b></p>
        <input type="checkbox" name="price" value="low"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs. 309 to Rs. 2232</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="medium" 
        // onChange={ (e) => this.handlePrice(e) }
        ></input>
        <label for="price">Rs. 2232 to Rs. 4155</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="high"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs. 4155 to Rs. 6078</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="higher"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs. 6078 to Rs. 8001</label>
        </div>
    </section>

    <section>
        <div>
        <p><b> COLOR</b></p>
        <input type="checkbox" name="color" value="blue"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
         <span className={styles.colorLabel}></span>
        <label for="color">Blue</label>
        </div>
        <div>
        <input type="checkbox" name="color" value="black" 
        // onChange={ (e) => this.handlePrice(e) }
        ></input>
        <label for="color">Black</label>
        </div>
        <div>
        <input type="checkbox" name="color" value="green"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="color">Green</label>
        </div>
        <div>
        <input type="checkbox" name="color" value="white"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="color">White</label>
        </div>
    </section>
   
    
</div>
  )
}
