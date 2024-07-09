import { styled } from "styled-components"
import Button from '../Button'
import styles from './Card.module.css'
import { useContext } from "react";
import { GlobalContext } from "../../context/MainContext";

const Container = styled.div`
  border: 2px solid ${(props) => props.color}; 
  width: 350px;
  border-radius: 22px;
  position: relative;
  margin-right: 15px;

  ::before {
    content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: inset 0 0 .5em ${(props) => props.color}; 
        pointer-events: none;
    }
`;

const Image = styled.img`
    height: 220px;
    border-radius: 15px 15px 0 0;
    border-bottom: 5px solid ${(props) => props.color};
    box-shadow: inset 0 0 3em ${(props) => props.color};
    cursor: pointer;
`

const Card = ({ video, color }) => {

    const { dispatch } = useContext(GlobalContext)

    return (
        <Container className={styles.container} color={color}>
            <Image src={video.image} alt="img" color={color} onClick={() => dispatch({ type: 'SET_SELECTED_VIDEO', payload: { ...video } })} />
            <div className={styles.buttons}>
                <Button text='BORRAR' icon='delete-icon.png' style={'card'} />
                <Button text='EDITAR' icon='edit-icon.png' style={'card'} />
            </div>
        </Container>
    )
}

export default Card