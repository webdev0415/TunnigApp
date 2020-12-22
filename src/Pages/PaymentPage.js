import React, {useState} from 'react';
// import $ from 'jquery';
import {Spacer} from '../Elements/Common';
import {PaymentPanel, PaymentPane, PaymentHeader, PaymentHeaderDiv, PaymentHeaderButton, PaymentHeaderText, PaymentHeaderDesc, PaymentHeaderImage} from '../Elements/PaymentPanel';
import {PaymentContent, MCSecImage, VisaSecImage, DepositTitle, DepositItem, DepositLine, TotalAmount} from '../Elements/PaymentPanel';
import {CurrencyAmount} from '../Elements/Input';
import PaypalButtons from '../Components/PaypalButton'
import {PaymentButton} from '../Elements/Submit'
import {connect} from "react-redux"
import queryString from "query-string";
import {useTranslation} from 'react-i18next';

function PaymentPage({location}) {
const {t} = useTranslation(["payment"]);
const [showPaypal, setShowPaypal] = useState(false)
const query = queryString.parse(location.search);
const {price, desc, download_url} = query
const processing_fee = (price/100*4.7).toFixed(2)
const total_amount = (Number(price)+Number(processing_fee)).toFixed(2)
const showPaypalButtons  = () => {
    setShowPaypal(true)
}

return(
    <>
{
    showPaypal && (<PaypalButtons price={total_amount} description={desc} download_url={download_url} />)
}
{ !showPaypal && (
        <PaymentPanel>
            <PaymentHeader>
                <PaymentHeaderDiv>{t("label")}</PaymentHeaderDiv>
            </PaymentHeader>
            <PaymentPane>
                <PaymentHeader>
                    <PaymentHeaderButton type="radio" name="paymentmethod" value="pp" checked></PaymentHeaderButton>
                    <PaymentHeaderText for="paymentmethod">Paypal</PaymentHeaderText>
                    <PaymentHeaderDesc><PaymentHeaderImage src="/static/images/payment/paypal.svg" alt="Paypal" /></PaymentHeaderDesc>
                </PaymentHeader>
                <PaymentContent id="pppane">

                    <Spacer />
                </PaymentContent>
            </PaymentPane>
            <PaymentPane>
                <PaymentContent>
                    
                    <DepositTitle>{t("note")}</DepositTitle>
                    <DepositItem>
                        <CurrencyAmount>{desc}</CurrencyAmount>
                    </DepositItem>
                    <Spacer space="1em" />
                    <DepositTitle>{t("deposit_amount")}</DepositTitle>
                    <DepositItem>
                        <CurrencyAmount>{price}</CurrencyAmount>
                    </DepositItem>
                    <Spacer space="1em" />
                    <DepositTitle>{t("processing_fee")}</DepositTitle>
                    <DepositItem>
                        <CurrencyAmount>{processing_fee}</CurrencyAmount>
                    </DepositItem>
                    <Spacer space="1em" />
                    <DepositLine />
                    <Spacer space="1em" />
                    <DepositTitle>{t("total_amount")}</DepositTitle>
                    <DepositItem>
                        <TotalAmount>{total_amount}</TotalAmount>
                    </DepositItem>
                    <Spacer space="2em" />
                    <PaymentButton type="button" value={`${t("submit")} ${total_amount}`} onClick={showPaypalButtons} />
                    
                </PaymentContent>
                <PaymentContent>
                    <MCSecImage src="/static/images/payment/mastercard-securecode.svg" alt="Mastercard Secure" />
                    <VisaSecImage src="/static/images/payment/visa-secure-blu.svg" alt="Visa Secure" />
                </PaymentContent>
            </PaymentPane>
            <Spacer />
        </PaymentPanel>
    )
}
</>
)
}
const mapStateToProps = (state, ownProps) => ({
  location: ownProps.location,
})

export default connect(mapStateToProps, null)(PaymentPage)
