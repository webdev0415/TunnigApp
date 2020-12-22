import React from 'react';
import {CardHeader, CardForm, CardBody, Label, Input, Button, InnerContainer, Select, ColLeft, ColRight, WarningSpan} from '../Elements/Submission'
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';
import {useTranslation} from 'react-i18next';
import CustomFileInput from '../Components/CustomFileInput';
import isEmpty from 'is-empty'
import {theme} from '../store/theme'
import {submitSubmission, getSubmissionData, submitCacheSubmission} from '../store/action/actions'
import {connect} from 'react-redux'
// import Alert from '../Components/Alert';
// import { Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// import {options} from "../store/config"
import {ButtonLoader} from "../Components/SpinnerLoader"


const Submission = ({submitSubmission, getSubmissionData, submitCacheSubmission, lang, submissions, history}) => {
  // const [alert, setAlert] = React.useState({
  //   flag: "",
  //   val: ""
  // })
  const [btnFlag, setBtnFlag] = React.useState(false)
  const {t} = useTranslation(["submission"]);
  const [submissionParam, setSubmissionParam] = React.useState({})
  const [submissionErrors, setSubmissionErrors] = React.useState({})
  const [multiple, setMultiple] = React.useState()

  React.useEffect(()=>{
    getSubmissionData()
  }, [])
  React.useEffect(()=>{
    // setAlert({
    //   flag: ""
    // })
  },[lang])

  // const errVal = {
  //   success1: t("success1"),
  //   error1: t("error1"),
  //   error2: t("error2")
  // }
  const handleChange = e => {
    // setAlert({
    //   flag: ""
    // })
    setSubmissionParam({
      ...submissionParam,
      [e.target.id]: e.target.value
    })
  }
  let data = new FormData();
  const handleClick = async e => {

    // setAlert({
    //   flag: ""
    // })
    if (!submissionParam.car_vin_number || isEmpty(submissionParam.car_vin_number)) {
      setSubmissionErrors({
        car_vin_number: t("require")
      })
    }else if (!submissionParam.car_brand || isEmpty(submissionParam.car_brand)) {
      setSubmissionErrors({
        car_brand: t("require")
      })
    }else if (!submissionParam.car_model || isEmpty(submissionParam.car_model)) {
      setSubmissionErrors({
        car_model: t("require")
      })
      
    }else if (!submissionParam.car_build || isEmpty(submissionParam.car_build)) {
      setSubmissionErrors({
        car_build: t("require")
      })
      
    }else if (!submissionParam.engine_type || isEmpty(submissionParam.engine_type)) {
      setSubmissionErrors({
        engine_type: t("require")
      })
      
    }else if (!submissionParam.engine_power || isEmpty(submissionParam.engine_power)) {
      setSubmissionErrors({
        engine_power: t("require")
      })
      
    }else if (!submissionParam.year || isEmpty(submissionParam.year)) {
      setSubmissionErrors({
        year: t("require")
      })
      
    }else if (!submissionParam.tuning_level || isEmpty(submissionParam.tuning_level)) {
      setSubmissionErrors({
        tuning_level: t("require")
      })
      
    }else if (!submissionParam.car_plate_num || isEmpty(submissionParam.car_plate_num)) {
      setSubmissionErrors({
        car_plate_num: t("require")
      })
    } else {
      // console.log("haha")
      if (multiple === undefined || multiple.length === 0) {
        setSubmissionErrors({
          upload_file: t("require")
        })
      }else if (multiple && multiple.length > 4 ) {
        setSubmissionErrors({
          upload_file: t("upload_limit")
        })
      }
      else if (multiple && multiple.length > 0) {
        setBtnFlag(true)
        data.append('car_vin_number', submissionParam.car_vin_number);
        data.append('car_brand', submissionParam.car_brand);
        data.append('car_model', submissionParam.car_model);
        data.append('car_build', submissionParam.car_build);
        data.append('engine_type', submissionParam.engine_type);
        data.append('engine_power', submissionParam.engine_power);
        data.append('year', submissionParam.year);
        data.append('tuning_level', submissionParam.tuning_level);
        data.append('car_plate_num', submissionParam.car_plate_num);
        
        if (submissionParam.reading_method) {
          data.append('reading_method', submissionParam.reading_method);
        }
        if (submissionParam.ecu_type) {
          data.append('ecu_type', submissionParam.ecu_type);
        }
        for (var i = 0; i < multiple.length; i++) {
          if (multiple[i].size > 10485760) {
            setSubmissionErrors({
              upload_file: t("upload_size_limit")
            })
          }
        }
        switch(multiple.length) {
          case 1:
            data.append('file1', multiple[0]);
            break
          case 2:
            data.append('file1', multiple[0]);
            data.append('file2', multiple[1]);
            break
          case 3:
            data.append('file1', multiple[0]);
            data.append('file2', multiple[1]);
            data.append('file3', multiple[2]);
            break
          case 4:
            data.append('file1', multiple[0]);
            data.append('file2', multiple[1]);
            data.append('file3', multiple[2]);
            data.append('file4', multiple[3]);
            break
          default:
            break;
        }

        await submitCacheSubmission(data)
        history.push(`/payment?price=10&desc=Tuning request`)
        // setBtnFlag(false)

      }
    }
  }
	return (
		<ThemeProvider theme= {theme}>
    
          

          <center>
            <Grid.Unit size = {{xs:1/1, sm:6/7, md:5/6, lg:4/5, xl:4/5}}>
              <InnerContainer>
                <CardForm>
                  <CardHeader>
                    {t("submission")}
                  </CardHeader>
                  <CardBody>
                    <ColLeft>
                        <Label>{t("vin")} {submissionErrors.car_vin_number && (<WarningSpan>{submissionErrors.car_vin_number}</WarningSpan>)}</Label>
                        <Input type='text' id="car_vin_number" onChange={handleChange} error={submissionErrors.car_vin_number && true}/>
                    </ColLeft>
                    <ColRight>
                        <Label>{t("brand")} {submissionErrors.car_brand && (<WarningSpan>{submissionErrors.car_brand}</WarningSpan>)}</Label>
                        <Input type='text' id="car_brand" onChange={handleChange} error={submissionErrors.car_brand && true}/>
                    </ColRight>
                    <ColLeft>
                        <Label>{t("model")} {submissionErrors.car_model && (<WarningSpan>{submissionErrors.car_model}</WarningSpan>)}</Label>
                        <Input type='text' id="car_model" onChange={handleChange} error={submissionErrors.car_model && true}/>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("build")} {submissionErrors.car_build && (<WarningSpan>{submissionErrors.car_build}</WarningSpan>)}</Label>
                      <Input type='text' id="car_build" onChange={handleChange} error={submissionErrors.car_build && true}/>
                    </ColRight>
                    <ColLeft>
                      <Label>{t("engine")} {submissionErrors.engine_type && (<WarningSpan>{submissionErrors.engine_type}</WarningSpan>)}</Label>
                      <Input type='text' id="engine_type" onChange={handleChange} error={submissionErrors.engine_type && true}/>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("power_hp")} {submissionErrors.engine_power && (<WarningSpan>{submissionErrors.engine_power}</WarningSpan>)}</Label>
                      <Input type='text' id="engine_power" onChange={handleChange} error={submissionErrors.engine_power && true}/>
                    </ColRight>
                    <ColLeft>
                      <Label>{t("year")} {submissionErrors.year && (<WarningSpan>{submissionErrors.year}</WarningSpan>)}</Label>
                      <Input type='text' id="year" onChange={handleChange} error={submissionErrors.year && true}/>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("level")} {submissionErrors.tuning_level && (<WarningSpan>{submissionErrors.tuning_level}</WarningSpan>)}</Label>
                      <Select id="tuning_level" onChange={handleChange} error={submissionErrors.tuning_level && true}>
                        <option></option>
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>Special</option>
                      </Select>
                    </ColRight>

                    <ColLeft>
                      <Label>{t("reading_method")}</Label>
                      <Select id="reading_method" onChange={handleChange}>
                        <option></option>
                        <option>Method 1</option>
                        <option>Method 2</option>
                      </Select>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("ecu_type")}</Label>
                      <Select id="ecu_type" onChange={handleChange}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                      </Select>
                    </ColRight>
                    <ColLeft>
                      <Label>{t("plate_num")} {submissionErrors.car_plate_num && (<WarningSpan>{submissionErrors.car_plate_num}</WarningSpan>)}</Label>
                      <Input type='text' id="car_plate_num" onChange={handleChange} error={submissionErrors.car_plate_num && true}/>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("upload")} {submissionErrors.upload_file && (<WarningSpan>{submissionErrors.upload_file}</WarningSpan>)}</Label>
                      <CustomFileInput txt={t("upload_text")} changetxt={t("upload_change")} setMultiple={setMultiple}  error={submissionErrors.upload_file && true}></CustomFileInput>
                    </ColRight>
                    <center><Button onClick={handleClick}>{t("submission")} 
                    {
                      btnFlag 
                      ? <ButtonLoader />
                      : <span></span>
                    } </Button></center>
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
  submissions: state.blogs.submissions,
  history: ownProps.history,
})
const mapDispatchToProps = dispatch => ({
  submitSubmission: submitSubmission(dispatch),
  getSubmissionData: getSubmissionData(dispatch),
  submitCacheSubmission: submitCacheSubmission(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(Submission)
