import { useContext } from 'react';
import { GlobalContext } from '../../context/MainContext.jsx';
import CardContainer from '../../components/CardContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal'
import styles from './Home.module.css';

const Home = () => {

  const { state } = useContext(GlobalContext);

  return (
    <>
      <div className={styles.container}>
        <Header />
        {state.categories.length == 0 ?
          <Loading /> :
          <>
            <Banner selectedVideo={state.selectedVideo} />
            <main className={styles.main}>
              {state.categories.map(category => {
                const videos = state.videos.filter(video => {
                  return category.id == video.category
                });
                return videos.length > 0 && <CardContainer category={category} videos={videos.reverse()} key={category.id} />
              })}
            </main>
          </>
        }
        <Footer />
        {state.openModal && <Modal />}
      </div>
    </>
  )
}

export default Home