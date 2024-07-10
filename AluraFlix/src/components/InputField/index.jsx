import { forwardRef } from 'react'
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
        width: 95%;
        border: 3px solid ${props => props.$error ? `var(${props.$error})` : `var(${props.$border})`};
        border-radius: 10px;
        padding: 0;
        font-size: 20px;
        outline: none;
        font-family: var(--fontSource);
        padding-left: 10px;
    }

    input::placeholder{
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--grey-color-light)'};
    }
`


const InputField = forwardRef((props, ref) => {
    return (
        <Container $border={props.border} $error={props.error}>
            <label htmlFor={`input-${props.label}`}>{props.label}</label>
            <input defaultValue={props.data && props.data} ref={ref} type='text' name="input" id={`input-${props.label}`} placeholder={props.placeholder}/>
        </Container>
    )
})

export default InputField