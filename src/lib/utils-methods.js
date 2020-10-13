import { getPodcastFromURL } from "podcast-feed-parser";

export function maxLength(str, l){
    return str.length <= l ? str : str.slice(0, l).trim() + "...";
}

export function encode(str){
    return str.replace(/\s/g, "_");
}

export function decode(str){
    return str.replace(/_/g, " ");
}

export function size(img, str){
    return img.replace("100x100bb", str);
}

export function random(arr, n){
    let result = [];
    let hash = {};
    while(result.length < n){
        let i = Math.floor(Math.random() * arr.length);
        if(!hash[i]) {
            result.push(arr[i]);
            hash[i] = true;
        }
    }
    return result
}

export function changeMinSec(value){
    let min = Math.floor(value / 60);
    let sec = Math.floor(value) % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart("2", 0)}`
}