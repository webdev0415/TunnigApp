import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../../Elements/Common';
import {CarsPanel} from '../../Elements/CarsPanel';
import {ModelBanner, ModelBannerImage, ModelBannerText} from '../../Elements/Cars/CarModel';
import {ChooseModelBar, BrandOverviewButtonBar} from '../../Elements/Cars/CarModel';
import {BrandOverviewButton, BrandOverviewButtonMob} from '../../Elements/Submit';
import {CarModelsPanel, CarModels, CarModelsHeader, CarModelsH2, CarModelsList, CarModelsListItem} from '../../Elements/Cars/CarModel';
import Brands from '../../Components/Brands';
import {connect} from 'react-redux'
import Breadcrum from '../Breadcrum'
import {getEngineData, getModelData} from '../../store/action/actions'
import {PageLoader} from '../SpinnerLoader'
import {useTranslation} from 'react-i18next';


function BrandPage({models, brands, brand_id, getEngineData, getModelData}) {
    const [pageFlag, setPageFlag] = React.useState(false)
    React.useEffect(()=>{
        setPageFlag(true)
        getModelData(brand_id, setPageFlag)
        setPageFlag(true)
      },[brand_id])
    const {t} = useTranslation(["submission"]);
    let brand
    if (brands && brands.length > 0) {
        brand = brands.filter(item=> item.id===brand_id)[0]
    }
    let data
    if (models && models.length > 0) {
        data = models.filter(item=>item.brand.id === brand_id)
    }
    const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    let text
    if (brand) {
        text = capitalize(brand.brand_name)
    }

    return(
        <CarsPanel>
            <ModelBanner>
                <ModelBannerImage image_name={brand && brand.banner_image} />
                <ModelBannerText>{text}</ModelBannerText>
            </ModelBanner>
            <Breadcrum
                items={[
                  { url: "/chiptuning", text: "ChipTuning" },
                  { url: `/chiptuning/${brand_id}`, text: text },
                ]}
            />
            
            <BrandOverviewButtonBar><BrandOverviewButtonMob readOnly value={t("brand_overview")} /></BrandOverviewButtonBar>
            <ChooseModelBar><Link to="/chiptuning"><BrandOverviewButton readOnly value={t("brand_overview")} /></Link>{t("model_select")}</ChooseModelBar>
            <Spacer />

            <CarModelsPanel>
            <CarModels>
                <CarModelsHeader>
                    <CarModelsH2>{text}</CarModelsH2>
                    {
                        pageFlag ? <PageLoader paddingTop={8} /> : <span></span>
                    }
                    <Spacer />
                </CarModelsHeader>
                <CarModelsList>

                    {
                        data && data.length > 0 && data.map((item, index)=> (
                            <CarModelsListItem><Link to={`/chiptuning/${brand_id}/${item.id}`} key={index}>
                                {capitalize(item.model_name)}
                            </Link></CarModelsListItem>
                            ))
                    }
                </CarModelsList>
            </CarModels>

            </CarModelsPanel>
            <Spacer />

            <Brands />
        </CarsPanel>
    );
}
const mapStateToProps = (state, ownProps) => ({
  brand_id: ownProps.match.params.brand_id,
  brands: state.carContents.brands,
  models: state.carContents.models,
})
const mapDispatchToProps = dispatch => ({
  getEngineData: getEngineData(dispatch),
  getModelData: getModelData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(BrandPage)
