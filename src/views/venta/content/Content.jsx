import { useParams } from 'react-router-dom'
import { validateParam } from '../../../helpers'
import { Background } from '../background/Background'
import { Steppers } from '../steppers'
import { Tracing } from '../tracing/Tracing'

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
        <Background />
      </div>
    </section>
  )
}
