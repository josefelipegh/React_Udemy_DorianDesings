import React from 'react';
import styled from 'styled-components';


const Menu = styled.ul`
    display:flex;
    justify-content: space-between;
    background-color:#333;
    padding-left:0;
    margin-top:0;
    margin-bottom:0;
    list-styled:none;
`

const MenuItem = styled.li`
    padding:1rem;
`

const MenuLink = styled.a`
    text-decoration:none;
    text-transform:uppercase;
    color: #fff;
`

const Navigation = () =>(
    <nav>
        <Menu>
            <MenuItem>
                <MenuLink href="/">Home</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink href="/user">User</MenuLink>
            </MenuItem>
            <MenuItem>
                <MenuLink href="/contact">Contact</MenuLink>
            </MenuItem>
        </Menu>
    </nav>
)

export default Navigation;