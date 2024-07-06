import styled from 'styled-components'

const Container = styled.div`
    height: 108px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    color: var(--grey-color-light);

    label{
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--white-color)'};
    }

    input{
        background: transparent;
        height: 62px;
        width: 100%;
        border: 3px solid ${props => props.$error ? `var(${props.$error})` : `var(${props.$border})`};
        border-radius: 10px;
        padding: 0;
        font-size: 20px;
        outline: none;
        font-family: var(--fontSource);
    }

    input::placeholder{
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--grey-color-light)'};
        padding-left: 15px;
    }
`


const InputField = ({ label, placeholder, border, error }) => {
    return (
        <Container $border={border} $error={error}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input type='text' name="input" id={`input-${label}`} placeholder={placeholder} required/>
        </Container>
    )
}

export default InputField