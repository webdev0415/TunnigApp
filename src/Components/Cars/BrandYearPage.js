import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../../Elements/Common';
import {CarsPanel} from '../../Elements/CarsPanel';
import {ModelBanner, ModelBannerImage, ModelBannerText} from '../../Elements/Cars/CarModel';
import {ChooseModelBar, BrandOverviewButtonBar} from '../../Elements/Cars/CarModel';
import {BrandOverviewButton, BrandOverviewButtonMob} from '../../Elements/Submit';
import {CarModelsPanel, CarModels, CarModelsHeader, CarModelsH2, CarModelsList, CarModelsListItem} from '../../Elements/Cars/CarModel';
import {CarModelsYear} from '../../Elements/Cars/CarModel';
import Brands from '../../Components/Brands';
import {connect} from 'react-redux'
import Breadcrum from '../Breadcrum'
import {getEngineData} from '../../store/action/actions'
import {useTranslation} from 'react-i18next';
import {PageLoader} from '../SpinnerLoader'


function BrandYearPage({models, brands, brand_id, model_id, engines, getEngineData}) {
    const [pageFlag, setPageFlag] = React.useState(false)
    React.useEffect(()=>{
        setPageFlag(true)
        getEngineData(model_id, setPageFlag)
      },[model_id])
    const {t} = useTranslation(["submission"]);
    let brand
    if (brands && brands.length > 0) {
        brand = brands.filter(item=> item.id===brand_id)[0]
    }
    let model_data
    if (models && models.length > 0) {
        model_data = models.filter(item=>item.brand.id === brand_id)
    }
    let engine_data
    let year_name_arr = new Set()
    if (engines && engines.length > 0) {
        engine_data = engines.filter(item=> item.model.brand.id === brand_id && item.model.id === model_id)
        engine_data.forEach(item=>year_name_arr.add(item.year_name))
    }
    let year_names = []
    year_name_arr.forEach(item=>year_names.push(item))
    const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    const brand_text = capitalize(brand.brand_name)
    const model_text = capitalize(model_data.filter(item=>item.id === model_id)[0].model_name)
    const model_image = model_data.filter(item=>item.id === model_id)[0].model_image
    return(
        <CarsPanel>
            <ModelBanner>
                <ModelBannerImage image_name={model_image} />
                <ModelBannerText>{brand_text} {model_text}</ModelBannerText>
            </ModelBanner>
            <Breadcrum
                items={[
                  { url: "/chiptuning", text: "ChipTuning" },
                  { url: `/chiptuning/${brand_id}`, text: brand_text },
                  { url: `/chiptuning/${brand_id}/${model_id}`, text: model_text },
                ]}
            />
            
            <BrandOverviewButtonBar><BrandOverviewButtonMob readOnly value={t("brand_overview")} /></BrandOverviewButtonBar>
            <ChooseModelBar><Link to="/chiptuning"><BrandOverviewButton readOnly value={t("brand_overview")} /></Link> {t("year_select")}</ChooseModelBar>
            <Spacer />

            <CarModelsPanel>
            <CarModels>
                <CarModelsHeader>
                    <CarModelsH2>{brand_text}</CarModelsH2>
                    
                    <Spacer />
                </CarModelsHeader>
                <CarModelsList>
                    {
                        model_data && model_data.length > 0 && model_data.map((item, index)=> (
                            <CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${item.id}`}>
                                {item.model_name}
                            </Link></CarModelsListItem>
                            ))
                    }
                    
                </CarModelsList>
            </CarModels>
            <CarModelsYear>
                    <CarModelsHeader>
                        <CarModelsH2>{model_text}</CarModelsH2>
                        {
                        pageFlag ? <PageLoader paddingTop={8} /> : <span></span>
                        }
                        <Spacer />
                    </CarModelsHeader>
                    <CarModelsList>
                    {
                        year_names && year_names.length > 0 && year_names.map((item, index)=><CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${item}`}>{item}</Link></CarModelsListItem>
                        )
                    }
                    </CarModelsList>
            </CarModelsYear>

            </CarModelsPanel>
            <Spacer />

            <Brands />
        </CarsPanel>
    );
}
const mapStateToProps = (state, ownProps) => ({
  brand_id: ownProps.match.params.brand_id,
  model_id: ownProps.match.params.model_id,
  brands: state.carContents.brands,
  models: state.carContents.models,
  engines: state.carContents.engines,
})
const mapDispatchToProps = dispatch => ({
  getEngineData: getEngineData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(BrandYearPage)
