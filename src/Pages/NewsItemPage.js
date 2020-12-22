import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../Elements/Common';
import Brands from '../Components/Brands';
import {BackToOverviewButton} from '../Elements/Submit';
import {NewsItemPanel, NewsItemTimestamp} from '../Elements/NewsPanel'
import Breadcrum from '../Components/Breadcrum'
import {connect} from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import {NewsView} from '../Elements/Submission'

function NewsItemPage({news_id, posts}) {
	let data, publish_date
	if (posts && posts.length > 0) {
		data = posts.filter(item=>item.id===news_id)[0]
		const date = new Date(data.published)
		publish_date = date.toDateString()
	}
	const capitalize = (str, lower = false) =>
      (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    let text
    if (data) {
        text = capitalize(data.title)
    }
return (
    <NewsItemPanel>
        <Breadcrum
                items={[
                  { url: "/news", text: "News" },
                  { url: `/news/${news_id}`, text: text },
                ]}
        />
        <NewsItemTimestamp>{publish_date}</NewsItemTimestamp>
        <Spacer />
        <NewsView>
            {data && ReactHtmlParser(data.content)}
        </NewsView>
        <Link to="/news"><BackToOverviewButton value="BACK TO OVERVIEW" readOnly="true" /></Link>
        <Spacer />
        <Brands />
    </NewsItemPanel>
)
}
const mapStateToProps = (state, ownProps) => ({
  news_id: ownProps.match.params.news_id,
  posts: state.blogs.posts
})

export default connect(mapStateToProps, null)(NewsItemPage)

