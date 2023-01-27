import styles from './ModalSummary.module.scss'
import propTypes from 'prop-types'
import Resumen from '../resumen'

export const ModalSummary = ({ modal, setModal }) => {
  return (
    <section className={modal ? styles.open : styles.close}>
      <div className='display-flex align-items-center justify-content-space-between full-width'>
        <h1>Resumen</h1>
        <button onClick={() => { setModal(false) }}>Cerrar</button>
      </div>
      <Resumen />
    </section>
  )
}

ModalSummary.propTypes = {
  modal: propTypes.bool,
  setModal: propTypes.func
}
