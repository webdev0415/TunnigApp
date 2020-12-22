import styled from 'styled-components';

export const SearchPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
`
export const SearchHeader = styled.div`
    text-align: left;
    background: transparent url(/static/images/title_bg.gif) repeat-x center center;
    width:100%;
`
const SearchHeaderDiv = styled.div`
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
export const SearchHeaderH1 = styled(SearchHeaderDiv)`
    margin-left: 0;
    font-size: 19px;
    padding: 0 35px 0 30px;
    height: 54px;
    z-index: 10 !important;
`
export const SearchHeaderH2 = styled(SearchHeaderDiv)`
    z-index: 9 !important;
`
export const SearchResults = styled.div`
    border: 3px solid #343434;
    border-radius: 10px;
    margin:1em auto 1em auto;
    padding: 0;
    background: transparent url(/static/images/striped_big_bg.gif) repeat center center;
@media screen and (min-width:1200px){
    width:473px;
}
@media screen and (min-width:768px) and (max-width:1199px){
    width:473px;
}
@media screen and (max-width:767px){
    width:94%;
    margin:1em auto;
}
`
export const SearchResultsHeader = styled.header`
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    background-color: rgba(0,0,0,0.7);
    padding:1em;
`
export const SearchResultsMidHeader = styled.header`
    background-color: rgba(0,0,0,0.7);
    padding:1em;
`
export const SearchResultsH = styled.div`
    width:50%;
    float:left;
    & h2 {
        margin:0.2em 1em 0.1em 1em;
        font-weight:bold;
    }
    & h3 {
        margin:0.1em 1em 0.2em 1em;
    }
`
export const SearchResultsH2 = styled.h2`
    font-size: 18px;
    color: #ccc;
    font-weight: normal;
    margin: 1em 0.4em;
    float:left;
`
export const SearchResultsH3 = styled.h3`
    font-size: 16px;
    color: #ccc;
    font-weight: normal;
    margin: 1em;
    float:left;
`
export const SearchResultsHeaderImage = styled.img`
    float: right;
    max-width: 80px;
    max-height: 50px;
    margin:5px;
`
export const SearchResultsList = styled.ul`
    color:#ccc;
    font-size:1em;
    text-align:left;
    padding:0 1em;
`
export const SearchResultsListItem = styled.li `
    list-style-type: none;
    padding: 0.5em 0.5em 0 0.5em;
    border-bottom: 1px dotted #343434;
    & > a {
        text-decoration: none;
        color: #ccc;
    }
    :last-child {
        border-bottom:none;
   }
`
