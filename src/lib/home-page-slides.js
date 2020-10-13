import developertea from "../images/developertea.jpg";
import fullstackradio from "../images/full-stack-radio.png";
import learntocode from "../images/LTC-banner.png";
import syntax from "../images/syntax-banner.png"
import cs50 from "../images/cs50-banner.png"
import css from "../images/css.png";
import html from "../images/html-5.png";
import js from "../images/js.png";
import nodejs from "../images/nodejs.png";
import programming from "../images/programming.png"


const slides = [
    {
        src: fullstackradio,
        zIndex: 1,
        translateY: -70,
        scale: 0.8
    },
    {
        src: developertea,
        zIndex: 2,
        translateY: -40,
        scale: 0.9
    },
    {
        src: syntax,
        zIndex: 3,
        translateY: 0,
        scale: 1,
    },
    {
        src: learntocode,
        zIndex: 2,
        translateY: -40,
        scale: 0.9
    },
    {
        src: cs50,
        zIndex: 1,
        translateY: -70,
        scale: 0.8
    }
]

export default slides


export const techIcons = [css, html, js, nodejs, programming];

