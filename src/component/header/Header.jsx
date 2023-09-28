import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss'
import {BiHeart, BiMessageSquare, BiUser} from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import RedirectButton from '../../utilis/Button';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from "../../language/i18next"

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const takeUserData = useSelector(state => state.mainReducer.email);
    console.log(takeUserData);
    const likedProducts = useSelector(state => state.likeReducer.likeProducts)
    const addToBuy = useSelector(state=> state.ShopReducer.addToBuy)
    const navigator = useRef()
    
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', function () {
        let currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos){
            navigator.current.style.top = "0px";
        } else {
            navigator.current.style.top = "-72px";
        }
        prevScrollPos = currentScrollPos;
    });

    return location.pathname.includes('auth') ? (<></>) : (
        <header ref={navigator}>
            <div className="container">
                <div className="header__wrapper">
                    <Link to='/'>
                        <img className='header__logo' src="https://lindeal.com/images/2022/10/top-8-luchshikh-kazakhstanskikh-marketplejsov-olx.png" alt="" />
                    </Link>
                        
                    <nav className='header__nav'>
                        <ul>
                            <li className={localStorage.getItem("lang") === "uz" ? "active_lang" : ""} onClick={()=> i18n.changeLanguage("uz")}>UZ &nbsp;</li>
                            <li className={localStorage.getItem("lang") === "ru" ? "active_lang" : ""} onClick={()=> i18n.changeLanguage("ru")}> &nbsp; RU</li>
                        </ul>
                        <Link to='/message' className='header__icon--message'>
                            <BiMessageSquare/>
                            {t("Header_message")}
                       </Link>
                       <Link to='/like' className='header__icon--heart'>
                            <BiHeart/>
                            {  likedProducts.length 
                                    ?   <div className='length__like'>
                                            { likedProducts.length }
                                        </div>
                                    :   <></>
                            }
                            
                       </Link>
                       <Link to='shop' className='header__icon--shop'>
                            <AiOutlineShoppingCart/>

                            {
                                addToBuy.length 
                                        ?  <div  className='length__shop-cards'>
                                                {
                                                    addToBuy.length
                                                }
                                            </div>
                                        :   <></>
                            }
                            
                           
                       </Link>
                       
                       <Link to='/auth/create' className='header__icon--user'>
                            <BiUser/>

                          {
                            takeUserData ? takeUserData : t("Header_accaunt")
                          }
                           
                       </Link>
                       <RedirectButton  headerButton="/newpost" title="E'lon berish" type="light" ></RedirectButton>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
