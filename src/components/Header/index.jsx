import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMoon, IoSunnySharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import styles from './index.module.css'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Main from '../Main';
import './index.css'

function Header() { 
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'uz');

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  }, [lang, i18n]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleChangeLang(e) {
    setLang(e.target.value);
  }

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
<div className={theme === 'light' ? styles.wrapper : styles.wrapperDark}>
  
        <div className={styles.wlogin}>
          <a href="#" className={theme === 'light' ? styles.sign : styles.signDark}>{t('sign in / guest')}</a>
          <a href="#" className={theme === 'light' ? styles.sign : styles.signDark}>{t('create Account')}</a>
        </div>
      </div>

      <div className={theme === 'light' ? styles.header : styles.headerDark}>
        <div className={styles.hWrapper}>
          <div className={styles.logo}>
            <NavLink to="/" className={theme === 'light' ? styles.a : styles.aDark}>C</NavLink>
          </div>

          <div className={styles.hMenu}>
            <NavLink className={styles.menu} to="/">{t('home')}</NavLink>
            <NavLink className={styles.menu} to="/about">{t('about')}</NavLink>
            <NavLink className={styles.menu} to="/products">{t('products')}</NavLink>
            <NavLink className={styles.menu} to="/cart">{t('cart')}</NavLink>
          </div>

          <div className={styles.hDark}>
            <select value={lang} onChange={handleChangeLang}>
              <option value="uz">Uzb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>
            {theme === 'light' ? (
              <IoMoon className={styles.moon} onClick={toggleTheme} />
            ) : (
              <IoSunnySharp style={{ color: theme === 'light' ? 'black' : 'white' }} className={styles.moon} onClick={toggleTheme} />

            )}
            <span><SlBasket className={theme === 'light' ? styles.basket : styles.basketDark} /><p>0</p></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
