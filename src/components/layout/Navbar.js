import React, {useState, useEffect, useMemo, useRef} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {withRouter} from "react-router";
import {BackArrow} from "../common";

const StyledNavbar = styled.div`
    ${({theme}) => theme.mixins.flexSpaceBetween};
    background-color: var(--white);
    padding: 22px 30px;
    &.darker{
        background-color: var(--light-color);
        padding: 15px 30px;
        @media (max-width: 660px){
            padding: 15px 10px 15px 12px;
        }
        .logo{
            font-size: var(--fz-xl);
        }
    }
    a{
        color: var(--black);
    }
    .logo{
        font-size: var(--fz-xxl);
        z-index: 101;
        transition: color 500ms linear;
        i{
            font-weight: 800;
            letter-spacing: 0.6px;
            font-style: normal;
        }
        &.white{
            color: var(--white);
        }
    }
    nav.lg-screen{
        a{
            margin: 0 0 0 10px;
            font-size: var(--fz-md);
            font-weight: 300;
            padding: 0 5px;
        }
        &.hidden{
            display: none;
        }
        @media (max-width: 660px){
            display: none;
        }
    }
    .go-back{
        display: none;
        i{
            padding: 5px;
            font-size: var(--fz-xxl);
            cursor: pointer;
        }
        &.visible{
            display: block;
        }
    }
    nav.sm-screen{
        display: none;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
        z-index: 100;
        box-shadow: 0 -1px 1px rgb(0, 0, 0, 0.2);
        a{
            text-align: center;
            padding: 12px 0;
            color: var(--white);
            font-size: var(--fz-xl);
            background-color: var(--dark-color);
            &.selected{
                background-color: #f2f2f2;
                color: var(--black);
            }
        }
        @media (max-width: 660px){
            display: grid;
        }
    }
    @media (max-width: 660px){
        padding: 20px 10px;
    }
`


const lgNavLinks = [
    {
        name: "home",
        href: "/"
    },
    {
        name: "bookmarks",
        href: "/bookmarks"
    } 
]

const smallNavLinks = [
    {
        name: "home",
        href: "/",
        icon: "fas fa-home"
    },
    {
        name: "player",
        href: "/nowplaying",
        icon: "fas fa-headphones-alt"
    },
    {
        name: "bookmarks",
        href: "/bookmarks",
        icon: "fas fa-bookmark"
    }
]



function Navbar({location, goBack}){
    return (
        <StyledNavbar className={classNames({darker: goBack})}>
            <a href="/" className="logo"><i>T</i>ech<i>P</i>odcasts</a>
            <nav className={classNames("lg-screen", {hidden: goBack})}>
                {
                    lgNavLinks.map(({name, href}, i) => (
                        <Link to={href} key={i}>{name}</Link>
                    ))
                }
            </nav>
            <div className={classNames("go-back", {visible: goBack})}>
                <BackArrow />
            </div>
            <nav className="sm-screen">
                {
                    smallNavLinks.map(({href, icon}, i) => (
                        <Link to={href} className={classNames({selected: location.pathname === href})}>
                            <i className={icon}></i>
                        </Link>
                    ))
                }
            </nav>
        </StyledNavbar>
    )
}

export default withRouter(Navbar)
