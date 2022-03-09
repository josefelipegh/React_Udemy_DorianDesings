import styled, { css } from 'styled-components';

const Button = styled.button`
    border: none;
    color: #fff;
    margin-bottom: 1rem;
    margin-right: 1rem;
    outline: none;
    padding: .5rem .8rem;
    background-color: ${({ theme }) => theme.primary};

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