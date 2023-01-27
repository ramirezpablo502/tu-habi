import propTypes from 'prop-types'
import styles from './ContentForm.module.scss'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'
import Step5 from '../steps/Step5'
import Step6 from '../steps/Step6'
import Step7 from '../steps/Step7'
import Step8 from '../steps/Step8'
import Step9 from '../steps/Step9'

export const ContentForm = ({ params }) => {
  const selectForm = () => {
    let render = null
    switch (params.component) {
      case 1:
        render = <Step1 params={params} />
        break
      case 2:
        render = <Step2 params={params} />
        break
      case 3:
        render = <Step3 params={params} />
        break
      case 4:
        render = <Step4 params={params} />
        break
      case 5:
        render = <Step5 params={params} />
        break
      case 6:
        render = <Step6 params={params} />
        break
      case 7:
        render = <Step7 params={params} />
        break
      case 8:
        render = <Step8 params={params} />
        break
      case 9:
        render = <Step9 params={params} />
        break
    }
    return render
  }
  return (
    <section className={styles.container}>
      <h1>{params.title}</h1>
      <h5>{params.description}</h5>
      <div className={styles.content_form}>
        {selectForm()}
      </div>
    </section>
  )
}

ContentForm.propTypes = {
  params: propTypes.object
}
