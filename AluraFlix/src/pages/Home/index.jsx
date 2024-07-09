import CardContainer from '../../components/CardContainer';
import NavBarMobile from '../../components/Header'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Modal from '../../components/Modal'
import styles from './Home.module.css';
import Banner from '../../components/Banner';
import { useContext } from 'react';
import { GlobalContext } from '../../context/MainContext.jsx';

const Home = () => {

  const { state } = useContext(GlobalContext);

  return (
    <>
      <div className={styles.container}>
        <Header />
        {state.categories.length == 0 ?
          <h1>Cargando...</h1> :
          <>
            <Banner selectedVideo={state.selectedVideo} />
            <main className={styles.main}>
              {state.categories.map(category => {
                const videos = state.videos.filter(video => {
                  return category.id == video.categorie
                });
                return <CardContainer category={category} videos={videos} key={category.id} />
              })}
            </main>
          </>}
        <Footer />
        {/* <Modal /> */}
      </div>
    </>
  )
}

export default Home