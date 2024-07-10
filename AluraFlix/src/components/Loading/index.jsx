import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styled from 'styled-components';

const Container = styled.div`
    height: 91vh;

    @media (min-width: 820px) {
        height: 83vh;
    }
`

const Loading = () => {
    return (
        <Container>
            <DotLottieReact
                src="https://lottie.host/36166193-9c2f-492d-b8b5-e0555cf1d2f3/TU34ITjDfX.lottie"
                loop
                autoplay
                speed={0.8}
            />
        </Container>
    )
}

export default Loading