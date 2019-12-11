import styled from 'styled-components';

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
`;

export { NavBar, NavLink };
