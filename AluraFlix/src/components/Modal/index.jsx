import styled from "styled-components"
import Button from '../../components/Button';
import InputDrop from '../../components/InputDrop';
import InputField from '../../components/InputField';
import InputText from '../../components/InputText';
import styles from './Modal.module.css'

const Overlay = styled.div`
    background-color: var(--modal-bg-color);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 300px;
    background: transparent;
    padding: 0;
    border: 5px solid #6BD1FF;
    width: 90%;
    border-radius: 15px ;
    display: flex;
    justify-content: center;
    background-color: var(--modal-blue-color);

    @media (min-width: 1200px) {
        top: 650px;
        width: 70%;
    }
`
const ModalZoom = () => {

    return <>
        {<>
            <Overlay />
            <DialogEstilizado onClick={() => console.log('cerrar')}>
                <form className={styles.form} method="dialog">
                    <div className={styles.close__modal}>
                        <button formMethod="dialog">
                            <img src="/img/close-modal.png" alt="Icono de cerrar" />
                        </button>
                    </div>
                    <div className={styles.title}>
                        <h1>EDITAR CARD:</h1>
                    </div>
                    <InputField border={'--blue-color'} label={'Título'} placeholder={'¿Qué es javascript?'} />
                    <InputDrop border={'--blue-color'} label={'Categoria'} placeholder={'Categoria'} />
                    <InputField border={'--blue-color'} label={'Imagen'} placeholder={'https://www.google.com/url?...'} />
                    <InputField border={'--blue-color'} label={'Video'} placeholder={'https://www.youtube.com/url?...'} />
                    <InputText height={'180px'} border={'--blue-color'} label={'Descripción'} placeholder={'Este video es una recopilazación...'} />
                    <div className={styles.buttons}>
                        <Button text={'GUARDAR'} style={'limpiar-modal'} />
                        <Button text={'LIMPIAR'} style={'guardar-modal'} />
                    </div>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom