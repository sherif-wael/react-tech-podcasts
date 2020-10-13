import React, {useState, useEffect, useMemo, useRef} from "react";
import gsap from "../../lib/gsap";
import bgImg from "../../images/girl-with-headphone.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import classNames from "classnames";

const StyledNavbar = styled.div`
    ${({theme}) => theme.mixins.flexSpaceBetween};
    background-color: var(--white);
    padding: 22px 30px;
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
        @media (max-width: 660px){
            display: none;
        }
    }
    nav.sm-screen{
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: var(--dark-color);
        z-index: 100;
        transform: translate(-100%);
        .links{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 2;
            ${({theme}) => theme.mixins.flexCol}
            a{
                font-size: var(--fz-lg);
                padding: 10px 0;
                color: var(--white);
            }
        }
        img{
            position: absolute;
            right: -30%;
            bottom: -18%;
            height: 100%;
        }
        @media (max-width: 660px){
            display: block;
        }
    }
    @media (max-width: 660px){
        padding: 15px 20px;
    }
`


const StyledToggler = styled.div`
    &.white span{
        background-color: var(--white);
    }
    padding: 5px;
    display: none;
    z-index: 101;
    position: relative;
    cursor: pointer;
    span{
        display: block;
        transition: background-color 500ms linear;
        width: 25px;
        height: 2px;
        margin: 4px;
        border-raduis: 1px;
        background-color: var(--black);
    }
    @media (max-width: 660px){
        display: block;
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
        href: "/"
    },
    {
        name: "player",
        href: "/nowplaying"
    },
    {
        name: "bookmarks",
        href: "/bookmarks"
    }
]

const opts = {
    paused: true,
    defaults: {
        duration: 0.2
    }
}

export default function Navbar(){
    let [hidden, toggleHidden] = useState(true);
    let tl = useMemo(() => gsap.timeline(opts) , [])
    let bars = useRef([]), links = useRef([]), img = useRef(null), nav = useRef(null);
    let handleClick = () => {
        toggleHidden(!hidden);
    }
    useEffect(() => {
        let [bar1, bar2, bar3] = bars.current;
        tl
            .to(bar2, {scaleX: 0, transformOrigin: "right"}, 0)
            .to(bar1, {y: 6}, 0.2)
            .to(bar3, {y: -6}, 0.2)
            .to(bar1, {rotate: 45}, 0.3)
            .to(bar3, {rotate: -45}, 0.3)
            .to(nav.current, {xPercent: 100}, 0.3)
            .from(links.current, {y: -25, opacity: 0, stagger: 0.2}, 0.4)
            .from(img.current, {x: 100, opacity: 0}, 0.5)
            
    }, [])
    useEffect(() => {
        if(hidden){
            tl.reverse()
        }else{
            tl.play()
        }
    }, [hidden])
    return (
        <StyledNavbar>
            <a href="/" className={classNames("logo", {white: !hidden})}><i>T</i>ech<i>P</i>odcasts</a>
            <StyledToggler onClick={handleClick} className={classNames({white: !hidden})}>
                {[...new Array(3)].map((_, i) => (
                    <span key={i} ref={el => bars.current[i] = el} ></span>
                ))}
            </StyledToggler>
            <nav className="lg-screen">
                {
                    lgNavLinks.map(({name, href}, i) => (
                        <Link to={href} key={i}>{name}</Link>
                    ))
                }
            </nav>
            <nav className="sm-screen" ref={nav}>
                <div className="links">
                    {
                        smallNavLinks.map(({name, href}, i) => (
                            <Link to={href} key={i} ref={el => links.current[i] = el}
                            onClick={() => toggleHidden(true)}>{name}</Link>
                        ))
                    }
                </div>
                <img src={bgImg} alt="bg img" ref={img} />
            </nav>
        </StyledNavbar>
    )
}