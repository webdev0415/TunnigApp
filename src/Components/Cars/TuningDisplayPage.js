import React from 'react';
import {Spacer} from '../../Elements/Common';
import {CarsPanel} from '../../Elements/CarsPanel';
import {ModelBanner, ModelBannerImage, ModelBannerText} from '../../Elements/Cars/CarModel';
import Brands from '../Brands';
import {connect} from 'react-redux'
import Breadcrum from '../Breadcrum'
import Stages from '../Stages';
import Disclaimer from '../Disclaimer';
import PowerGraph from '../PowerGraph'


const TuningDisplayPage = ({brand_id, model_id, year, engine_id, brands, models, engines}) => {
	let cur_brand
    if (brands && brands.length > 0) {
        cur_brand = brands.filter(item=> item.id===brand_id)[0]
    }
    let cur_model
    if (models && models.length > 0) {
        cur_model = models.filter(item=>item.brand.id === brand_id && item.id === model_id)[0]
    }
    let cur_engine
    if (engines && engines.length > 0) {
        // engine_data = engines.filter(item=> item.model.brand.id === brand_id && item.model.id === model_id && item.year_name === year)
        cur_engine = engines.filter(item=> item.model.brand.id === brand_id && item.model.id === model_id && item.id === engine_id)[0]
    }
    const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    ;
    const brand_text = capitalize(cur_brand.brand_name)
    const model_text = capitalize(cur_model.model_name)
    const engine_text = capitalize(cur_engine.engine_name)
    const model_image = cur_model.model_image

    return (
    	<CarsPanel>
            <ModelBanner>
                <ModelBannerImage image_name={model_image} />
                <ModelBannerText>{brand_text} {model_text} {year} {engine_text}</ModelBannerText>
            </ModelBanner>
            <Breadcrum
                items={[
                  { url: "/chiptuning", text: "ChipTuning" },
                  { url: `/chiptuning/${brand_id}`, text: brand_text },
                  { url: `/chiptuning/${brand_id}/${model_id}`, text: model_text },
                  { url: `/chiptuning/${brand_id}/${model_id}/${year}`, text: year },
                  { url: `/chiptuning/${brand_id}/${model_id}/${year}/${engine_id}`, text: engine_text },
                ]}
            />
            
            
            <Spacer />
            <Stages data={cur_engine} />
            <PowerGraph imgsrc={cur_engine.power_graph} />
            <Spacer />
            <Disclaimer />
            <Brands />
        </CarsPanel>
    	)

}

const mapStateToProps = (state, ownProps) => ({
  brand_id: ownProps.match.params.brand_id,
  model_id: ownProps.match.params.model_id,
  year: ownProps.match.params.year,
  engine_id: ownProps.match.params.engine_id,
  brands: state.carContents.brands,
  models: state.carContents.models,
  engines: state.carContents.engines,
})
// const mapDispatchToProps = dispatch => ({
//   getModelData: () => dispatch(getModelData()),
// })
export default connect(mapStateToProps, null)(TuningDisplayPage)
