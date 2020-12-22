import React from 'react';
import {ChipTuningPanel, ChipTuningHeader, ChipTuningH1, ChipTuningH2, ChipTuningH3, ChipTuningH4, ChipTuningH5, ChipTuningH6, ChipTuningH11} from '../Elements/ChipTuningPanel';
import {BackButton} from '../Elements/Submit';
import {Spacer} from '../Elements/Common';
import Stages from '../Components/Stages';
// import PowerGraph from '../Components/PowerGraph';
// import Testimonials from '../Components/Testimonials';
// import OurQuality from '../Components/OurQuality';
import Disclaimer from '../Components/Disclaimer';
import Brands from '../Components/Brands';

function ChipTuning() {
    return(
        <ChipTuningPanel>
            <ChipTuningHeader>
                <ChipTuningH1 as="h1">ChipTuning</ChipTuningH1>
                <ChipTuningH2 as="h2">Cars</ChipTuningH2>
                <ChipTuningH3 as="h3">Alpina</ChipTuningH3>
                <ChipTuningH4 as="h4">B3 S</ChipTuningH4>
                <ChipTuningH5 as="h5">All</ChipTuningH5>
                <ChipTuningH6 as="h6">3.5i</ChipTuningH6>
                <ChipTuningH11 as="h6">3.5i</ChipTuningH11>
                <BackButton type="button" value="Edit Selection"></BackButton>
                <Spacer />
            </ChipTuningHeader>
            <Stages />
            
            <Spacer />
            
            <Spacer />
            <Disclaimer />
            <Brands />
        </ChipTuningPanel>
    );
}
export default ChipTuning;
// <PowerGraph />
// <Testimonials />
// <OurQuality />