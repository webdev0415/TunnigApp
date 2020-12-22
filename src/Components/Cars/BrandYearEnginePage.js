import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../../Elements/Common';
import {CarsPanel} from '../../Elements/CarsPanel';
import {ModelBanner, ModelBannerImage, ModelBannerText} from '../../Elements/Cars/CarModel';
import {ChooseModelBar, BrandOverviewButtonBar} from '../../Elements/Cars/CarModel';
import {BrandOverviewButton, BrandOverviewButtonMob} from '../../Elements/Submit';
import {CarModelsPanel, CarModels, CarModelsHeader, CarModelsH, CarModelsH2, CarModelsH3, CarModelsList, CarModelsListItem, LabelNew, LabelNewListItem, LabelDevListItem, LabelDev} from '../../Elements/Cars/CarModel';
import {CarModelsYear, CarModelsType, CarModelsHP, CarModelsMidHeader} from '../../Elements/Cars/CarModel';
import Brands from '../../Components/Brands';
import {connect} from 'react-redux'
import Breadcrum from '../Breadcrum'
import {useTranslation} from 'react-i18next';

function BrandYearEnginePage({brand_id, model_id, year, brands, models, engines}) {
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
    let engine_type_arr = new Set()
    if (engines && engines.length > 0) {
        // engine_data = engines.filter(item=> item.model.brand.id === brand_id && item.model.id === model_id && item.year_name === year)
        engine_data = engines.filter(item=> item.model.brand.id === brand_id && item.model.id === model_id)
        engine_data.forEach(item=>year_name_arr.add(item.year_name))
        engine_data.filter(item=>item.year_name === year).forEach(item=>engine_type_arr.add(item.engine_type))
    }
    let year_names = []
    let engine_type_names = []
    year_name_arr.forEach(item=>year_names.push(item))
    engine_type_arr.forEach(item=>engine_type_names.push(item))
    const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    ;
    const brand_text = capitalize(brand.brand_name)
    const model_text = capitalize(model_data.filter(item=>item.id === model_id)[0].model_name)
    const model_image = model_data.filter(item=>item.id === model_id)[0].model_image
    engine_type_names = engine_type_names.filter(item=>item !== 'gas')

    return(
        <CarsPanel>
            <ModelBanner>
                <ModelBannerImage image_name={model_image} />
                <ModelBannerText>{brand_text} {model_text} {year}</ModelBannerText>
            </ModelBanner>
            <Breadcrum
                items={[
                  { url: "/chiptuning", text: "ChipTuning" },
                  { url: `/chiptuning/${brand_id}`, text: brand_text },
                  { url: `/chiptuning/${brand_id}/${model_id}`, text: model_text },
                  { url: `/chiptuning/${brand_id}/${model_id}/${year}`, text: year },
                ]}
            />
            
            <BrandOverviewButtonBar><BrandOverviewButtonMob readOnly value={t("brand_overview")}/></BrandOverviewButtonBar>
            <ChooseModelBar><Link to="/chiptuning"><BrandOverviewButton readOnly value={t("brand_overview")} /></Link>{t("engine_select")}</ChooseModelBar>
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
                        <Spacer />
                    </CarModelsHeader>
                    <CarModelsList>
                    {
                        year_names && year_names.length > 0 && year_names.map((item, index)=><CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${item}`}>{item}</Link></CarModelsListItem>
                        )
                    }
                    </CarModelsList>
            </CarModelsYear>
                <CarModelsType>
                    <CarModelsHeader>
                        <CarModelsH>
                            <CarModelsH2>{year}</CarModelsH2>
                            <CarModelsH3>Gasoline</CarModelsH3>
                        </CarModelsH>
                        
                        <Spacer />
                    </CarModelsHeader>
                    <CarModelsList>
                    {
                        engine_data && engine_data
                        .filter(item=>item.year_name === year && item.engine_type === 'gas')
                        .map((item, index)=>
                            item.engine_status === "new"
                            ? <CarModelsListItem key={index} new={true}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP><LabelNewListItem><LabelNew>New</LabelNew></LabelNewListItem></CarModelsListItem>
                            : item.engine_status === "indev"
                            ? <CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP><LabelDevListItem><LabelDev>In Development</LabelDev></LabelDevListItem></CarModelsListItem>
                            : <CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP></CarModelsListItem>
                        )
                    }
                    </CarModelsList>
                    {
                        engine_type_names && engine_type_names.length > 0 && engine_type_names.map((list, index)=>
                            <>
                            <CarModelsMidHeader>
                                <CarModelsH>
                                    <CarModelsH2>{year}</CarModelsH2>
                                    <CarModelsH3>{capitalize(list)}</CarModelsH3>
                                </CarModelsH>
                                <Spacer />
                            </CarModelsMidHeader>
                            <CarModelsList>
                                {
                                    engine_data && engine_data
                                    .filter(item=>item.year_name === year && item.engine_type === list)
                                    .map((item, index)=>
                                        item.engine_status === "new"
                                        ? <CarModelsListItem key={index} new={true}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP><LabelNewListItem><LabelNew>New</LabelNew></LabelNewListItem></CarModelsListItem>
                                        : item.engine_status === "indev"
                                        ? <CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP><LabelDevListItem><LabelDev>Development</LabelDev></LabelDevListItem></CarModelsListItem>
                                        : <CarModelsListItem key={index}><Link to={`/chiptuning/${brand_id}/${model_id}/${year}/${item.id}`}>{item.engine_name}</Link><CarModelsHP>{item.stage1_power_origin}hp</CarModelsHP></CarModelsListItem>
                                    )
                                }
                            </CarModelsList>
                            </>
                            )
                    }
                    
                </CarModelsType>
            </CarModelsPanel>
            <Spacer />

            <Brands />
        </CarsPanel>
    );
}
const mapStateToProps = (state, ownProps) => ({
  brand_id: ownProps.match.params.brand_id,
  model_id: ownProps.match.params.model_id,
  year: ownProps.match.params.year,
  brands: state.carContents.brands,
  models: state.carContents.models,
  engines: state.carContents.engines,
})
// const mapDispatchToProps = dispatch => ({
//   getModelData: () => dispatch(getModelData()),
// })
export default connect(mapStateToProps, null)(BrandYearEnginePage)
