import styled from 'styled-components';

export const ModelBanner = styled.div`
    border-bottom: 2px solid #366fa5;
    position:relative;
`
export const ModelBannerImage = styled.div`
    width:100%;
    height:332px;
    background: url(${(props)=>props.image_name}) no-repeat;
    background-size:cover;
    background-position: center center;
`
export const ModelBannerText = styled.div`
    position:absolute;
    right:2em;
    bottom:1em;
`
const BackgroundBar = styled.div`
    height: 54px;
    line-height: 54px;
    font-weight: lighter;
    font-size: 18px;
    color: #fefefe;
    background: transparent url(/static/images/sub_bg.png) repeat center center;
    box-shadow: 0 1px 2px #000;
`
export const BrandOverviewButtonBar = styled(BackgroundBar)`
    text-align:center;
@media screen and (min-width:768px) {
    display:none;
}
`
export const ChooseModelBar = styled(BackgroundBar)`
`
export const CarModelsPanel = styled.div`
    text-align:left;
@media screen and (max-width:767px){
    text-align:center;
}
`

export const CarModels = styled.div`
    border: 3px solid #343434;
    border-radius: 10px;
    margin:1em 0.5em 1em 1em;
    padding: 0;
    background: transparent url(/static/images/striped_big_bg.gif) repeat center center;

@media screen and (min-width:768px){
    width:30%;
    float:left;
}

@media screen and (max-width:767px){
    width:94%;
    margin:1em auto;
}
`
export const CarModelsHeader = styled.header`
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    background-color: rgba(0,0,0,0.7);
    padding:1em;
`
export const CarModelsMidHeader = styled.header`
    background-color: rgba(0,0,0,0.7);
    padding:1em;
`
export const CarModelsH = styled.div`
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
export const CarModelsYear = styled(CarModels)`
    margin:1em 0.5em;
`
export const CarModelsYearArrow = styled.img`
    width:10px;
    height:10px;
`
export const CarModelsType = styled(CarModels)`
    margin:1em 1em 1em 0.5em;
`
export const CarModelsHP = styled.span`
    float:right;
    font-style:italic;
`

export const CarModelsH3 = styled.h3`
    font-size: 16px;
    color: #ccc;
    font-weight: normal;
    margin: 1em;
    float:left;
`

export const CarModelsH2 = styled.h2`
    font-size: 18px;
    color: #ccc;
    font-weight: normal;
    margin: 1em;
    float:left;
`
export const CarModelsHeaderImage = styled.img`
    float: right;
    max-width: 80px;
    max-height: 50px;
    margin:5px;
`
export const CarModelsList = styled.ul`
    color:#ccc;
    font-size:1em;
    text-align:left;
    padding:0 1em;
`
export const CarModelsListItem = styled.li `
    position: relative;
    list-style-type: none;
    padding: 0.5em 0.5em 0 0.5em;
    border-bottom: 1px dotted #343434;
    color: ${(props)=>props.new ? 'white' : '#ccc'};
    font-weight: ${(props)=>props.new && 700};
    & > a {
        text-decoration: none;
        color: #ccc;  
    }
    & > a:hover {
        color: white;
    }
    :last-child {
        border-bottom:none;
    }
`
export const LabelNewListItem = styled.label`
    position: absolute;
    right: -45px;
    padding-left: 11px;
    color: #9ec7fe;
    text-shadow: 1px 1px 0px #1a355f;
    border: none;
    background: transparent url(/static/images/label_arrow_new.png) no-repeat left center;
    @media screen and (max-width:767px){
        display: none;
    }
`
export const LabelNew = styled.span`
    
    display: inline-block;
    line-height: 19px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding-right: 5px;
    background: transparent url(/static/images/label_bg_new.png) repeat-x left center;
`
export const LabelDevListItem = styled.label`
    position: absolute;
    right: -107px;
    padding-left: 11px;
    color: #9ec7fe;
    text-shadow: 1px 1px 0px #1a355f;
    border: none;
    background: transparent url(/static/images/label_arrow_development.png) no-repeat left center;
    @media screen and (max-width:767px){
        display: none;
    }
`
export const LabelDev = styled.span`
    
    display: inline-block;
    line-height: 19px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding-right: 5px;
    color: #ccc;
    font-size: 14px;
    background: transparent url(/static/images/label_bg_development.png) repeat-x left center;
`

