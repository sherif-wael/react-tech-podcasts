import React, {useEffect, useRef} from "react";
import gsap from "../../lib/gsap";
import styled from "styled-components";
import { LoadingLayout } from "../common";



const StyledLoader = styled.div`
    svg{
        width: 100px;
        @media (max-width: 400px){
            width: 80px;
        }
    }
`

export default function Loader(){
    let right = useRef([]);
    let left = useRef([]);
    useEffect(() => {
        gsap.from(right.current, {opacity: 0, stagger: 0.2, ease: "Power1.easeOut", repeat: -1, duration: 0.2})
        gsap.from(left.current, {opacity: 0, stagger: 0.2, ease: "Power1.easeOut", repeat: -1, duration: 0.2})
    }, [])
    return (
        <LoadingLayout>
            <StyledLoader>
                <svg id="Layer_1" enableBackground="new 0 0 256 256"  viewBox="0 0 256 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="m173.274 97.657h-90.548c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5h90.549c1.933 0 3.5 1.567 3.5 3.5s-1.568 3.5-3.501 3.5z" fill="#3762cc"/>
                    <path d="m131.928 169.822h-7.855c-3.034 0-5.493-2.46-5.493-5.493v-55.905c0-3.034 2.459-5.493 5.493-5.493h7.855c3.034 0 5.493 2.46 5.493 5.493v55.905c0 3.033-2.459 5.493-5.493 5.493z" fill="#a4c9ff"/>
                    <path d="m131.928 171.822h-7.855c-4.132 0-7.493-3.361-7.493-7.493v-55.905c0-4.132 3.361-7.493 7.493-7.493h7.855c4.132 0 7.493 3.361 7.493 7.493v55.905c0 4.131-3.361 7.493-7.493 7.493zm-7.856-66.892c-1.926 0-3.493 1.567-3.493 3.493v55.905c0 1.926 1.567 3.493 3.493 3.493h7.855c1.926 0 3.493-1.567 3.493-3.493v-55.905c0-1.926-1.567-3.493-3.493-3.493z" fill="#3762cc"/>
                    <path d="m128 120.233c-17.736 0-32.113-14.377-32.113-32.113v-44.679c0-17.736 14.377-32.113 32.113-32.113 17.736 0 32.113 14.377 32.113 32.113v44.679c0 17.736-14.377 32.113-32.113 32.113z" fill="#e0ebfc"/>
                    <path d="m142.162 79.743c-3.084 0-5.585 2.501-5.585 5.585s2.5 5.585 5.585 5.585h17.822c.079-.921.129-1.851.129-2.792v-8.377h-17.951z" fill="#a4c9ff"/>
                    <path d="m160.113 60.196h-17.951c-3.084 0-5.585 2.501-5.585 5.585s2.5 5.585 5.585 5.585h17.951z" fill="#a4c9ff"/>
                    <path d="m136.578 46.234c0 3.084 2.5 5.585 5.585 5.585h17.951v-8.377c0-.942-.049-1.871-.129-2.792h-17.822c-3.085-.001-5.585 2.499-5.585 5.584z" fill="#a4c9ff"/>
                    <path d="m113.838 79.743h-17.951v8.377c0 .941.049 1.871.129 2.792h17.822c3.084 0 5.585-2.501 5.585-5.585-.001-3.084-2.501-5.584-5.585-5.584z" fill="#a4c9ff"/>
                    <path d="m113.838 60.196h-17.951v11.17h17.951c3.084 0 5.585-2.501 5.585-5.585-.001-3.085-2.501-5.585-5.585-5.585z" fill="#a4c9ff"/>
                    <path d="m113.838 40.649h-17.823c-.079.921-.129 1.85-.129 2.792v8.377h17.951c3.084 0 5.585-2.501 5.585-5.585s-2.5-5.584-5.584-5.584z" fill="#a4c9ff"/>
                    <path d="m128 122.233c-18.811 0-34.113-15.303-34.113-34.113v-44.679c0-18.81 15.303-34.113 34.113-34.113s34.113 15.303 34.113 34.113v44.679c0 18.81-15.302 34.113-34.113 34.113zm0-108.905c-16.604 0-30.113 13.509-30.113 30.113v44.679c0 16.604 13.509 30.113 30.113 30.113s30.113-13.509 30.113-30.113v-44.679c0-16.604-13.509-30.113-30.113-30.113z" fill="#3762cc"/>
                    <path d="m128 144.383c-27.695 0-50.226-22.531-50.226-50.226v-14.809c0-2.735 2.218-4.952 4.952-4.952s4.952 2.217 4.952 4.952v14.808c0 22.234 18.089 40.322 40.322 40.322s40.322-18.089 40.322-40.322v-14.1c0-2.735 2.218-4.952 4.952-4.952s4.952 2.217 4.952 4.952v14.101c0 27.695-22.531 50.226-50.226 50.226z" fill="#6bdddd"/>
                    <path d="m128 146.383c-28.798 0-52.227-23.429-52.227-52.226v-14.809c0-3.833 3.119-6.952 6.952-6.952s6.952 3.119 6.952 6.952v14.809c0 21.131 17.191 38.322 38.322 38.322s38.322-17.191 38.322-38.322v-14.101c0-3.833 3.119-6.952 6.952-6.952s6.952 3.119 6.952 6.952v14.101c.002 28.797-23.427 52.226-52.225 52.226zm-45.274-69.987c-1.628 0-2.952 1.324-2.952 2.952v14.809c0 26.592 21.635 48.226 48.227 48.226s48.227-21.634 48.227-48.226v-14.101c0-1.627-1.324-2.952-2.952-2.952s-2.952 1.324-2.952 2.952v14.101c0 23.336-18.985 42.322-42.322 42.322s-42.322-18.986-42.322-42.322v-14.809c-.002-1.627-1.326-2.952-2.954-2.952z" fill="#3762cc"/>
                    <g fill="#6bdddd">
                        <path ref={el => right.current[0] = el} d="m171.948 58.09c-1.821 0-3.296-1.476-3.296-3.296v-13.185c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v13.184c0 1.821-1.476 3.297-3.296 3.297z"/>
                        <path ref={el => left.current[3] = el} d="m44.075 76.218c-1.821 0-3.296-1.476-3.296-3.296v-49.441c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v49.441c0 1.82-1.475 3.296-3.296 3.296z"/>
                        <path ref={el => left.current[4] = el} d="m29.73 70.792c-1.821 0-3.296-1.476-3.296-3.296v-38.588c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v38.588c0 1.82-1.476 3.296-3.296 3.296z"/>
                        <path ref={el => left.current[5] = el} d="m15.384 65.003c-1.821 0-3.296-1.476-3.296-3.296v-27.011c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v27.012c0 1.82-1.475 3.295-3.296 3.295z"/>
                        <path ref={el => left.current[2] = el} d="m58.42 70.792c-1.821 0-3.296-1.476-3.296-3.296v-38.588c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v38.588c0 1.82-1.475 3.296-3.296 3.296z"/>
                        <path ref={el => left.current[1] = el} d="m72.764 65.003c-1.821 0-3.296-1.476-3.296-3.296v-27.011c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v27.012c0 1.82-1.475 3.295-3.296 3.295z"/>
                        <path ref={el => right.current[3] = el} d="m211.925 76.218c-1.821 0-3.296-1.476-3.296-3.296v-49.441c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v49.441c0 1.82-1.475 3.296-3.296 3.296z"/>
                        <path ref={el => right.current[2] = el} d="m197.58 70.792c-1.821 0-3.296-1.476-3.296-3.296v-38.588c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v38.588c0 1.82-1.475 3.296-3.296 3.296z"/>
                        <path ref={el => right.current[1] = el} d="m183.236 65.003c-1.821 0-3.296-1.476-3.296-3.296v-27.011c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v27.012c0 1.82-1.475 3.295-3.296 3.295z"/>
                        <path ref={el => right.current[4] = el} d="m226.27 70.792c-1.821 0-3.296-1.476-3.296-3.296v-38.588c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v38.588c0 1.82-1.475 3.296-3.296 3.296z"/>
                        <path ref={el => right.current[5] = el} d="m240.616 65.003c-1.821 0-3.296-1.476-3.296-3.296v-27.011c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v27.012c0 1.82-1.476 3.295-3.296 3.295z"/>
                        <path ref={el => left.current[0] = el} d="m84.052 58.09c-1.821 0-3.296-1.476-3.296-3.296v-13.185c0-1.82 1.475-3.296 3.296-3.296s3.296 1.476 3.296 3.296v13.184c.001 1.821-1.475 3.297-3.296 3.297z"/>
                    </g>
                </svg>
            </StyledLoader>
        </LoadingLayout>
    )
}