import React, {useEffect, useRef} from "react";
import podcasts from "../../lib/podcasts";
import {maxLength, encode} from "../../lib/utils-methods";
import gsap from "../../lib/gsap";
import styled from "styled-components";
import {withRouter} from "react-router"

const StyledSection = styled.section`
    margin: 0 0 50px;
    h3{
        font-size: var(--fz-heading);
        font-weight: 300;
        text-align: center;
        margin: 0 0 70px;
        @media (${({theme}) => theme.bp.xs}){
            margin: 0 0 40px;
        }
    }
    @media (max-width: 660px){
        margin: 0 0 65px;
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 30px 20px;
    @media (${({theme}) => theme.bp.sm}){
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 25px 15px;
    }
    @media (max-width: 770px){
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 25px 10px;
    }
    @media (${({theme}) => theme.bp.xs}){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px 10px
    }
    @media (max-width: 400px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const StyledPodcastIcon = styled.div`
    cursor: pointer;
    &:hover img{
        transform: scale(1.1);
    }
    figure{
        text-align: center;
        img{
            ${({theme}) => theme.mixins.img};
            margin: 0 auto;
            margin-bottom: 13px;
            transition: transform 200ms ease;
        }
        figcaption{
            font-size: var(--fz-sm);
        }
    }
`

function FeedContainer({history}){
    let icons = useRef([]);
    let wrapper = useRef(null);
    useEffect(() => {
        gsap.from(icons.current, {
            scrollTrigger: {
                trigger: wrapper.current,
                start: "top 65%"
            },
            y: 25,
            opacity: 0,
            stagger: 0.1
        })
    }, [])
    return (
        <StyledSection>
            <div className="side-paddings">
                <h3>Available Podcasts</h3>
                <StyledGrid ref={wrapper}>
                    {
                        podcasts.map(({img, name}, i) => (
                            <StyledPodcastIcon key={i} ref={el => icons.current[i] = el} 
                                onClick={() => history.push(`/podcast/${encode(name)}`)}>
                                <figure>
                                    <img src={img} alt={name} />
                                    <figcaption>{maxLength(name, 15)}</figcaption>
                                </figure>
                            </StyledPodcastIcon>
                        ))
                    }
                </StyledGrid>
            </div>
        </StyledSection>
    )
}

export default withRouter(FeedContainer)