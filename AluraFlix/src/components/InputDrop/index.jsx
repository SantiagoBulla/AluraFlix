import styled from 'styled-components'

const Container = styled.div`

    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    label {
        font-family: var(--fontSource);
        font-size: 20px;
        font-weight: 600;
        color: var(--white-color);
    }


    select {
        background: transparent;
        height: 62px;
        width: 320px;
        border: 3px solid ${props => `var(${props.$border})`};
        border-radius: 10px;
        padding-left: 10px;
        color: var(--grey-color-light);
        outline: none;
    }
`

const InputDrop = ({ label, border }) => {
    return (
        <Container $border={border}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <select name="input" id={`input-${label}`}>
                <option value="value1"> Value 1</option>
                <option value="value2"> Value 2 de dos</option>
                <option value="value3"> Value 3</option>
            </select>
        </Container>
    )
}

export default InputDrop