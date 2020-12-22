import React from 'react'
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';
import {CardHeader, CardForm, CardBody, Label, Input, Button, InnerContainer} from '../Elements/Form'
import {WarningSpan} from '../Elements/Submission'
import {useTranslation} from 'react-i18next';
import {theme} from '../store/theme'
import {loginUser} from '../store/action/actions'
import isEmpty from 'is-empty'
import isEmail from "validator/lib/isEmail";
import Alert from '../Components/Alert';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {options} from "../store/config"
import {connect} from "react-redux"
import {ButtonLoader} from "../Components/SpinnerLoader"

const SignIn = ({loginUser, lang, history, visit_url}) => {
  const [alert, setAlert] = React.useState({
    flag: "",
    val: ""
  })
  const [btnFlag, setBtnFlag] = React.useState(false)
  const [loginErrors, setLoginErrors] = React.useState({})
  const {t} = useTranslation(["sign"]);
  const [loginParam, setLoginParam] = React.useState({})
  const errVal = {
    success1: t("success1"),
    error1: t("error1"),
    error2: t("error2")
  }
  React.useEffect(()=>{
    setAlert({
      flag: ""
    })
  },[lang])
  const handleChange = e => {
    setAlert({
      flag: ""
    })
    setLoginParam({
      ...loginParam,
      [e.target.id]: e.target.value
    })
  }
  const handleClick = async e => {
    setAlert({
      flag: ""
    })
    if (!loginParam.email || isEmpty(loginParam.email)) {
      setLoginErrors({
        email: t("require")
      })
    }else if (!loginParam.email || isEmpty(loginParam.email)) {
      setLoginErrors({
        password: t("require")
      })
    } else if (loginParam.email && !isEmail(loginParam.email)) {
      setLoginErrors({
        email: t("noemail")
      })
    } else {
      setBtnFlag(true)
      await loginUser(loginParam, setAlert, setLoginErrors, lang, errVal, history, visit_url)
      setBtnFlag(false)
    }
    
  }
	return (
		<ThemeProvider theme ={ theme}>
          <Provider template={AlertTemplate} {...options}>
              <Alert flag={alert.flag} title={alert.val} />
          </Provider>
            <center>
              <Grid.Unit size = {{xs:1/1, sm:4/5, md:3/4, lg:2/3, xl:1/2}}>
                  <InnerContainer >
                  <CardForm>
                  <CardHeader>
                    {t("signin")}
                  </CardHeader>
                  <CardBody>
                    <Label>{t("email")} {loginErrors.email && (<WarningSpan>{loginErrors.email}</WarningSpan>)}</Label>
                    <Input type='text' id="email" onChange={handleChange}/>
                    <Label>{t("password")} {loginErrors.password && (<WarningSpan>{loginErrors.password}</WarningSpan>)}</Label>
                    <Input type='password' id="password" onChange={handleChange} />
                    <center><Button type="button" onClick={handleClick}>{
                    btnFlag
                    ? <ButtonLoader />
                    : t("signin")
                  }
                    </Button></center>

                  </CardBody>
                </CardForm>

                </InnerContainer>
              </Grid.Unit>
            </center>
          </ThemeProvider>
		)
}
const mapStateToProps = (state, ownProps) => ({
  lang: state.auth.lang,
  history: ownProps.history,
  visit_url: state.auth.visitUrl,
})
const mapDispatchToProps = dispatch => ({
  loginUser: loginUser(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)