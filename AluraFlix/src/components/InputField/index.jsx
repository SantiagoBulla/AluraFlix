import styled from 'styled-components'

const Container = styled.div`
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    color: var(--grey-color-light);

    label{
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: var(--white-color);
    }

    input{
        background: transparent;
        height: 62px;
        width: 300px;
        border: 3px solid ${props => `var(${props.$border})`};
        border-radius: 10px;
        padding-left: 10px;
        font-size: 20px;
        outline: none;
        font-family: var(--fontSource);
    }

    input::placeholder{
        color: var(--grey-color-light);
    }

`


const InputField = ({ label, placeholder, border }) => {
    return (
        <Container $border={border}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input type='text' name="input" id={`input-${label}`} placeholder={placeholder} />
        </Container>
    )
}

export default InputField