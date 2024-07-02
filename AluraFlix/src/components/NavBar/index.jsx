import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Button from '../Button'
import styles from './NavBar.module.css'
import styled from 'styled-components'

const Container = styled.nav`
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    display: flex;
    flex-direction: ${(props) => props.$reverseflex}; ;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 15px 0;
    border-top: 4px solid var(--blue-color);
    box-shadow: inset 0 0 8px  var(--blue-color); /* Shadow on top border */
`

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const actualNav = location.pathname === '/';

    const icon = actualNav ? 'home-icon-active.png' : 'add-icon-active.png';
    const iconInactive = actualNav ? 'add-icon-inactive.png' : 'home-icon-inactive.png';
    const text = actualNav ? 'HOME' : 'NUEVO VIDEO';
    const imgNavigate = actualNav ? '/new-video' : '/';

    return (
        <Container className={styles.container} $reverseflex={actualNav ? 'row' : 'row-reverse'}>
            <Button text={text} icon={icon} style={'nav'} />
            <img src={`img/${iconInactive}`} alt="icon-add" onClick={() => navigate(imgNavigate)} />
        </Container>
    )
}

export default NavBar