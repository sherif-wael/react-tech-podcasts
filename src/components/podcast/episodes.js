import React, {useState} from "react";
import styled from "styled-components";
import SearchEpisodes from "./search-episode";
import EpisodeGrid from "./episodes-grid";


const StyledContainer = styled.div`
    margin: 0 0 70px;
`


export default function Episodes({episodes}){
    let [value, setValue] = useState("");
    let filterEpisods = e => {
        let regex = new RegExp(value, "i");
        return regex.test(e.title) || regex.test(e.guide) || regex.test(e.description);
    }
    let data = !value ? episodes : episodes.filter(filterEpisods);
    return (
        <StyledContainer className="small-side-paddings">
            <SearchEpisodes value={value} onChange={(v) => setValue(v)} />
            <EpisodeGrid data={data} />
        </StyledContainer>
    )
}