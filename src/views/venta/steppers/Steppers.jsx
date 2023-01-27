import { NotFound } from '../notFound'
import { ContentForm } from '../contentForm/ContentForm'

import styles from './Steppers.module.scss'
import data from '../../../services/index.json'
import PropTypes from 'prop-types'

export const Steppers = ({ step }) => {
  const renderStep = () => {
    let render = null
    const params = data[step]
    if (step !== null) {
      render = <ContentForm params={params} />
    } else {
      render = <NotFound />
    }
    return render
  }

  return (
    <section className={styles.container}>
      {renderStep()}
    </section>
  )
}

Steppers.propTypes = {
  step: PropTypes.number
}
