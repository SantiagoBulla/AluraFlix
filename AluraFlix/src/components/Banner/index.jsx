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
`

const Banner = ({ image, video, color }) => {
    return (
        <div className={styles.container}>
            <Container $image={image} />
            <div className={styles.card}>
                <div className={styles.wrapper__text}>
                    <CategoryLabel color={color} name={'FRONT END'} />
                    <div className={styles.information}>
                        <h4>Titulo</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus tenetur voluptatum repudiandae sequi. Enim quisquam repellendus perferendis sequi perspiciatis eligendi, architecto minus quasi. Enim quisquam repellendus perferendis sequi perspiciatis eligendi, architecto minus quasi.</p>
                    </div>
                </div>
                <Video
                    $color={color}
                    src={video}
                    title='video'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></Video>
            </div>
        </div>
    )
}

export default Banner