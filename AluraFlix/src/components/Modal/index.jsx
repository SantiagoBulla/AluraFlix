import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../context/MainContext";
import { validations } from "../../utils/validations";
import Button from '../../components/Button';
import InputDrop from '../../components/InputDrop';
import InputField from '../../components/InputField';
import InputText from '../../components/InputText';
import styled from "styled-components"
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

    const { state, dispatch } = useContext(GlobalContext)

    const title = useRef('')
    const category = useRef('')
    const image = useRef('')
    const link = useRef('')
    const description = useRef('')

    const [errors, setErrors] = useState({
        title: '',
        category: '',
        image: '',
        link: '',
        description: ''
    })

    const updateData = async (newVideo) => {
        await fetch(`http://localhost:3000/videos/${newVideo.id}`, {
            method: 'PUT',
            body: JSON.stringify(newVideo),
        });
        const response = await fetch('http://localhost:3000/videos');
        const data = await response.json();
        return data
    }

    const validateFields = (data) => {
        let updatedErrors = { ...errors };
        for (const item in data) {
            if (Object.hasOwnProperty.call(data, item)) {
                switch (item) {
                    case 'title':
                        if (validations.validateEmptyFields(data[item])) {
                            updatedErrors.title = '--error-color'
                        } else {
                            updatedErrors.title = ''
                        }
                        break;
                    case 'category':
                        if (validations.validateDropField(data[item])) {
                            updatedErrors.category = '--error-color'
                        } else {
                            updatedErrors.category = ''
                        }
                        break;
                    case 'image':
                        if (validations.urlStartsWithHTTPS(data[item])) {
                            updatedErrors.image = '--error-color'
                        } else {
                            updatedErrors.image = ''
                        }
                        break;
                    case 'link':
                        if (validations.urlStartsWithHTTPS(data[item])) {
                            updatedErrors.link = '--error-color'
                        } else {
                            updatedErrors.link = ''
                        }
                        break;
                    case 'description':
                        if (validations.validateEmptyFields(data[item])) {
                            updatedErrors.description = '--error-color'
                        } else {
                            updatedErrors.description = ''
                        }
                        break;

                    default:
                        setErrors({ ...errors })
                        break;
                }
            }
        }
        setErrors(updatedErrors);

        return Object.values(updatedErrors).every(error => error === '');
    }

    const handleSubmit = async () => {
        const data = {
            id: state.editedVideo.id,
            title: title.current.value,
            category: parseInt(category.current.value),
            image: image.current.value,
            link: link.current.value,
            description: description.current.value
        }

        if (validateFields(data)) {
            const videos = await updateData(data);
            dispatch({ type: 'UPDATE_VIDEOS', payload: videos })
            dispatch({ type: 'MODAL_STATE', payload: data })
        }
    }

    const cleanFields = () => {
        title.current.value = ''
        category.current.value = 0
        image.current.value = ''
        link.current.value = ''
        description.current.value = ''
    }

    return <>
        {<>
            <Overlay />
            <DialogEstilizado>
                <form className={styles.form} method="dialog">
                    <div className={styles.close__modal}>
                        <button formMethod="dialog">
                            <img src="/img/close-modal.png" alt="Icono de cerrar" onClick={() => dispatch({ type: 'MODAL_STATE', payload: [] })} />
                        </button>
                    </div>
                    <div className={styles.title}>
                        <h1>EDITAR CARD:</h1>
                    </div>
                    <div className={styles.divider__1}>
                        <InputField data={state.editedVideo.title} ref={title} error={errors.title} border={'--blue-color'} label={'Título'} placeholder={'Título del video'} />
                        <InputDrop data={state.editedVideo.category} ref={category} error={errors.category} border={'--blue-color'} label={'Categoria'} placeholder={'Categoria'} />
                    </div>
                    <div className={styles.divider}>
                        <InputField data={state.editedVideo.image} ref={image} error={errors.image} border={'--blue-color'} label={'Imagen'} placeholder={'https://encrypted-tbn0.gstatic.com...'} />
                        <InputField data={state.editedVideo.link} ref={link} error={errors.link} border={'--blue-color'} label={'Video'} placeholder={'https://www.youtube.com/embed/sf...'} />
                    </div>
                    <div className={styles.divider}>
                        <InputText width={'100%'} data={state.editedVideo.description} ref={description} error={errors.description} border={'--blue-color'} label={'Descripción'} placeholder={'¿De qué se trata este vídeo?'} />
                    </div>
                    <div className={styles.buttons}>
                        <Button text={'GUARDAR'} style={'limpiar-modal'} onClickAction={handleSubmit} />
                        <Button text={'LIMPIAR'} style={'guardar-modal'} onClickAction={cleanFields} />
                    </div>
                </form>
            </DialogEstilizado>
        </>}

    </>


}

export default ModalZoom