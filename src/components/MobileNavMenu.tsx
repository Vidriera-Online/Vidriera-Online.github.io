import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from '@iconify/react';
import HomeIcon from '@iconify-icons/icons8/home';
import SearchIcon from '@iconify-icons/icons8/search';
import ShoppingCartIcon from '@iconify-icons/icons8/shopping-cart';
import UserIcon from '@iconify-icons/icons8/gender-neutral-user';
import WppIcon from '@iconify-icons/icons8/phone';

const Footer = (props : any) => {
    return(
        <FooterContainer>
            <FooterButton exact to="/">
                <Icon icon={HomeIcon} height={30} width={30} />
            </FooterButton>
            <FooterButton exact to="/search">
                <Icon icon={SearchIcon} height={30} width={30} />
            </FooterButton>
            <FooterButton as="button">
                <BuyButton to="">
                    <Icon icon={WppIcon} height={30} />
                </BuyButton>
            </FooterButton>
            <FooterButton exact to="/cart">
                <Icon icon={ShoppingCartIcon} height={30} width={30} />
            </FooterButton>
            <FooterButton exact to="/user">
                <Icon icon={UserIcon} height={30} width={30} />
            </FooterButton>
        </FooterContainer>
    )
},
FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100vw;
    background: white;
    transition: 0.2s all;
    @media all and (min-width: 578px){
        display: none;
    }
`,
FooterButton = styled(NavLink)`
    height: 50px;
    width: 100%;
    border: 0;
    background: transparent;
    font: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0,0.5);
    & svg{
        fill: rgba(0,0,0,0.5);
    }
    &.active{
        color: #0d6efd;
        & svg{
            fill: #0d6efd;
        }
    }
    &:focus{
        outline: 0;
    }
`,
BuyButton = styled(Link)`
    height: 50px;
    width: 50px;
    position: relative;
    left: 0;
    top: -50%;
    border: 0;
    box-shadow: 0 0 0 10px #f8f9fa;
    background: transparent;
    border-radius: 50%;
    font: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: rgba(0,0,0,0.5);
    fill: rgba(0,0,0,0.5);
    &.active{
        color: #0d6efd;
        fill: #0d6efd;
    }
`

export default Footer;