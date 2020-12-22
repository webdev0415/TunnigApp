import React from 'react'
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';
import {CardHeader, CardForm, CardBody, Label, Input, Button, InnerContainer, Select} from '../Elements/Form'
import {WarningSpan} from '../Elements/Submission'
import {useTranslation} from 'react-i18next';
import {theme} from '../store/theme'
import isEmpty from 'is-empty'
import isEmail from "validator/lib/isEmail";
import Alert from '../Components/Alert';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {options} from "../store/config"
import {signupUser} from "../store/action/actions"
import {connect} from "react-redux"
import {ButtonLoader} from "../Components/SpinnerLoader"

const SignUp = ({signupUser, lang}) => {
  const [alert, setAlert] = React.useState({
    flag: "",
    val: ""
  })
  const [btnFlag, setBtnFlag] = React.useState(false)
  const {t} = useTranslation(["sign"]);
  const [signupParam, setSignupParam] = React.useState({})
  const errVal = {
    success2: t("success2"),
    error1: t("error1"),
    error2: t("error2"),
    pwderr: t("badpwdreq")
  }
  React.useEffect(()=>{
    setAlert({
      flag: ""
    })
  },[lang])
  const [signupErrors, setSignupErrors] = React.useState({})
  const handleChange = e => {
    setAlert({
      flag: ""
    })
    setSignupParam({
      ...signupParam,
      [e.target.id]: e.target.value
    })
  }

  const handleClick = async e => {
    let signProfileData = {}
    setAlert({
      flag: ""
    })
    if (!signupParam.username || isEmpty(signupParam.username)) {
      setSignupErrors({
        username: t("require")
      })
    }else if (!signupParam.email || isEmpty(signupParam.email)) {
      setSignupErrors({
        email: t("require")
      })
    } else if (signupParam.email && !isEmail(signupParam.email)) {
      setSignupErrors({
        email: t("noemail")
      })
    } else if (!signupParam.password1 || isEmpty(signupParam.password1)) {
      setSignupErrors({
        password1: t("require")
      })
    } else if (!signupParam.password2 || isEmpty(signupParam.password2)) {
      setSignupErrors({
        password2: t("require")
      })
    } else if (signupParam.password1 !== signupParam.password2) {
      setSignupErrors({
        password2: t("nomatch")
      })
    } else if (!signupParam.user_level || isEmpty(signupParam.user_level)) {
      setSignupErrors({
        user_level: t("require")
      })
    } else {
      signProfileData.user_level = signupParam.user_level
      signProfileData.credit_point = signupParam.credit_point
      console.log("====", signupParam)
      setBtnFlag(true)
      await signupUser(signupParam, signProfileData, setAlert, setSignupErrors, errVal, lang)
      setBtnFlag(false)
    }
  }
	return (
		<ThemeProvider theme = { theme}>
          <Provider template={AlertTemplate} {...options}>
              <Alert flag={alert.flag} title={alert.val} />
          </Provider>
          <center>
            <Grid.Unit size = {{xs:1/1, sm:4/5, md:3/4, lg:2/3, xl:1/2}}>
              <InnerContainer>
              <CardForm>
                <CardHeader>
                  {t("signup")}
                </CardHeader>
                <CardBody>
                    <Label>{t("name")} {signupErrors.username && (<WarningSpan>{signupErrors.username}</WarningSpan>)}</Label>
                    <Input type='text' id="username" onChange={handleChange} error={signupErrors.username && true}/>

                    <Label>{t("email")} {signupErrors.email && (<WarningSpan>{signupErrors.email}</WarningSpan>)}</Label>
                    <Input type='email' id="email" onChange={handleChange} error={signupErrors.email && true} />

                    <Label>{t("password")} {signupErrors.password1 && (<WarningSpan>{signupErrors.password1}</WarningSpan>)}</Label>
                    <Input type='password' id="password1" onChange={handleChange} error={signupErrors.password1 && true} />

                    <Label>{t("confpass")} {signupErrors.password2 && (<WarningSpan>{signupErrors.password2}</WarningSpan>)}</Label>
                    <Input type='password' id="password2" onChange={handleChange} error={signupErrors.password2 && true} />
                    <Label>{t("user_level")} {signupErrors.user_level && (<WarningSpan>{signupErrors.user_level}</WarningSpan>)}</Label>
                    <Select id="user_level" onChange={handleChange} error={signupErrors.user_level && true}>
                      <option></option>
                      <option value="local_shop">{t("local_shop")}</option>
                      <option value="subdealer">{t("subdealer")}</option>
                      <option value="regular_user">{t("regular_user")}</option>
                    </Select>

                    <Label>{t("credit_point")}</Label>
                    <Select id="credit_point" disabled>
                      <option>USD</option>
                    </Select>
                  <center><Button type="submit" onClick={handleClick}>{
                    btnFlag
                    ? <ButtonLoader />
                    : t("signin")
                  }</Button></center>

                </CardBody>
              </CardForm>
            </InnerContainer>
              
            </Grid.Unit>
          </center>
        </ThemeProvider>
		)
}
const mapStateToProps = state => ({
  lang: state.auth.lang,
})
const mapDispatchToProps = dispatch => ({
  signupUser: signupUser(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
