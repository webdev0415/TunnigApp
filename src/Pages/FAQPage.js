import React from 'react';
import $ from 'jquery';
import Brands from '../Components/Brands';
import {Spacer} from '../Elements/Common';
import {FAQPanel, FAQ, FAQQuestion, FAQAnswer} from '../Elements/FAQPanel'
import {getFAQData} from '../store/action/actions'
import Breadcrum from '../Components/Breadcrum'
import {connect} from 'react-redux'
import {PageLoader} from '../Components/SpinnerLoader'

const FAQPage = ({getFAQData, faq}) => {
    const [pageFlag, setPageFlag] = React.useState(false)
    React.useEffect(()=>{
        setPageFlag(true)
        getFAQData(setPageFlag)
    }, [])

    const handleClick = e => {
        $(`#answer${e.target.id}`).slideToggle();
    }
    return(
        <FAQPanel>
            <Breadcrum
                items={[
                  { url: "/faq", text: "FAQ" },
                ]}
            />
            {
                    pageFlag 
                    ? <PageLoader />
                    : <span></span>
            }
            {
                faq && faq.length > 0 && faq.map((item, index)=>(
                    <FAQ key={index}>
                        <FAQQuestion id={index} onClick={handleClick}>{item.question}</FAQQuestion>
                        <FAQAnswer id={`answer${index}`}>{item.answer}</FAQAnswer>
                    </FAQ>
                ))
            }
            
            
            <Spacer space="2em"/>
            <Brands/>
        </FAQPanel>
        )
}
const mapStateToProps = state => ({
  faq: state.blogs.faq,
})
const mapDispatchToProps = dispatch => ({
  getFAQData: getFAQData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(FAQPage)
