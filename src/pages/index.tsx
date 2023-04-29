import { Footer } from '@/elements/Footer'
import { Header } from '@/elements/Header'
import { Intro } from '@/elements/Intro'
import { NewXbox } from '@/elements/NewXbox'
import { Plans } from '@/elements/Plans'
import { VR } from '@/elements/VR'
import styles from '@/styles/Home.module.sass'

export const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Intro />
        <VR />
        <NewXbox />
        <Plans />
        <Footer />
      </div>
    </>
  )
}

export default Home
