import styled, { css } from 'styled-components';

const Button = styled.button`
    border: none;
    color: #fff;
    margin-bottom: 1rem;
    margin-right: 1rem;
    outline: none;
    padding: .5rem .8rem;
    background-color: royalblue;

    ${({danger, ghost}) => danger && ghost && css`
        background-color: transparent;
        color: red;
        border: 1px solid red;
    `}

    ${({danger, ghost}) => danger && !ghost && css`
        background-color: red;
    `}

    ${({danger, ghost}) => !danger && ghost && css`
        background-color: transparent;
        color: royalblue;
        border: 1px solid royalblue;
    `}
`

export default Button;