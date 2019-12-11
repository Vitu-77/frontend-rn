import React from 'react';
import { NavBar, NavLink } from './styles';

const NavigationBar = ({ links }) => {
    return (
        <NavBar>{
            links.map(link => {
                return (
                    <NavLink key={link.to} href={link.to}>
                        {link.name}
                    </NavLink>
                )
            })
        }
        </NavBar>
    )
}

export default NavigationBar;