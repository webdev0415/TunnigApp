import React from 'react';
import {Spacer} from '../Elements/Common';
import {NewsPanel, NewsDate, NewsBlock, NewsBlockRt, NewsPane, NewsImage, NewsLabel, NewsTitle, NewsText} from '../Elements/NewsPanel';
import Breadcrum from '../Components/Breadcrum'
import {getPostData} from '../store/action/actions'
import {connect} from 'react-redux'
import {PageLoader} from '../Components/SpinnerLoader'
import {Link} from 'react-router-dom'

function NewsPage({getPostData, posts}) {
    const [pageFlag, setPageFlag] = React.useState(false)
    React.useEffect(()=>{
        setPageFlag(true)
        getPostData(setPageFlag)
        
     }, [])
    
    let dateArr = new Set()
    if (posts && posts.length > 0) {
        posts.forEach(item=>{
            const publish_date = new Date(item.published)
            dateArr.add(publish_date.toDateString().slice(4,7) + publish_date.toDateString().slice(10))
        })
    }
    let dArr = []
    dateArr.forEach(item=>{
        dArr.push(item)
    })
    return(
        <NewsPanel>
            <Breadcrum
                items={[
                  { url: "/news", text: "News" },
                ]}
            />
            <Spacer />
            {
                pageFlag
                ? <PageLoader />
                : <span></span>
            }
            {
                dArr && dArr.length > 0 && dArr.map((item,index)=>(
                    <>
                    <NewsDate>{item}</NewsDate>
                    {
                        posts && posts
                        .filter(kk=>{
                            const p_date = new Date(kk.published)
                            return p_date.toDateString().slice(11) === item.slice(4)
                        })
                        .filter(kk=>{
                            const p_date = new Date(kk.published)
                            return p_date.toDateString().slice(4,7) === item.slice(0,3)
                        })
                        .map((item,index)=>{
                            if(index % 2 === 0) {
                                return (
                                    <Link to={`/news/${item.id}`} key={index}><NewsBlock>
                                        <NewsPane>
                                            <NewsImage src={item.display_image} alt={item.title} />
                                            <NewsLabel>
                                                <NewsTitle>{item.title} written by {item.author}</NewsTitle>
                                            </NewsLabel>
                                        </NewsPane>
                                    </NewsBlock></Link>
                                )    
                            }else {
                                return (
                                    <Link to={`/news/${item.id}`} key={index}><NewsBlockRt>
                                        <NewsPane>
                                            <NewsImage src={item.display_image} alt={item.title} />
                                            <NewsLabel>
                                                <NewsTitle>{item.title} written by {item.author}</NewsTitle>
                                            </NewsLabel>
                                        </NewsPane>
                                    </NewsBlockRt></Link>
                                )
                            }
                        })
                    }
                    <Spacer />
                    </>
                    ))
            }

            <Spacer />
        </NewsPanel>
  )
}
const mapStateToProps = state => ({
  posts: state.blogs.posts
})
const mapDispatchToProps = dispatch => ({
  getPostData: getPostData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
