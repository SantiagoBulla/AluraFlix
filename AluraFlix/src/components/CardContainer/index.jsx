import styles from './CardContainer.module.css'
import CategoryLabel from "../CategoryLabel";
import Card from '../Card/';

const CardContainer = ({ name, color }) => {
    return (
        <section className={styles.container}>
            <CategoryLabel name={name} color={color} />
            <div className={styles.cards__container}>
                <Card color={color} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nmJPap0ATDKPm3Xn-5DtqzzUknrOtTPIxA&s'} />
                <Card color={color} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nmJPap0ATDKPm3Xn-5DtqzzUknrOtTPIxA&s'} />
                <Card color={color} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nmJPap0ATDKPm3Xn-5DtqzzUknrOtTPIxA&s'} />
                <Card color={color} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nmJPap0ATDKPm3Xn-5DtqzzUknrOtTPIxA&s'} />
                <Card color={color} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0nmJPap0ATDKPm3Xn-5DtqzzUknrOtTPIxA&s'} />
            </div>
        </section>
    )
}

export default CardContainer