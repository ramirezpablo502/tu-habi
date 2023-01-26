/* Importing the Navbar component from the navbar folder. */
import { Navbar } from '../components/navbar/Navbar'
/* Importing the Banner component from the banner folder. */
import { Banner } from '../views/landing/banner/Banner'

/* Create landing page */
export const Landing = () => {
  return (
    <section>
      <Navbar />
      <Banner />
    </section>
  )
}
