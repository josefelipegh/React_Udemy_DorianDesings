import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0)
    }
    50% {
        transform: rotate(180deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

const Button = styled.button`
    border: none;
    color: #fff;
    margin-bottom: 1rem;
    margin-right: 1rem;
    outline: none;
    padding: .5rem .8rem;
    background-color: ${({ theme }) => theme.primary};
    transition: color, background-color .5s;
    animation: ${rotate} 1.5s;

    &:hover {
        color: #fff;
        background-color: blue;
    }

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.danger};
        border: 1px solid ${({ theme }) => theme.danger};
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: ${({ theme }) => theme.danger};
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.primary};
    `}
`

export default Button;