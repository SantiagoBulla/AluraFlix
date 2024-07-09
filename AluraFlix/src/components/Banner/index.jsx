import styled from 'styled-components'
import styles from './Banner.module.css';
import CategoryLabel from '../CategoryLabel';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    background-image: ${props => `url(${props.$image})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    opacity: .5;
`

const Video = styled.iframe`
    border-radius: 15px;
    height: 90%;
    border: 5px solid ${props => props.$color};    
    box-shadow: 0 0 .5em ${props => props.$color};
    
    @media (min-width: 1200px) {
        height: 90%;
        width: 90%;
    }
`

const Banner = ({ selectedVideo }) => {
    return (
        <div className={styles.container}>
            <Container $image={selectedVideo.image} />
            <div className={styles.card}>
                <div className={styles.wrapper__text}>
                    <CategoryLabel color={selectedVideo.color} name={selectedVideo.category} />
                    <div className={styles.information}>
                        <h4>{selectedVideo.title}</h4>
                        <p>{selectedVideo.description}</p>
                    </div>
                </div>
                <div className={styles.video}>
                    <Video
                        $color={selectedVideo.color}
                        src={selectedVideo.link}
                        title={selectedVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </Video>
                </div>
            </div>
        </div>
    )
}

export default Banner