import styled from 'styled-components';

export const NewsPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
`
export const NewsHeader = styled.div`
    text-align: left;
    background: transparent url(/static/images/title_bg.gif) repeat-x center center;
    width:100%;
`
const NewsHeaderDiv = styled.div`
    position: relative;
    float: left;
    height: 54px;
    font-size: 16px;
    line-height: 52px;
    margin: 0;
    padding: 0 35px 0 35px;
    color: white;
    font-weight: 300;
    background: transparent url(/static/images/title_item_bg.png) no-repeat right top;
    margin-left: -22px;
`
export const NewsHeaderH1 = styled(NewsHeaderDiv)`
    margin-left: 0;
    font-size: 19px;
    padding: 0 35px 0 30px;
    height: 54px;
    z-index: 10 !important;
`
export const NewsDate = styled.div`
    height: 54px;
    line-height: 54px;
    font-weight: lighter;
    font-size: 18px;
    color: #fefefe;
    text-align: left;
    padding-left: 30px;
    background: transparent url(/static/images/sub_bg.png) repeat center center;
    box-shadow: 0 1px 2px #000;
    z-index: 10;
    position: relative;
`
export const NewsBlock = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
@media screen and (min-width:1200px) {
    width:580px;
    height: 280px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:47.5%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
`
export const SubmissionBlock = styled.section`
    position:relative;
    border: 3px solid #343434;
    padding:0 !important;
    background: url(/static/images/bg_body2.jpg);
    background-size: cover;
@media screen and (min-width:1200px) {
    width:380px;
    height: 280px;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    width:47.5%;
    margin:1em 0 1em 0.7em;
    float:left;
}
@media screen and (max-width:767px) {
    width:95%;
    margin:1em auto;
}
& a {
    text-decoration:none;
}

`
export const SubmissionTitle = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.25em;
    line-height: 1.2em;
    color: #ccc;
    margin-bottom:0.5em;
    padding:1em;
    background:#4c4c4c;
`
export const SubmissionText = styled.div`
    font-size: 1em;
    line-height: 1em;
    color: #ccc;
    padding:1.5em 1em;
`
export const SubmissionLinkRM = styled.a`

    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid #ccc;
    border-radius:0.25em;
    margin:1em auto 1.5em auto;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: #ccc;
    text-align:center;
    transition: all 0.2s;
    :hover{
     color:#212121;
     background-color:#ccc;
    }
`

export const NewsBlockRt = styled(NewsBlock)`
@media screen and (min-width:1200px) {
    margin:1em 0.7em 1em 0;
    float:right;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    margin:1em 0.7em 1em 0;
    float:right;
}
`
export const NewsPane = styled.div`
`
export const NewsImage = styled.img`
    display:block;
    width:100%;
    height: 277px;
`
export const NewsLabel = styled.div`
    position: absolute;
    left: 0;
    bottom: 1em;
    background-color: rgba(0,0,0,0.75);
    padding: 1em 1em;
    text-align: left;
    max-width:95%;
`
export const NewsTitle = styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
    line-height: 1em;
    color: #ccc;
    margin-bottom:0.5em;
`
export const NewsText = styled.div`
    font-size: 0.8em;
    line-height: 1em;
    color: #ccc;
`
export const NewsHeaderH2 = styled(NewsHeaderDiv)`
    z-index: 9 !important;
`
export const NewsItemPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
`
export const NewsItemTimestamp = styled.div`
    height: 54px;
    line-height: 54px;
    font-weight: lighter;
    font-size: 14px;
    color: #fefefe;
    text-align: left;
    padding-left: 30px;
    background: transparent url(/static/images/sub_bg.png) repeat center center;
    box-shadow: 0 1px 2px #000;
    z-index: 10;
    position: relative;
    color: #999;
    font-style: italic;
`
export const NewsItemImage = styled.img`
    width:162px;
    float:right;
    margin:1em 1em auto auto;
@media (max-width:767px) {
    display:none;
}
`
export const NewsItemP = styled.div`
    font-size: 14px;
    line-height: 1.6;
    margin:1em auto 1em 2.5em;
    text-align:left;
`
export const NewsItemPWC = styled(NewsItemP)`
    color: #0099cc;
    margin:auto auto auto 2.5em;
`
