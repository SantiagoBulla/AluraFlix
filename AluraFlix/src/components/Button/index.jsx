import { Navigate, useNavigate } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ icon, text, style }) => {

    const navigate = useNavigate();

    return (
        <button type="button" className={styles[style]} >
            {icon && <img src={`/img/${icon}`} alt={`icon-${text}`} />}
            <p>{text}</p>
        </button>
    )
}

export default Button