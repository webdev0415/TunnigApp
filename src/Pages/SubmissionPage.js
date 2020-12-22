import React from 'react';
import {Spacer} from '../Elements/Common';
import {NewsPanel, SubmissionBlock, SubmissionTitle, SubmissionText, SubmissionLinkRM} from '../Elements/NewsPanel';
import Breadcrum from '../Components/Breadcrum'
import {getSubmissionData} from '../store/action/actions'
import {connect} from 'react-redux'
import {PageLoader} from '../Components/SpinnerLoader'
import {Link} from 'react-router-dom'
import {BrandOverviewButton} from '../Elements/Submit';
import {useTranslation} from 'react-i18next';
import Brands from '../Components/Brands';


function SubmissionPage({getSubmissionData, submissions, user}) {
    const [pageFlag, setPageFlag] = React.useState(false)
    const {t} = useTranslation(["submission"]);
    React.useEffect(()=>{
        setPageFlag(true)
        getSubmissionData(setPageFlag)
        
     }, [])
    
    return(
        <NewsPanel>
            <Breadcrum
                items={[
                  { url: "/submission", text: "Submissions" },
                ]}
            />
            <Link to="/new-submission"><BrandOverviewButton readOnly value={t("new_submission")} /></Link>
            <Spacer />
            {
                pageFlag
                ? <PageLoader />
                : <span></span>
            }
            {
                submissions && submissions.length > 0 && submissions.map((item,index)=>(

                    <Link to={`/submission/${item.id}`} key={index}><SubmissionBlock>
                                <SubmissionTitle>{item.car_vin_number} {item.car_brand} {item.car_model} {item.car_build}</SubmissionTitle>
                                
                                {
                                    item.user_message
                                    ? <SubmissionText>{item.user_message}</SubmissionText>
                                    : <SubmissionText>No Message</SubmissionText>
                                }
                                <SubmissionLinkRM>read detail</SubmissionLinkRM> 
                    </SubmissionBlock></Link>
                                ))    

            }
            <Spacer />
            <Spacer space="2em"/>
            <Brands/>
        </NewsPanel>
  )
}
const mapStateToProps = state => ({
  submissions: state.blogs.submissions,
})
const mapDispatchToProps = dispatch => ({
  getSubmissionData: getSubmissionData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SubmissionPage)
