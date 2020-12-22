import React from 'react';
import {OurQualityPanel, OurQualityHeader, OurQualityHeaderSpan, OurQualityHeaderSpanImage} from '../Elements/OurQualityPanel';
import {OurQualityContent, OurQualityList, OurQualityListItem, OurQualityListItemEcoLabel} from '../Elements/OurQualityPanel';

function OurQuality() {
    return(
        <OurQualityPanel>
            <OurQualityHeader>                
                <OurQualityHeaderSpan>
                    <OurQualityHeaderSpanImage src="/static/images/icon_services.png" alt="Our Quality" /> Our Quality
                </OurQualityHeaderSpan>
            </OurQualityHeader>
            <OurQualityContent>
                <OurQualityList>
                    <OurQualityListItem>Multiple measurements on our dyno</OurQualityListItem>
                    <OurQualityListItem>Individual remap on our dyno</OurQualityListItem>
                    <OurQualityListItem>5 year warranty</OurQualityListItem>
                    <OurQualityListItem>2 weeks not satisfied = money back *</OurQualityListItem>
                    <OurQualityListItem>Test drive with dialog analysis</OurQualityListItem>
                    <OurQualityListItemEcoLabel>Emission standards are maintained</OurQualityListItemEcoLabel>
                </OurQualityList>
            </OurQualityContent>
        </OurQualityPanel>
    );
}
export default OurQuality;