import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({danger}) => danger ? 'red' : 'royalblue'};
    border: none;
    color: #fff;
    outline: none;
    padding: .5rem .8rem;
`

export default Button;