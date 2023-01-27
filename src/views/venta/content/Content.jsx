import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { validateParam } from '../../../helpers'
import { Steppers } from '../steppers'
import { Tracing } from '../tracing/Tracing'
import { ModalSummary } from '../modalSummary/ModalSummary'
import { useWindowSize } from '../../../hooks/useWindowSize'

import Resumen from '../resumen'
import styles from './Content.module.scss'
import EyeIcon from '../../../assets/images/eye.png'

export const Content = () => {
  const params = useParams()
  const step = validateParam(params?.step)

  const [modal, setModal] = useState(false)
  const [width] = useWindowSize()

  useLayoutEffect(() => {
    if (width > 900) setModal(false)
  }, [width])

  return (
    <section className={styles.container}>
      <div className={styles['--left-column']}>
        <Tracing step={step} />
        <Steppers step={step} />
        {
          width < 900
            ? (
              <button className={styles.show_summary} onClick={() => { setModal(true) }}>
                <img src={EyeIcon} alt='Ver resumen' />
              </button>)
            : null
        }
      </div>
      <div className={styles['--right-column']}>
        <Resumen />
      </div>

      {modal ? <ModalSummary modal={modal} setModal={setModal} /> : null}
    </section>
  )
}
