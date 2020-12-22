import React from 'react';
import { StagesPanel, StagesHeader, StagesHeaderSpan, StagesHeaderA, StagesTable,  } from '../Elements/StagesPanel';
import { StagesTableTH, StagesTableEmptyTH, StagesTableNBTH, StagesTableA, StagesTableTD, StagesTableHLTD, StagesTablePriceTD } from '../Elements/StagesPanel';
import {Big} from '../Elements/Common';

function Stages({data}) {
    const [activeRef, setActiveRef] = React.useState("stage1")
    const handleClick = e => {
        setActiveRef(e.target.id)
    }
    const collectOriginVal = (params, flag) => {
            switch(flag) {
                case "stage1":
                    return params.stage1_power_origin
                case "stage2":
                    return params.stage2_power_origin
                case "stage3":
                    return params.stage3_power_origin
                default:
                    break;
            }
    }
    const collectAfterVal = (params, flag) => {
            switch(flag) {
                case "stage1":
                    return params.stage1_power_origin + params.stage1_power_difference
                case "stage2":
                    return params.stage2_power_origin + params.stage2_power_difference
                case "stage3":
                    return params.stage3_power_origin + params.stage3_power_difference
                default:
                    break;
            }
    }
    const collectDiffVal = (params, flag) => {
            switch(flag) {
                case "stage1":
                    return params.stage1_power_difference
                case "stage2":
                    return params.stage2_power_difference
                case "stage3":
                    return params.stage3_power_difference
                default:
                    break;
            }
    }
    const collectOriginValT = (params, flag) => {
            switch(flag) {
                case "eco":
                    return params.eco_torque_origin
                case "stage1":
                    return params.stage1_torque_origin
                case "stage2":
                    return params.stage2_torque_origin
                case "stage3":
                    return params.stage3_torque_origin
                default:
                    break;
            }
    }
    const collectAfterValT = (params, flag) => {
            switch(flag) {
                case "eco":
                    return params.eco_torque_origin + params.eco_torque_difference
                case "stage1":
                    return params.stage1_torque_origin + params.stage1_torque_difference
                case "stage2":
                    return params.stage2_torque_origin + params.stage2_torque_difference
                case "stage3":
                    return params.stage3_torque_origin + params.stage3_torque_difference
                default:
                    break;
            }
    }
    const collectDiffValT = (params, flag) => {
            switch(flag) {
                case "eco":
                    return params.eco_torque_difference
                case "stage1":
                    return params.stage1_torque_difference
                case "stage2":
                    return params.stage2_torque_difference
                case "stage3":
                    return params.stage3_torque_difference
                default:
                    break;
            }
    }
    const collectPriceVal = (params, flag) => {
            switch(flag) {
                case "eco":
                    return params.eco_price
                case "stage1":
                    return params.stage1_price
                case "stage2":
                    return params.stage2_price
                case "stage3":
                    return params.stage3_price
                default:
                    break;
            }
    }
    return(
        <StagesPanel>
            <StagesHeader>
            {
                data && data.eco_torque_origin && (
                    <StagesHeaderSpan status={activeRef==="eco" && "active"} >
                        <StagesHeaderA id="eco" onClick={handleClick}><img src="/static/images/bg_brpeco.png" alt="Eco" id="eco" onClick={handleClick}/></StagesHeaderA>
                    </StagesHeaderSpan>
                    )
            }
            {
                data && data.stage1_power_origin && (
                    <StagesHeaderSpan status={activeRef==="stage1" && "active"}>
                        <StagesHeaderA id="stage1" onClick={handleClick}><img src="/static/images/bg_stage1_sel.png" alt="Stage1" id="stage1" onClick={handleClick} /> &nbsp; Stage 1</StagesHeaderA>
                    </StagesHeaderSpan>
                    )
            }
            {
                data && data.stage2_power_origin && (
                    <StagesHeaderSpan status={activeRef==="stage2" && "active"}>
                        <StagesHeaderA id="stage2" onClick={handleClick}><img src="/static/images/bg_stage1_sel.png" alt="Stage1" id="stage2" onClick={handleClick} /> &nbsp; Stage 2</StagesHeaderA>
                    </StagesHeaderSpan>
                    )
            }
            {
                data && data.stage3_power_origin && (
                    <StagesHeaderSpan status={activeRef==="stage3" && "active"}>
                        <StagesHeaderA id="stage3" onClick={handleClick}><img src="/static/images/bg_stage1_sel.png" alt="Stage1" id="stage3" onClick={handleClick} /> &nbsp; Stage 3</StagesHeaderA>
                    </StagesHeaderSpan>
                    )
            }
                
                
                
            </StagesHeader>
            <StagesTable>
                <tbody>
                    <tr>
                        <StagesTableEmptyTH as="th">
                            <StagesTableA href="#">more info</StagesTableA>
                        </StagesTableEmptyTH>
                        <StagesTableTH as="th">Original</StagesTableTH>
                        <StagesTableTH as="th">After Tuning</StagesTableTH>
                        <StagesTableTH as="th">Difference</StagesTableTH>
                    </tr>
                    {
                        activeRef !== "eco" && (
                    <tr>
                        <StagesTableTH>Power</StagesTableTH>
                        <StagesTableTD>
                        {collectOriginVal(data, activeRef)} hp
                        </StagesTableTD>
                        <StagesTableHLTD>
                            {collectAfterVal(data, activeRef)} hp
                        </StagesTableHLTD>
                        <StagesTableHLTD>
                             + {collectDiffVal(data, activeRef)} hp
                        </StagesTableHLTD>
                    </tr>
                            )
                    }
                    
                    <tr>
                        <StagesTableTH>Torque</StagesTableTH>
                        <StagesTableTD>
                            {collectOriginValT(data, activeRef)} Nm
                        </StagesTableTD>
                        <StagesTableHLTD>
                            {collectAfterValT(data, activeRef)} Nm
                        </StagesTableHLTD>
                        <StagesTableHLTD>
                            + {collectDiffValT(data, activeRef)} Nm
                        </StagesTableHLTD>
                    </tr>
                    {
                        activeRef === "eco" && (
                    <tr>
                        <StagesTableNBTH colSpan="3">
                            <StagesTableA style={{color: 'green', fontWeight: 500, fontSize: '1rem'}}>Estimated fuel reduction</StagesTableA>
                        </StagesTableNBTH>
                        <StagesTableHLTD>
                        +/- {data.eco_estimated_fuel_reduction} %
                        </StagesTableHLTD>
                    </tr>
                            )
                    }
                    {/*<tr>
                                            <StagesTableNBTH colSpan="3">
                                                <Big>Price VAT included</Big>
                                                <StagesTableA href="#">Payment Options</StagesTableA>
                                            </StagesTableNBTH>
                                            <StagesTablePriceTD>
                                            € 
                                            </StagesTablePriceTD>
                                        </tr>*/}
                    {/*<tr>
                                            <StagesTableTD colSpan="4">
                                                <StagesTableSpan>Have any questions regarding this stage?</StagesTableSpan>
                                                <MailButton readOnly value="Contact us for more info" />
                                            </StagesTableTD>
                                        </tr>*/}
                </tbody>

            </StagesTable>
        </StagesPanel>
    )
}
export default Stages;
// {collectPriceVal(data, activeRef)}