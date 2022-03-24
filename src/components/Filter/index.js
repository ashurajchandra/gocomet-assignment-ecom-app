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
        <input type="checkbox" name="brand" value="allen solly"
        //  onChange={ (e) => this.handleBrand(e) }
         ></input>
        <label for="brand">Allen Solly</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="highlander" 
        // onChange={ (e) => this.handleBrand(e) }
        ></input>
        <label for="brand">Highlander</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="roadster"
        //  onChange={ (e) => this.handleBrand(e) }
         ></input>
        <label for="brand">Roadster</label>
        </div>
        <div>
        <input type="checkbox" name="brand" value="louis philippe" 
        // onChange={ (e) => this.handleBrand(e) }
        ></input>
        <label for="brand">Louis Philippe</label>
        </div>
    </section>

    <section>
        <div>
        <p><b> PRICE</b></p>
        <input type="checkbox" name="price" value="low"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs.300 to Rs.3999</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="medium" 
        // onChange={ (e) => this.handlePrice(e) }
        ></input>
        <label for="price">Rs.4000 to Rs.6999</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="high"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs.7000 to Rs.9999</label>
        </div>
        <div>
        <input type="checkbox" name="price" value="higher"
        //  onChange={ (e) => this.handlePrice(e) }
         ></input>
        <label for="price">Rs.10000 to Rs.13999</label>
        </div>
    </section>
    
</div>
  )
}
