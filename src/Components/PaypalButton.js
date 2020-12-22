import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import {ButtonLoader} from "./SpinnerLoader";
import {options} from "../store/config"
import Alert from '../Components/Alert';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {connect} from "react-redux"
import {submitSubmission, downloadSoftware} from "../store/action/actions"

require('dotenv').config()

 const CLIENT = {
   sandbox:
     process.env.REACT_APP_PAYPAL_SANDBOX_CLIENT_ID,
   production:
     process.env.REACT_APP_PAYPAL_SANDBOX_CLIENT_ID,
 }; 
 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;
//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {	
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
      flag: "",
      val: ""
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }

  createOrder = (data, actions, price) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Mercedes G-Wagon",
          amount: {
            currency_code: "RUB",
            value: price
          }
        }
      ]
    });
  };

  onApprove = (data, actions, download_url, submit_data, submitSubmission, downloadSoftware) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      };
      console.log("Payment Approved: ", paymentData);
      if (download_url) {
        downloadSoftware(download_url)
      	// window.location.assign(download_url)
      } else if (submit_data) {
      	submitSubmission(submit_data)
      }

      this.setState({ showButtons: false, paid: true, flag: "success", val: "Payment Success" });
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;
    const {price, description, download_url, submit_data, submitSubmission, downloadSoftware} = this.props
    return (
      <div className="main">
        {loading && <ButtonLoader />}

        {showButtons && (
          <div>
            <div>
              <h2>Items: {description}</h2>
              <h2>Total checkout Amount ${price}</h2>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions, price)}
              onApprove={(data, actions) => this.onApprove(data, actions, download_url, submit_data, submitSubmission, downloadSoftware)}
            />
          </div>
        )}

        {paid && (
          <div className="main">
          	<Provider template={AlertTemplate} {...options}>
              <Alert flag={this.state.flag} title={this.state.val} />
          	</Provider>
            <h2>
              Congrats! you just paid {price} for {description}.{" "}
              <span role="img" aria-label="emoji">
                {" "}
                😉
              </span>
              <br />
              Please wait in a while for downloading.....
            </h2>
          </div>
        )}
      </div>
    );
  }
  //...
 }
const mapStateToProps = (state, ownProps) => ({
  submit_data: state.blogs.cachedata,
})
const mapDispatchToProps = dispatch => ({
  submitSubmission: submitSubmission(dispatch),
  downloadSoftware: downloadSoftware(dispatch),
})
export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(connect(mapStateToProps, mapDispatchToProps)(PaypalButton))
// export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);