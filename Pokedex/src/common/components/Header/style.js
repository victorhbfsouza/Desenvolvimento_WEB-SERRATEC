import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 70px 15px 70px;
    background-color: #ff9b61;
    height: 50px;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    height: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 60px;
    }

    span {
        font-size: 24px;
        font-weight: 500;

        span {
            color: #a80808;
        }
    }
`;

export const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 30px;
    height: 100%;

    a {
        height: 100%;
    }
`;

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 20px;
    height: 100%;
    padding-bottom: 12px;
    border-bottom: ${props => props.isActive ? '3px solid yellow' : 'none'};
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
    }

    span {
        font-weight: 500;
        font-size: 20px;

        span {
            text-decoration: underline;
            color: #a80808;
        }
    }
`;
