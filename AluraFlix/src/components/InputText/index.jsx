import styled from 'styled-components'

const Container = styled.div`
    height: 201px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;

    label {
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: var(--white-color);
    }

    textarea {
        background: transparent;
        height: 155px;
        width: 300px;
        border: 3px solid ${props => `var(${props.$border})`};
        border-radius: 10px;
        padding: 10px 0 10px 10px;
        color: var(--grey-color-light);
        outline: none;
        resize: none;
    }

    textarea::placeholder {
        color: var(--grey-color-light);
    }


    textarea::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    textarea::-webkit-scrollbar-thumb {
        background: var(--grey-color-light);
        border-radius: 5px;
    }

    textarea::-webkit-scrollbar-track {
        background: var(--grey-color);
        border-radius: 5px;
    }
`

const InputText = ({ label, placeholder, border }) => {
    return (
        <Container $border={border}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <textarea type='text' name="input" id={`input-${label}`} placeholder={placeholder} />
        </Container>
    )
}

export default InputText