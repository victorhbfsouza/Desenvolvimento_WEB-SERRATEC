import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    Container,
    LeftContainer,
    LogoContainer,
    NavList,
    NavItem,
    ProfileContainer,
} from './style';

export function Header() {
    const location = useLocation();

    console.log(location)

    return (
        <>
            <Container>
                <LeftContainer>
                    <LogoContainer>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" alt="Pokeball" />
                        <span>My <span>Pokedex</span></span>
                    </LogoContainer>
                    <NavList>
                        <Link to={'/'}>
                            <NavItem isActive={location.pathname === "/"}>Home</NavItem>
                        </Link>
                        <Link to={'/dashboard'}>
                            <NavItem isActive={location.pathname === "/dashboard"}>Dashboard</NavItem>
                        </Link>
                        <Link to={'/mypokemon'}>
                            <NavItem isActive={location.pathname === "/mypokemon"}>My Pokemon</NavItem>
                        </Link>
                        <Link to={'/login'}>
                            <NavItem isActive={location.pathname === "/login"}>Login</NavItem>
                        </Link>
                    </NavList>
                </LeftContainer>
                <ProfileContainer>
                    <span>Welcome, <span>Victor</span></span>
                    <img src="https://avatars.githubusercontent.com/u/127329074?v=4" alt="Victor Hugo" />
                </ProfileContainer>
            </Container>
            <Outlet />
        </>
    )
}