import React from 'react';

import styled from 'styled-components';
import Button from '../button/Button';

const getBorder = (width, type, color) => {
    return `${width} ${type} ${color}`
}

const TitleStyled = styled.h1`
    text-align: center; 
    border: ${getBorder('3px', 'solid', 'royalblue')};
`

const Title = () => {

    return (
        <>
            <TitleStyled>Styled Components</TitleStyled>
            <Button>Click Me!</Button>
            <Button danger>Click Me!</Button>
            <Button ghost>Ghost Me!</Button>
            <Button danger ghost>Ghost Me!</Button>
        </>
    );
}

export default Title;