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
            <Button danger>Click Me!</Button>
            <Button>Click Me!</Button>
        </>
    );
}

export default Title;