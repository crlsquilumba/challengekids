import styled from '@emotion/styled';

import Link from 'next/link';
import { css } from '@emotion/react';

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const linkStyles = css`
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLinkItem = styled.li`
  margin-left: 1rem;
`;

export const NavLink = styled.p`
  color: #ffffff;
  text-decoration: none;
  

  &:hover {
    color: #ff9f9f;
  }
`;
const Header = () => {
    return (

        <Nav>
            <Link href="/" >ChallengeKids</Link>

            <NavLinks>
                <NavLinkItem>

                    <Link href="/misiones">
                Lista Misiones
                    </Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link href="/registro-misiones">
                        Registro Misiones
                    </Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link href="/listaretos">
                        Lista Retos
                    </Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link href="/registro-retos">
                        Registro Retos
                    </Link>
                </NavLinkItem>
                <NavLinkItem>
                    <Link href="/retos">
                        Retos
                    </Link>
                </NavLinkItem>

                <NavLinkItem>
                    <Link href="/listaRetosEjecutor">
                        Retos
                    </Link>
                </NavLinkItem>

                <NavLinkItem>
                    <Link href="/usuario-conectado">
                        Usuario Conectado
                    </Link>
                </NavLinkItem>
            </NavLinks>
        </Nav>

    );
};

export default Header;