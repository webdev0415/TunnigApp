import styled from 'styled-components';

export const LanguageBar = styled.div`
@media screen and (min-width:1200px) {
    margin:1em 1.5em auto auto;
    float: right;
}
@media screen and (min-width:768px) and (max-width:1199px) {
    margin:1em auto auto 0em;
    float: left;
}
@media screen and (max-width:767px) {
    position: absolute;
    top:0em;
    left:5em;
}
`
export const LanguageBarText = styled.div`
    position:absolute;
    display:none;
`
export const LanguageBarImage = styled.img`
    width:22px;
`
export const LanguageBarLink = styled.div`
    position:relative;
    float:left;
    margin:1.2em 1em auto auto;
    cursor:pointer;
    text-align:center;
@media screen and (min-width:768px) {
    margin:1.2em 1em auto auto;
}
@media screen and (max-width:767px) {
    margin:1em 0.5em auto auto;
}
    :hover ${LanguageBarText} {
        display:block;
    }
`
