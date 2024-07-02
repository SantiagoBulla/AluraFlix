import Button from '../../components/Button';
import InputDrop from '../../components/InputDrop';
import InputField from '../../components/InputField';
import InputText from '../../components/InputText';
import NavBar from '../../components/NavBar';
import styles from './NewVideo.module.css';

const NewVideo = () => {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <NavBar />
                </header>
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
                        <InputField border={'--grey-color'} label={'Título'} placeholder={'Título del video'} />
                        <InputDrop border={'--grey-color'} label={'Categoria'} placeholder={'Categoria'} />
                        <InputField border={'--grey-color'} label={'Imagen'} placeholder={'Link de la imagen'} />
                        <InputField border={'--grey-color'} label={'Video'} placeholder={'Link del video'} />
                        <InputText border={'--grey-color'} label={'Descripción'} placeholder={'¿De qué se trata este vídeo?'} />
                        <div className={styles.buttons}>
                            <Button text={'Guardar'} style={'limpiar'} />
                            <Button text={'Limpiar'} style={'guardar'} />
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default NewVideo