import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className = {styles.container}>
      <Link to="/">Main page</Link>
    </div>
  )
}

export default Navbar
