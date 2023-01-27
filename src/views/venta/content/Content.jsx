import { useParams } from 'react-router-dom'
import { validateParam } from '../../../helpers'
import { Steppers } from '../steppers'
import { Tracing } from '../tracing/Tracing'

import Resumen from '../resumen'
import styles from './Content.module.scss'

export const Content = () => {
  const params = useParams()
  const step = validateParam(params?.step)

  return (
    <section className={styles.container}>
      <div className={styles['--left-column']}>
        <Tracing step={step} />
        <Steppers step={step} />
      </div>
      <div className={styles['--right-column']}>
        <Resumen />
      </div>
    </section>
  )
}
