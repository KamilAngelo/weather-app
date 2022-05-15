import React from 'react'
import styles from './Menu.module.css'

export default function Menu() {
  return (
    <div className={styles.container}>
        <img src='/Logo.svg' alt="logo" className={styles.logo} />
        <ul className={styles.list}>
            <a href='/home.html'><li>Home</li></a>
            <a href='/menu.html'><li>Menu</li></a>
            <a href='/service.html'><li>Service</li></a>
            <a href='/shop.html'><li>Shop</li></a>
        </ul>
        <button className={styles.hamburgerbutton}><img src='/Hamburger.svg' alt="menu" className={styles.hamburger} /></button>
    </div>
  )
}
