import React from 'react';
import Brands from '../Components/Brands';
import {Spacer} from '../Elements/Common';
import {DownloadableItem, Download} from '../Elements/DownloadPanel'
import {getDownloadSoftware} from '../store/action/actions'
import Breadcrum from '../Components/Breadcrum'
import {connect} from 'react-redux'
import {PageLoader} from '../Components/SpinnerLoader'
import {NewsPanel, SubmissionBlock, SubmissionTitle, SubmissionText, SubmissionLinkRM} from '../Elements/NewsPanel';
import {SearchFullForm} from '../Elements/SearchForm';
import {SearchFullInput} from '../Elements/Input';

const DownloadSoftwarePage = ({getDownloadSoftware, download_softwares, history, profile}) => {
    const [pageFlag, setPageFlag] = React.useState(false)
    const [searchVal, setSearchVal] = React.useState("")
    React.useEffect(()=>{
        setPageFlag(true)
        getDownloadSoftware(setPageFlag)
    }, [])
    const handleClick = e => {
        const price = e.target.id
        
        const download_url = e.target.name
        history.push(`/payment?price=${price}&desc=Download Software&download_url=${download_url}`)
    }
    const priceSet = (price) => {
        let priceV = price  
        switch(profile.user_level) {
            case "regular_user":
                priceV = priceV*100/100
                return priceV;
            case "local_shop":
                priceV = priceV*80/100
                return priceV;
            case "subdealer":
                priceV = priceV*50/100
                return priceV;
            default:
                priceV = priceV
                return priceV;
        }
    }
    const handleChange = e => {
        setSearchVal(e.target.value)
    }
    return(
        <NewsPanel>
            <Breadcrum
                items={[
                  { url: "/download-software", text: "Downloadable Softwares" },
                ]}
            />
            <Spacer />
            {
                pageFlag
                ? <PageLoader />
                : <SearchFullForm>
                    <SearchFullInput placeholder="Search..." id="searchinput" onChange={handleChange} />

                </SearchFullForm>
            }
            <Spacer />

            {
                download_softwares && download_softwares.length > 0 && download_softwares.filter(item=>item.name.toLowerCase().includes(searchVal.toLowerCase())).map((item, index)=>(
                    <SubmissionBlock key={index}>
                                <SubmissionTitle>{item.name}</SubmissionTitle>
                                {
                                    item.price
                                    ? <SubmissionText>{priceSet(item.price)}$</SubmissionText>
                                    : <SubmissionText>Free</SubmissionText>
                                }

                                <SubmissionLinkRM id={priceSet(item.price)} name={item.downloadable_file} onClick={handleClick}>Pay for Download</SubmissionLinkRM>
                                {/*<Download>
                                                                    <DownloadableItem id={item.name} href={item.downloadable_file} download>{item.name}</DownloadableItem>
                                                                </Download>*/}
                    </SubmissionBlock>

                    
                ))
            }

            <Spacer />
            <Brands />
        </NewsPanel>

        )
}
const mapStateToProps = (state, ownProps) => ({
  download_softwares: state.blogs.download_softwares,
  history: ownProps.history,
  profile: state.auth.profile,
})
const mapDispatchToProps = dispatch => ({
  getDownloadSoftware: getDownloadSoftware(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(DownloadSoftwarePage)