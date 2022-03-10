import React from 'react';

import styled from 'styled-components';

const getBorder = (width, type, color) => {
    return `${width} ${type} ${color}`
}

const Header = styled.header`
    text-align: center; 
    border: ${getBorder('3px', 'solid', 'royalblue')};
    margin-bottom: 1rem;

    & h1 {
        margin: 0;
        color: red;
    }

    & h1::after {
        content: '';
        display: block;
        width: 100px;
        height: 100px;
        background-color: greenyellow;
    }

    &:hover ::after {
        background-color: blue;
    }
`

const Title = () => {

    return (
        <Header>
            <h1>
                Styled Components
            </h1>
        </Header>
    );
}

export default Title;