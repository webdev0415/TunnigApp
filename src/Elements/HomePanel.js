import styled from 'styled-components';

export const HomePanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    
`
export const HerProgrammatie = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
@media screen and (min-width:1200px) {
    width:682px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:56%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const HPPane = styled.div`
`
export const HPImage = styled.img`
    width:100%;
`
export const HPLabel = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.75);
    padding: 1em 1em;
    text-align: left;
    max-width:95%;
`
export const HPTitle = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
    line-height: 1em;
    color: #ccc;
    margin-bottom:0.5em;
`
export const HPText = styled.div`
    font-size: 0.8em;
    line-height: 1em;
    color: #ccc;
`
export const HPImagePane = styled.div`
    width:30%;
    display:inline-block;
    margin:0.3em;
    cursor:pointer;
`
export const HPImageText = styled.div`
    font-size:0.75em;
@media screen and (min-width:768px) and (max-width:820px) {
    font-size:0.65em;
}
@media screen and (max-width:480px) {
    font-size:0.5em;
}
`
export const HPLink = styled.a`
`
export const HPDiv = styled.div`
    height:1em;
`
export const BRPTeam = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
@media screen and (min-width:1200px) {
    width:470px;
    height:334px;
    margin:1em 0.7em 1em 0;
    float:right;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:39%;
    margin:1em 0.7em 1em 0;
    float:right;
} 
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const TestimonialsPane = styled.div`
    padding:0.5em 0;
`
export const TestimonialBox = styled.div`
    position:relative;
    height:100px;
    font-size:0.8em;
    text-align:left;
    float:left;
    border: 3px solid #343434;
    background: transparent url(/static/images/sub_bg.png) repeat;
@media screen and (min-width:768px) {
    margin: auto auto auto 1em;
    :last-child {
        margin:auto 1em auto auto;
    }
}
@media screen and (min-width:1200px) {
    width:31.6%;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:31%;
}
@media screen and (max-width:767px) {
    width:95%;
    margin: 0.5em 1em;
}
`
export const TestimonialBoxHeader = styled.div`
    height: 50px;
    padding: 0 15px 0 108px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const TestimonialName = styled.span`
    display:inline-block;
    margin-top: 12px;
`
export const TestimonialRatings = styled.span`
    float: right;
    margin-top: 12px;
    display:none;
@media screen and (min-width:1200px) {
    display:inline;
}
`
export const TestimonialRating = styled.img`
    width:22px;
    height:23px;
`
export const TestimonialImage = styled.img`
    position: absolute;
    top: 11px;
    left: 15px;
    height: 80px;
    width: 80px;
    border-radius: 3px;
    border: 2px solid #797979;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
`
export const TestimonialLink = styled.a`
    text-decoration:none;
    display:inline-block;
    margin:0 0 0 109px;
    color: #56b2e7;
    :hover {
        color: #66ccff;        
    }
`
export const TestimonialSubtitle = styled.div`
    margin:0 0 0 109px;
`
export const YouTubePane = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
    background: transparent url(/static/images/striped_bg.gif) repeat;
@media screen and (min-width:1200px) {
    width:682px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:56%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const YouTubePaneHeader = styled.div`
    height: 50px;
    line-height: 46px;
    font-size: 16px;
    color: #fefefe;
    text-align:left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const YouTubePaneHeaderImage = styled.img`
    margin: 12px 8px 12px 8px;
    float:left;
`
export const YouTubePaneHeaderText = styled.div`
    display:inline-block;
    padding: 0;
    float:left;
`
export const FacebookPane = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
    overflow:hidden;
@media screen and (min-width:1200px) {
    width:470px;
    margin:1em 1em 1em 0;
    float:right;
    max-height:442px;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:39%;
    margin:1em 1em 1em 0;
    float:right;
    height:40vw;
} 
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const FacebookPaneHeader = styled.div`
    height: 50px;
    line-height: 46px;
    font-size: 16px;
    color: #fefefe;
    text-align:left;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: transparent url(/static/images/title_bar_bg.png) repeat-x center center;
`
export const FacebookPaneHeaderImage = styled.img`
    margin: 12px 8px 12px 8px;
    float:left;
`
export const FacebookPaneHeaderText = styled.div`
    display:inline-block;
    padding: 0;
    float:left;
`
export const FacebookFeed = styled.div`
@media screen and (max-width:767px) {
    display:none;
}
`
export const FacebookContent = styled.div`
    display:none;
@media screen and (max-width:767px) {
    display:block;
    height:5em;
}
`
export const BRPVideoPane = styled.div`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
    cursor:pointer;
@media screen and (min-width:1200px) {
    width:682px;
    height:250px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:56%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const BRPLivePane = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
    overflow:hidden;
    text-align:left;
}
@media screen and (min-width:1200px) {
    width:470px;
    height:250px;
    margin:1em 1em 1em 0;
    float:right;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:39%;
    margin:1em 1em 1em 0;
    float:right;
} 
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const BRPLabel = styled.div`
    position: absolute;
    bottom: 1em;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.75);
    font-size: 14px;
    line-height: 14px;
    padding: 10px 10px;
    font-family: 'Titillium Web', Arial, Helvetica, sans-serif;
    text-align: left;
`
export const BRPLiveTitle = styled.div`
font-weight: bold;
text-transform: uppercase;
font-size: 15px;
`
export const BRPLiveText = styled.div`
`
export const CarouselImgWrapper = styled.div`
`
export const CarouselImg = styled.img`
`