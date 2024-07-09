import styles from './CardContainer.module.css'
import CategoryLabel from "../CategoryLabel";
import Card from '../Card/';

const CardContainer = ({ category, videos }) => {
    return (
        <section className={styles.container}>
            <CategoryLabel name={category.title} color={category.color} />
            <div className={styles.cards__container}>
                {videos.map(video => {
                    return <Card video={video} color={category.color} key={video.id} />
                })}
            </div>
        </section>
    )
}

export default CardContainer