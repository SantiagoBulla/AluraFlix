import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'
import styles from './Header.module.css'

const Mobile = styled.nav`
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: ${(props) => props.$reverseflex};
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 15px 0;
    border-top: 4px solid var(--blue-color);
    box-shadow: inset 0 0 8px  var(--blue-color);

    img {
        height: 35px;
        width: 35px;
        cursor: pointer;
    }

    @media (min-width: 820px) {
        display: none;
    }
`

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const actualNav = location.pathname === '/';

    const icon = actualNav ? 'home-icon-active.png' : 'add-icon-active.png';
    const iconInactive = actualNav ? 'add-icon-inactive.png' : 'home-icon-inactive.png';
    const text = actualNav ? 'HOME' : 'NUEVO VIDEO';
    const imgNavigate = actualNav ? '/new-video' : '/';

    return (
        <>
            <header className={styles.container}>
                <Mobile className={styles.mobile} $reverseflex={actualNav ? 'row' : 'row-reverse'}>
                    <Button text={text} icon={icon} style={'nav'} />
                    <img src={`img/${iconInactive}`} alt="icon-add" onClick={() => navigate(imgNavigate)} />
                </Mobile>
                <div className={styles.container__header}>
                    <img src="/img/logo-svg.svg" alt="logo" />
                    <div className={styles.buttons}>
                        <Button text={'HOME'} style={actualNav ? 'limpiar-modal' : 'guardar-modal'} onClickAction={() => navigate('/')} />
                        <Button text={'NUEVO VIDEO'} style={actualNav ? 'guardar-modal' : 'limpiar-modal'} onClickAction={() => navigate('/new-video')} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header