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
        padding: 0;
        font-size: 20px;
        outline: none;
        font-family: var(--fontSource);
    }

    input::placeholder{
        color: var(--grey-color-light);
        padding-left: 15px;
    }

    @media (min-width: 820px) {

        width: ${props => props.$width ? props.$width : '335px'};

        input{
            width: ${props => props.$width ? props.$width : '335px'};
        }
    }

`


const InputField = ({ label, placeholder, border, width }) => {
    return (
        <Container $border={border} $width={width}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input type='text' name="input" id={`input-${label}`} placeholder={placeholder} />
        </Container>
    )
}

export default InputField