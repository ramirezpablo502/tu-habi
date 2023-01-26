import styles from './Tracing.module.scss'
import propTypes from 'prop-types'

export const Tracing = ({ step }) => {
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <section className={styles.container}>
      {
        arr && arr.map((e, i) => {
          return (
            <div key={i} style={e <= step + 1 ? { backgroundColor: '#4C4498', color: '#FFFFFF' } : {}} className={styles['--ovals']}> {e}</div>
          )
        })
      }
    </section>
  )
}

Tracing.propTypes = {
  step: propTypes.object
}
