import styled from 'styled-components';

export const CarsPanel = styled.section`
    background: transparent url(/static/images/textile_texture_bg.gif) repeat center top;
    border-top: 5px solid #366fa5;
    border-bottom: 5px solid #366fa5;
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
export const VehiclesBar = styled(BackgroundBar)`
@media screen and (max-width:767px) {
    display:none;
}
`
export const ChooseBrandBar = styled(BackgroundBar)`
`
export const Vehicles = styled.ul`
    padding:0;
`
export const VehiclesItem = styled.li`
    list-style:none;
    display:inline-block;
    width:24.8%;
`
export const VehiclesType = styled.a`
    color: white;
    font-size: 16px;
    display: inline-block;
    height: 54px;
    vertical-align: middle;
    line-height: 50px;
    text-decoration:none;
    opacity: 0.5;
    transition: opacity 0.2s ease;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    :hover {
        opacity:1;
    }
`
export const VehiclesTypeSel = styled(VehiclesType)`
    opacity:1;
`
export const VehiclesText = styled.span`
    position:relative;
    top:-4px;
    left:4px;
`
export const VehiclesImage = styled.img `
    width:54px;
    height:26px;
}
`
export const CarBrands = styled.div`
`
export const Description1 = styled.div`
    margin:1em;
`
export const Description2 = styled.div`
    margin:1em 2em;
    text-align:justify;
`
export const BrandText = styled.div`
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    color:white;
    background:#151515;
    text-decoration:none !important;
    cursor:default;
    display:none;
`
export const BrandImage = styled.img`
    max-width:80px;
    max-height:50px;
`
export const BrandLink = styled.a `
    display:inline-block;
    text-decoration:none;
    width:7em;
    margin:2em 0;
    text-align:center;
    position:relative;
    cursor:pointer;
    :hover ${BrandText} {
        display:block;
    }
`
export const BrandsList = styled.div`
    text-align:left;
    margin:auto auto auto 3em;
`
export const AvailableStages = styled.ul`
    text-align:left;
    margin: auto 1.5em;
    padding:0;
`
export const AvailableStage = styled.li`
    list-style:none;
    border: 3px solid #343434;
    border-radius: 10px;
    padding: 0;
    margin-bottom: 1em;
    background: transparent url(/static/images/striped_big_bg.gif) repeat center center;
`
export const AvailableStageHeader = styled.header`
    background-color: rgba(0,0,0,0.7);
    padding: 1em 2em;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const AvailableStageH2 = styled.h2`
    font-size: 1.4em;
    color: #ccc;
    font-weight: bold;
    margin: 0;
`
export const AvailableStageH3 = styled.h3`
    font-size: 1.2em;
    color: #ccc;
    font-weight: 100;
    margin: 0;
`
export const AvailableStageContent = styled.p`
    font-weight: normal;
    font-size: 1em;
    line-height: 1.6;
    padding: 1em 2em;
`

