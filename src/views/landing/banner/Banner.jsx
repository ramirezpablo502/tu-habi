/* Importing the Link hook from the react-router-dom library. */
import { Link } from 'react-router-dom'

import styles from './Banner.module.scss'

/* Create Banner view */
export const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.shadow_content}>
        <div>
          <h1>Vende tu departamento de manera sencilla</h1>
          <Link to='/venta/datos-cliente'>
            <button className='primary-button'>Vender</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
