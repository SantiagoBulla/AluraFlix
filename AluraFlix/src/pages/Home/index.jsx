import CardContainer from '../../components/CardContainer';
import NavBar from '../../components/NavBar'
import Modal from '../../components/Modal'
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <NavBar />
        </header>
        <main className={styles.main}>
          <CardContainer color={'#0047A8'} name={'FRONT END'} />
          <CardContainer color={'#00C86F'} name={'BACK END'} />
          <CardContainer color={'#FFBA05'} name={'MOBILE'} />
          <CardContainer color={'#FF00E4 '} name={'INNOVACION Y GESTION'} />
        </main>
        {/* <Modal /> */}
      </div>
    </>
  )
}

export default Home