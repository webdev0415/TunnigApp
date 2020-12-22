import React from 'react';
import { ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';
import 'suneditor/dist/css/suneditor.min.css'; 
import ReactHtmlParser from 'react-html-parser'
import {CardForm, CardHeader, CardBody, Label, Input, Button, Preview, InnerContainer, Select, ColLeft, ColRight, Col, WarningSpan} from '../Elements/Submission'
import {theme} from '../store/theme'
import {useTranslation} from 'react-i18next';
import plugins from 'suneditor/src/plugins';
import suneditor from 'suneditor';
import styled from 'styled-components'
import isEmpty from 'is-empty'
import {submitBlog, getCategoryData} from '../store/action/actions.js'
import {connect} from 'react-redux'
import Alert from '../Components/Alert';
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {options} from "../store/config"
import {ButtonLoader, OptionLoader} from "../Components/SpinnerLoader"
import SimpleImageInput from "../Components/SimpleImageInput"

let WysEditor = styled.textarea.attrs({
  id:'full_editor'
})`
  width:100%;
  `
const BlogPage = ({submitBlog, getCategoryData, categorys, lang, user}) => {
  const [alert, setAlert] = React.useState({
    flag: "",
    val: ""
  })
  const [optionFlag, setOptionFlag] = React.useState(false)
  const [btnFlag, setBtnFlag] = React.useState(false)
	const {t} = useTranslation(["submission"]);
	const [wysiwygText, setWysiwygText] = React.useState("")
  const [blogParam, setBlogParam] = React.useState({})
  const [blogErrors, setBlogErrors] = React.useState({})
  const [image, setImage] = React.useState()
  React.useEffect(()=>{
    setOptionFlag(true)
    getCategoryData(setOptionFlag)
  }, [])
  React.useEffect(()=>{
    setAlert({
      flag: ""
    })
  },[lang])
	React.useEffect(()=>{
		const editor = suneditor.create('full_editor', {
        plugins: plugins,
        height: 170,
        maxHeight: 170,
        width: '100%',
        buttonList: [
            ['undo', 'redo',
            'font', 'fontSize', 'formatBlock',
            'paragraphStyle', 'blockquote',
            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
            'fontColor', 'hiliteColor', 'textStyle',
            'removeFormat',
            'outdent', 'indent',
            'align', 'horizontalRule', 'list', 'lineHeight',
            'table', 'link', 'image', 'video', 'audio', /** 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
            /** 'imageGallery', */ // You must add the "imageGalleryUrl".
            'fullScreen', 'showBlocks', 'codeView',
            'preview', 'print', 'save', 'template']
        ]
      });
   
  	let mainFrame = document.getElementsByClassName('sun-editor')[0];
        mainFrame.style.border = 'none';
        mainFrame.style.borderradius = '5px';


    let board = document.getElementsByClassName('se-wrapper-wysiwyg')[0];
      board.style.background = '#3e3e3e';
      board.style.color = 'white';
    let statusBar = document.getElementsByClassName('se-navigation')[0];
      statusBar.style.background = '#5e5e5e';
      statusBar.style.color = 'white';

    let menuList = document.getElementsByClassName ( 'se-menu-list')[0];
      menuList.style.background = '#5e5e5e';

    let toolBar = document.getElementsByClassName ( 'se-toolbar')[0];
      toolBar.style.background = '#3e3e3e';
      toolBar.style.outline = 'none';

    let resizeBar = document.getElementsByClassName ( 'se-resizing-bar')[0];
      resizeBar.style.background = '#5e5e5e';
      resizeBar.style.border='none';
    editor.onChange = onEditorChange
  }, [])
	const onTextChange = e => {
		setWysiwygText(e)
	}
	const onEditorChange = (contents, core) => {
    setAlert({
      flag: ""
    })
		setWysiwygText(contents)
  }
  const errVal = {
    success1: t("success1"),
    error1: t("error1"),
    error2: t("error2")
  }

	const onSunEditorLoad = e => {
		if (e===true) {
			console.log(document.getElementsByClassName ('se-btn-tray')[0].style.height='auto');
		}
	}
  const handleChange = e => {
    setAlert({
      flag: ""
    })
    setBlogParam({
      ...blogParam,
      [e.target.id]: e.target.value
    })
  }
  let data = new FormData();
  const handleClick = async e => {
    setAlert({
      flag: ""
    })
    if (!blogParam.title || isEmpty(blogParam.title)) {
      setBlogErrors({
        title: t("require")
      })
    }else if (!blogParam.category || isEmpty(blogParam.category)) {
      setBlogErrors({
        category: t("require")
      })
    }else if (!wysiwygText || isEmpty(wysiwygText)) {
      setBlogErrors({
        content: t("require")
      })
    } else {
      setBtnFlag(true)
      data.append('title', blogParam.title);
      data.append('content', wysiwygText);
      data.append('category', blogParam.category);
      data.append('display_image', image);
      data.append('author', user.username);

      await submitBlog(data, setAlert, errVal)
      setBtnFlag(false)
    }

  }
	return (
		<ThemeProvider theme = {theme}>
            <Provider template={AlertTemplate} {...options}>
              <Alert flag={alert.flag} title={alert.val} />
            </Provider>
            <center>
            <Grid.Unit size = {{xs:1/1, sm:6/7, md:5/6, lg:4/5, xl:4/5}}>
              <InnerContainer>
                <CardForm>
                  <CardHeader>
                    {t("blog_title")}
                  </CardHeader>
                  <CardBody>
                    <ColLeft>
                      <Label>{t("subject")} {blogErrors.title && (<WarningSpan>{blogErrors.title}</WarningSpan>)}</Label>
                      <Input type='text' id="title" onChange={handleChange} error={blogErrors.title && true}/>
                    </ColLeft>
                    <ColRight>
                      <Label>{t("category")} {blogErrors.category && (<WarningSpan>{blogErrors.category}</WarningSpan>)} {optionFlag && (<OptionLoader />)}</Label>
                      <Select id="category" onChange={handleChange} error={blogErrors.category && true}>
                        <option></option>
                        {
                          categorys && categorys.length > 0 && categorys.map((item, key)=><option key={key} value={item.id}>{item.name}</option>)
                        }

                      </Select>
                    </ColRight>
                    <Col>
                    <Label>{t("display_image")} {blogErrors.display_image && (<WarningSpan>{blogErrors.display_image}</WarningSpan>)}</Label>
                    <SimpleImageInput txt={t("upload_image")} setImage={setImage}  error={blogErrors.display_image && true} err_txt={t("err_txt")}></SimpleImageInput>
                    </Col>
                    <Col>
                    <Label>{t("compose")} {blogErrors.content && (<WarningSpan>{blogErrors.content}</WarningSpan>)}</Label>
                      <WysEditor
                        onLoad = {onSunEditorLoad}
                        onChange =  {onTextChange }
                        height="200"
                        placeholder="Please type here..."
                      ></WysEditor>
                    </Col>
                    <Col>
                      <Label style = {{ marginTop:27}}>{t("preview")}</Label>
                      <Preview>
                        { ReactHtmlParser(wysiwygText)}
                      </Preview>
                    </Col>
                    <center><Button onClick={handleClick}>{t("submit")}
                    {
                      btnFlag 
                      ? <ButtonLoader />
                      : <span></span>
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
  categorys: state.blogs.categorys,
  user: state.auth.user
})
const mapDispatchToProps = dispatch => ({
  submitBlog: submitBlog(dispatch),
  getCategoryData: getCategoryData(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)

