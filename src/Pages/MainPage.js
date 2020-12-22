import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from "../Components/PrivateRoute"
import {Spacer} from '../Elements/Common';
import Header from '../Components/Header';
import CarsPage from '../Pages/CarsPage';
import BrandPage from '../Components/Cars/BrandPage';
import Footer from '../Components/Footer';
import Home from './Home'
import BlogPage from './BlogsPage'
import BrandYearPage from '../Components/Cars/BrandYearPage'
import BrandYearEnginePage from '../Components/Cars/BrandYearEnginePage'
import TuningDisplayPage from '../Components/Cars/TuningDisplayPage'
import SigninPage from './SignInPage'
import SignupPage from './SignupPage'
import SubmissionPage from './SubmissionPage'
import FAQPage from './FAQPage';
import NewsPage from './NewsPage'
import SearchPage from './SearchPage';
import DSPage from './DownloadSoftwarePage'
import NewsItemPage from './NewsItemPage';
import ComposeSubmissionPage from './SubmissionComposePage'
import SubmissionItemPage from './SubmissionItemPage'
import PaymentPage from './PaymentPage';
import TestPayment from './TestPayment'

function MainPage() {
    return(
        <>
        <Header />
        <Spacer space="2em" />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={SigninPage} />
        <Route path="/signup" exact component={SignupPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/news/:news_id" exact component={NewsItemPage} />
        <PrivateRoute path="/download-software" exact component={DSPage} />
        <Route path="/payment" exact component={PaymentPage} />
        <Route path="/testpayment" exact component={TestPayment} />
        <PrivateRoute path="/submission" exact component={SubmissionPage} />
        <PrivateRoute path="/submission/:submission_id" exact component={SubmissionItemPage} />
        <PrivateRoute path="/new-submission" exact component={ComposeSubmissionPage} />
        <PrivateRoute path="/compose" exact component={BlogPage} />
        <Route path="/faq" exact component={FAQPage} />
        <Route path="/chiptuning" exact component={CarsPage} />
        <Route path="/chiptuning/:brand_id" exact component={BrandPage} />
        <Route path="/chiptuning/:brand_id/:model_id" exact component={BrandYearPage} />
        <Route path="/chiptuning/:brand_id/:model_id/:year" exact component={BrandYearEnginePage} />
        <Route path="/chiptuning/:brand_id/:model_id/:year/:engine_id" exact component={TuningDisplayPage} />
        <Spacer />
        <Footer />
        </>
    );
}
export default MainPage;