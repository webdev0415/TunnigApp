import React from 'react';
import {Link} from 'react-router-dom';
import {Spacer} from '../Elements/Common';
import Brands from '../Components/Brands';
import {SearchPanel, SearchHeader, SearchHeaderH1, SearchHeaderH2, SearchResults, SearchResultsHeader, SearchResultsH2, SearchResultsList, SearchResultsListItem} from '../Elements/SearchPanel';
import {getBrandData} from '../store/action/actions';
import {connect} from 'react-redux'
import queryString from "query-string";

function SearchPage({location, getBrandData, brands}) {
const query = queryString.parse(location.search);
const {val} = query

return(
    <SearchPanel>
        <SearchHeader>
            <SearchHeaderH1 as="h1">Search Results</SearchHeaderH1>
            <SearchHeaderH2 as="h2">{val}</SearchHeaderH2>
            <Spacer />
        </SearchHeader>
        <SearchResults>
            <SearchResultsHeader>
                <SearchResultsH2>{val}</SearchResultsH2>
                <Spacer />
            </SearchResultsHeader>
            <SearchResultsList>
            {
                val && brands && brands.filter(item=>item.brand_name.toLowerCase().includes(val.toLowerCase())).map((item,index)=>(
                    <SearchResultsListItem key={index}><Link to={`/chiptuning/${item.id}`}>{item.brand_name}</Link></SearchResultsListItem>                ))
            }   
            </SearchResultsList>
        </SearchResults>
        <Spacer />
             
        <Spacer />
        <Brands />
    </SearchPanel>
)
}
const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
  brands: state.carContents.brands,
})
const mapDispatchToProps = dispatch => ({
  getBrandData: getBrandData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
