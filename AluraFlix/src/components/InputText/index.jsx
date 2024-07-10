import { forwardRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 201px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;

    label {
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--white-color)'};
    }

    textarea {
        background: transparent;
        height: 155px;
        width: 95%;
        border: 3px solid ${props => props.$error ? `var(${props.$error})` : `var(${props.$border})`};
        border-radius: 10px;
        padding: 10px 0 10px 10px;
        color: var(--grey-color-light);
        outline: none;
        resize: none;
    }

    textarea::placeholder {
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--grey-color-light)'};
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
        width: ${props => props.$width ? props.$width : '60%'};
        height: ${props => props.$height ? props.$height : '250px'};

        textarea{
            align-self: start;
            height: ${props => props.$height ? props.$height : '200px'};
        }
    }
`

const InputText = forwardRef((props, ref) => {
    return (
        <Container $border={props.border} $height={props.height} $error={props.error} $width={props.width}>
            <label htmlFor={`input-${props.label}`}>{props.label}</label>
            <textarea defaultValue={props.data && props.data} ref={ref} type='text' name="input" id={`input-${props.label}`} placeholder={props.placeholder} required />
        </Container>
    )
})

export default InputText