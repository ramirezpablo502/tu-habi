import styles from './Step.module.scss'
import propTypes from 'prop-types'

export const Step = ({ params }) => {
  console.log(params)
  return (
    <section className={styles.container}>
      <h1>{params.title}</h1>
      <h5>{params.description}</h5>
    </section>
  )
}

Step.propTypes = {
  params: propTypes.object
}
