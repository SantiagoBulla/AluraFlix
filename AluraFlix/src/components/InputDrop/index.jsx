import styled from 'styled-components'

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
        color: var(--grey-color-light);
        outline: none;
    }
`

const InputDrop = ({ label, border, error }) => {
    return (
        <Container $border={border} $error={error}>
            <label htmlFor={`input-${label}`}>{label}</label>
            <select name="input" id={`input-${label}`} required>
                <option value="value1"> Value 1</option>
                <option value="value2"> Value 2 de dos</option>
                <option value="value3"> Value 3</option>
            </select>
        </Container>
    )
}

export default InputDrop