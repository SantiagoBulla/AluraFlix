import styles from './CategoryLabel.module.css'

const CategoryLabel = ({ name, color }) => {
    return (
        <div className={styles.container} style={{ backgroundColor: `${color}` }}>
            <p>{name}</p>
        </div>
    )
}

export default CategoryLabel