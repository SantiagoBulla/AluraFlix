import Button from '../../components/Button';
import InputDrop from '../../components/InputDrop';
import InputField from '../../components/InputField';
import InputText from '../../components/InputText';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './NewVideo.module.css';
import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../../context/MainContext';
import { validations } from '../../utils/validations.js';
import Loading from '../../components/Loading';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const NewVideo = () => {

    const { state, dispatch } = useContext(GlobalContext)
    const navigate = useNavigate();

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

    const insertData = async (data) => {
        await fetch("http://localhost:3000/videos", {
            method: 'POST',
            body: JSON.stringify({ ...data, id: uuidv4() }),
        });
        const response = await fetch('http://localhost:3000/videos');
        const videos = await response.json();
        return videos
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
            title: title.current.value,
            category: parseInt(category.current.value),
            image: image.current.value,
            link: link.current.value,
            description: description.current.value
        }

        if (validateFields(data)) {
            const videos = await insertData(data)
            dispatch({ type: 'UPDATE_VIDEOS', payload: videos })
            swal("GENIAL!", "¡Registro exitoso!", "success");
            navigate('/');
        }
    }

    const cleanFields = () => {
        title.current.value = ''
        category.current.value = 0
        image.current.value = ''
        link.current.value = ''
        description.current.value = ''
    }

    return (
        <>
            <div className={styles.container}>
                <Header />
                {
                    state.categories.length == 0 ?
                        <Loading />
                        :

                        <main className={styles.main}>
                            <div className={styles.title}>
                                <h1>NUEVO VIDEO</h1>
                                <h4>Complete el formulario para crear una nueva tarjeta de video</h4>
                            </div>
                            <form className={styles.form}>
                                <div className={styles.subtitle}>
                                    <hr />
                                    <h2>Crear tarjeta</h2>
                                    <hr />
                                </div>
                                <div className={styles.divider__1}>
                                    <InputField value={title.current.value} ref={title} error={errors.title} border={'--grey-color'} label={'Título'} placeholder={'Título del video'} />
                                    <InputDrop value={category.current.value} ref={category} error={errors.category} border={'--grey-color'} label={'Categoria'} placeholder={'Categoria'} />
                                </div>
                                <div className={styles.divider}>
                                    <InputField value={image.current.value} ref={image} error={errors.image} border={'--grey-color'} label={'Imagen'} placeholder={'https://encrypted-tbn0.gstatic.com...'} />
                                    <InputField value={link.current.value} ref={link} error={errors.link} border={'--grey-color'} label={'Video'} placeholder={'https://www.youtube.com/embed/sf...'} />
                                </div>
                                <div className={styles.divider}>
                                    <InputText value={description.current.value} ref={description} error={errors.description} border={'--grey-color'} label={'Descripción'} placeholder={'¿De qué se trata este vídeo?'} />
                                </div>
                                <div className={styles.buttons}>
                                    <Button text={'Guardar'} style={'limpiar'} onClickAction={handleSubmit} />
                                    <Button text={'Limpiar'} style={'guardar'} onClickAction={cleanFields} />
                                </div>
                            </form>
                        </main>
                }
                <Footer />
            </div>
        </>
    )
}

export default NewVideo