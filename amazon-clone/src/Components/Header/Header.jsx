import React from 'react'
import classes from './Header.module.css'
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
           <a href='/'>
                <img src='https://pngimg.com/uploads/amazon/small/amazon_PNG11.png' alt='amazon logo'/>
            </a>
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
         <a href=''className={classes.language}>
              <img src='https://flagpedia.net/data/flags/w1600/us.png' alt='' />
            <section name="" id="">
                <option value="">EN</option>
            </section>
         </a>
        <a href=''>
           <p>Sign In</p>
           <span>Account & Lists</span>
        </a>
        <a href=''>
            <p>returns</p>
            <span>& Orders</span>
        </a>
        <a href='' className={classes.cart}>
        <BiCartDownload size={35} />
            <span>0</span>
          </a>
         </div>
      </div>
   </section>
 <LowerHeader />
</>
  )
}

export default Header;