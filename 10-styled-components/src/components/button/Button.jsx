import styled from 'styled-components';

const color = 'royalblue';

const padding = '2rem';

const StyledButton = styled.button`
    background-color: ${color};
    color: #fff;
    padding: ${padding};

    &:hover {
        background-color : red;
        color: ${color};
    }
`

const Button = () => <StyledButton>Click me!</StyledButton>

export default Button;