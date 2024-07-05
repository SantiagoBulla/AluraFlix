import CardContainer from '../../components/CardContainer';
import NavBarMobile from '../../components/Header'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal'
import styles from './Home.module.css';
import Banner from '../../components/Banner';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {/* <Banner color={'#0047A8'} video={'https://www.youtube.com/embed/lRp5AC9W_F8'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtq6QFPJ1xayKfVKm4qFHcreJtfbkTr1BJBg&s'} /> */}
        <Banner color={'#0047A8'} video={'https://www.youtube.com/embed/lRp5AC9W_F8'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5R2jgxZTCoMRFmknP2JaVPW6nDg3UXzjULw&s'}/>
        <main className={styles.main}>
          <CardContainer color={'#0047A8'} name={'FRONT END'} />
          <CardContainer color={'#00C86F'} name={'BACK END'} />
          <CardContainer color={'#FFBA05'} name={'MOBILE'} />
          <CardContainer color={'#FF00E4 '} name={'INNOVACION Y GESTION'} />
        </main>
        <Footer />
        {/* <Modal /> */}
      </div>
    </>
  )
}

export default Home