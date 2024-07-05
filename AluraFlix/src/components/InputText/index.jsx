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

    @media (min-width: 820px) {

        width: 100%;
        height: ${props => props.$height ? props.$height : '250px'};

        textarea{
            align-self: start;
            width: ${props => props.$width ? props.$width : '450px'};
            height: ${props => props.$height ? props.$height : '200px'};
        }
    }
`

const InputText = ({ label, placeholder, border, width, height }) => {
    return (
        <Container $border={border} $width={width} $height={height}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <textarea type='text' name="input" id={`input-${label}`} placeholder={placeholder} />
        </Container>
    )
}

export default InputText