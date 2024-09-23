import React from 'react'
import classes from './Header.module.css'
import {Link} from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { BiCartDownload } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import LowerHeader from './LowerHeader';



const Header = () => {
  return (
   
    <>
         <section>
        <div   className={classes.header__container}>
        <div className={classes.logo__container}>    
           <Link to='/'>
                <img src='https://pngimg.com/uploads/amazon/small/amazon_PNG11.png' alt='amazon logo'/>
            </Link>
           <div className={classes.delivery}>
            <span>
            <SlLocationPin />
            </span>
            <div>
                <p>Deliverd  to</p>
                <span>Ethiopia</span>
              </div>
            </div>
         </div>
         <div  className={classes.search}>
                <select name='' id=''>
                    <option value="">All</option>
                </select>
                <input type='text'/>
                <IoSearch  size={25}/>
            </div>
         <div className={classes.order__container}>
         <Link to=''className={classes.language}>
              <img src='https://flagpedia.net/data/flags/w1600/us.png' alt='' />
            <section name="" id="">
                <option value="">EN</option>
            </section>
         </Link>
        <Link to='/auth'>
           <p>Sign In</p>
           <span>Account & Lists</span>
        </Link>
        <Link to='/orders'>
            <p>returns</p>
            <span>& Orders</span>
        </Link>
        <Link to='/cart' className={classes.cart}>
        <BiCartDownload size={35} />
            <span>0</span>
          </Link>
         </div>
      </div>
   </section>
 <LowerHeader />
</>
  )
}

export default Header;