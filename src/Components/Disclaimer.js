import React from 'react';
import {DisclaimerPanel} from '../Elements/DisclaimerPanel';
import {Anchor} from '../Elements/Common'

function Disclaimer() {
    return(
        <DisclaimerPanel>
            Our <Anchor href="#">general sales and conditions</Anchor> apply on all our deliveries and services.
        </DisclaimerPanel>
    );
}
export default Disclaimer;