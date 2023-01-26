import styles from './Navbar.module.scss'
/* Importing the logo image from the assets folder. */
import LogoImage from '../../assets/images/tu-habi.png'

/* It returns a header element with a logo image */
export const Navbar = () => {
  return (
    <header className={styles.container}>
      <img src={LogoImage} alt='Tu habi es la mejor opción.' />
    </header>
  )
}
