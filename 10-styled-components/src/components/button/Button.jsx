import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: royalblue;
    color: #fff;

    &:hover {
        background-color : red;
        color: royalblue;
    }
`

const Button = () => <StyledButton>Click me!</StyledButton>

export default Button;