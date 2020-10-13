import React from "react";
import styled from "styled-components";
import bg from "../../images/triangle-bg2.png";

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 85px 10px;
    color: var(--white);
    background: linear-gradient(90deg, rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.3)), url(${bg}) no-repeat center;
    margin: 0 0 60px 0;
    .logo{
        margin: 0 40px 0 0;
        max-width: 250px;
        img{
            box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.7);
            ${({theme}) => theme.mixins.img};
        }
        @media (${({theme}) => theme.bp.xs}){
            margin: 0 0 25px; 
        }
    }
    .content{
        h2{
            font-size: var(--fz-heading);
            margin: 0 0 15px;
        }
        p{
            font-size: var(--fz-xl);
            margin: 0 0 15px;
        }
        a{
            color: var(--white);
            background-color: #1173cf;
            padding: 8px 15px;
            font-size: var(--fz-xs);
            margin: 10px 0 0 ;
        }
        i{
            margin: 0 4px 0 0;
        }
        @media (${({theme}) => theme.bp.xs}){
            p, h2{
                margin: 0 0 15px;
            }
            h2{
                font-size: 28px;
            }
            p{
                font-size: var(--fz-lg);
            }
        }
    }
    @media (${({theme}) => theme.bp.xs}){
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: linear-gradient(to bottom, rgb(0, 0, 0, 0.9), rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.5) 100%), url(${bg}) no-repeat center;
    }
`


export default function PodcastHeader({data}){
    let {title, author, description, image, updated, episodes, link} = data ;
    return (
        <StyledContainer>
            <div className="logo">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{author}</p>
                {description.short && <p>{description.short}</p>}
                <p><b>{episodes.length}</b> toal episodes.</p>
                <a href={link} target="_blank"><i className="fas fa-external-link-alt"></i> visit website</a>
            </div>
        </StyledContainer>
    )
}