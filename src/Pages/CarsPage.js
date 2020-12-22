import React from 'react';
import {CarsPanel} from '../Elements/CarsPanel';
import {ChooseBrandBar} from '../Elements/CarsPanel';
import {CarBrands, Description1, Description2} from '../Elements/CarsPanel';
import {AvailableStages} from '../Elements/CarsPanel';
import StageItem from '../Components/StageItem'
import Brands from '../Components/Brands';
import Breadcrum from '../Components/Breadcrum'
import {getBrandData} from "../store/action/actions"
import {connect} from 'react-redux'
import {Col, Select, Label} from '../Elements/Submission'
import {useTranslation} from 'react-i18next';
import {OptionLoader} from "../Components/SpinnerLoader"

function CarsPage({brands, getBrandData, history}) {
    const [optionFlag, setOptionFlag] = React.useState(false)
    React.useEffect(()=>{
        setOptionFlag(true)
        getBrandData(setOptionFlag)
      },[])
    const {t} = useTranslation(["submission"]);

    const handleChange = e => {
      console.log("-----", e.target.value)
      history.push(e.target.value)
    }
    return(
        <CarsPanel>
            <Breadcrum
                items={[
                  { url: "/chiptuning", text: "ChipTuning" },
                ]}
            />

            <ChooseBrandBar>{t("brand_select")}</ChooseBrandBar>

            <CarBrands>
                <Description1>BR-Performance has no particular commercial relationship with these brands, therefore logos are for information only.</Description1>
                <Col>
                      <Label>{t("brand_select")} {optionFlag && (<OptionLoader />)}</Label>
                      <Select id="brand_name" onChange={handleChange}>
                      <option></option>
                      {
                          brands && brands.length > 0 && brands.map((item, index)=>(
                          <option key={index} id={`/chiptuning/${item.id}`} value={`/chiptuning/${item.id}`}>{item.brand_name}</option>
                          ))
                      }
                        
                        
                      </Select>
                </Col>
                
                <Description2>To serve you better we have split up the possible upgrades into different stages, check out which stages are available for your car. Below is a brief description of what the stages generally include:</Description2>
            </CarBrands>
            <AvailableStages>
                <StageItem 
                    src="/static/images/bg_stage1_sel.png" 
                    title="Stage 1"
                    subtitle="Reprogrammation" 
                    text="Stage 1 consists of an individual reprogramming of the engine management system of the vehicle, whereby the adjustment of the engine parameters (ignition, injection, ...) is customly done on the dyno. All values of the motor parameters at this stage remain within the safety standards prescribed by the manufacturer. This stage 1 is 100% reliable, in short, more driving pleasure without worries!" />
                <StageItem 
                    src="/static/images/bg_stage2_sel.png" 
                    title="Stage 2"
                    subtitle="Reprogrammation and optimization intake and exhaust" 
                    text="For those who want a little more than stage 1, we have a stage 2 which consists of optimising a number of elements around the engine to increase the efficiency of the engine. Primarily this is about intake and exhaust. A lot of air-intake systems are very restrictive because of their anti-resonant structure which is intended to damp the intake noise of the engine. By mounting a sports air filter or custom air intake, more airflow to the engine is allowed and we get a nice power gain. As we reach the safety standards of the manufacturer at stage 2, sometimes parts must be strengthened e.g. clutch. Each stage is indicated which parts are replaced." />
                <StageItem 
                    src="/static/images/bg_stage3_sel.png" 
                    title="Stage 3"
                    subtitle="New motor parts" 
                    text="At stage 3 we go a step further, we are going to replace the internal or vital parts of the engine or turbocharger, this can go from increasing the cylinder capacity, placing sport camshafts, to the installation of a larger turbocharger. Sometimes there are some inherent risks to reliability, but not always. Manufacturers often build 1 basic engine block and by using a larger turbo and injectors they can build 2 capital versions. It goes without saying that in some cases you can boost your engine with original parts of the heavier version, without affecting the reliability because the manufacturer already had been anticipated." />
                <StageItem 
                    src="/static/images/bg_brpeco_sel.png" 
                    title=""
                    subtitle="" 
                    text="ECO tuning is an individual reprogramming of the vehicle's motor management system. The settings of the motor parameters (ignition, injection ...) is tailor-made on the dyno. All values that are programmed and adapted have one goal: reducing the fuel consumption!" />
                
            </AvailableStages>            
            <Brands />
        </CarsPanel>
    );
}
const mapStateToProps = (state, ownProps) => ({
  brands: state.carContents.brands,
  history: ownProps.history,
})
const mapDispatchToProps = dispatch => ({
  getBrandData: getBrandData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(CarsPage)
