import styled from 'styled-components'
import { GlobalContext } from '../../context/MainContext.jsx';
import { forwardRef, useContext, useState } from 'react';

const Container = styled.div`

    height: 108px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    label {
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--white-color)'};
    }
    
    
    select {
        background: transparent;
        height: 62px;
        width: 100%;
        border: 3px solid ${props => props.$error ? `var(${props.$error})` : `var(${props.$border})`};
        border-radius: 10px;
        padding-left: 10px;
        color: ${props => props.$error ? `var(${props.$error})` : 'var(--grey-color-light)'};
        outline: none;
    }

`

const InputDrop = forwardRef((props, ref) => {

    const { state } = useContext(GlobalContext)
    const [labelOption, setLabelOption] = useState(false)

    const disabledOption = () => {
        ref.current.options[0].disabled = true;
        setLabelOption(true);
    }

    return (
        <Container $border={props.border} $error={props.error}>
            <label htmlFor={`input-${props.label}`}>{props.label}</label>
            <select ref={ref} name="input" id={`input-${props.label}`} onChangeCapture={!labelOption ? disabledOption : null}>
                <option value={-1}>SELECCIONE UNA CATEGORIA</option>
                {state.categories.map(category => {
                    return <option key={category.id} value={category.id}>{category.title}</option>
                })}
            </select>
        </Container>
    )
})

export default InputDrop