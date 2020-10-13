import React from "react";
import styled from "styled-components";
import podcasts from "../../lib/podcasts";
import {size, random} from "../../lib/utils-methods";


// prev img size 140x140, container maxheight: 450px;
// no btn, no content div, font-size: 38px;
// adding some media queries


const StyledSection = styled.section`
    padding: 0;
    overflow: hidden;
    // margin-bottom: 50px;
`

const StyledGallery = styled.div`
    overflow: hidden;
    position: relative;
    max-height: 510px;
    .container{
        overflow: hidden;
        transform: translateY(-120px) skewY(10deg);
    }
    .content-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, rgb(0, 0, 0, 0.96) 15%, rgb(0, 0, 0, 0.9) 43%, rgb(0, 0, 0, 0.8) 76%, rgb(0, 0, 0, 0.7) 82%, rgb(0, 0, 0, 0.2));
        color: #fff;
        .content{
            max-width: 50%;
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translateY(-50%);
            @media (max-width: 820px){
                max-width: 70%;
            }
            @media (max-width: 650px){
                max-width: 100%;
                text-align: center;
                left: 0;
                padding: 0 10px;
                h2{
                    font-size: 32px;
                }
                button{
                    font-size: var(--fz-xxs)
                }
            }
        }
        h2{
            font-weight: 600;
            font-size: 40px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            line-height: 1.8;
            @media (${({theme}) => theme.bp.sm}){
                font-size: 36px;
                line-height: 1.6;
            }
        }
        button{
            background-color: var(--secondary-color) ;
            color: var(--white);
            padding: 10px 15px;
            font-size: var(--fz-xs);
            border-radius: 2px;
            margin: 10px 0 0 ;
            text-transform: uppercase;
        }
    }
    @media (max-width: 650px){
        max-height: 580px;
    }
`

const StyledWrapper = styled.div`
    white-space: nowrap;
    display: inline-block;
    animation: move ${props => props.duration}s linear infinite;
    .imgs-wrapper{
        white-space: nowrap;
        display: inline-block;
    }
    img{
        vertical-align: middle;
    }
    @keyframes move{
        0%{transform: translate3d(0, 0, 0)}
        100%{transform: translate3d(-50%, 0, 0)}
    }
`

export default function IntroSection(){
    return (
        <StyledSection>
            <StyledGallery>
                <div className="container">
                    {
                        [28, 80, 56, 66, 45].map((dur, i) => (
                        <div>
                                <StyledWrapper duration={dur}>
                                    <div className="imgs-wrapper">
                                        {random(podcasts, 10).map(({img, name}, i) => <img src={size(img, "150x150bb")} alt={name} key={i} />)}
                                    </div>
                                    <div className="imgs-wrapper">
                                        {random(podcasts, 10).map(({img, name}, i) => <img src={size(img, "150x150bb")} alt={name} key={i} />)}
                                    </div>
                                </StyledWrapper>
                        </div>
                        ))
                    }
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <h2>enjoy the best tech podcasts, all in one place.</h2>
                        <button>learn more</button>
                    </div>
                </div>
            </StyledGallery>
        </StyledSection>
    )
}