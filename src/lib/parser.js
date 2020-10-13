import podcastFeedParser from "podcast-feed-parser";

export default async function parser(url){
    let podcast 
    try{
        podcast = await podcastFeedParser.getPodcastFromURL(url);
    }catch(e){
        console.log(e.toString())
        throw e
    }
    return podcast
}