import React from 'react';
import {useTranslation} from 'react-i18next';
import {SearchForm} from '../Elements/SearchForm';
import {SearchInput} from '../Elements/Input';
import {SearchButton} from '../Elements/Submit'
import {SocialMediaIcons, SocialMediaLink} from '../Elements/SocialMediaIcons';
import {LanguageBar, LanguageBarLink, LanguageBarImage, LanguageBarText} from '../Elements/LanguageBar';
import Nav from '../Components/Nav';
import {Logo, LogoImage} from '../Elements/Logo';
import {changeLang} from '../store/action/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export const Header = ({changeLang, lang}) => {
    const {i18n} = useTranslation();
    const changeLanguage = l => {
        i18n.changeLanguage(l);
        changeLang(l)
    }
    const [searchVal, setSearchVal] = React.useState("")
    const {t} = useTranslation(["header"]);
    const handleChange = e => {
        setSearchVal(e.target.value)
    }

    const handleClick = () => {
        document.getElementById("searchinput").value = ""
    }
    return(
        <>
        <SocialMediaIcons>
            
            {
                lang === "en" && (
                <SocialMediaLink href="http://www.facebook.com/BRPerformanceBelgium" title="Visit our Facebook page" target="_blank">
                    <img src="/static/images/header_icon_fb.png" width="26" height="26" alt="Facebook" />
                </SocialMediaLink>
                
                )
            }
            {
                lang === "en" && (
                <SocialMediaLink href="http://www.youtube.com/user/BRPerformances" title="Visit our YouTube page" target="_blank">
                    <img src="/static/images/header_icon_yt.png" width="26" height="26" alt="YouTube" />
                </SocialMediaLink>
                )
            }
            {
                lang === "zh" && (
                <SocialMediaLink href="https://www.tiktok.com/" title="Visit our TikTok page" target="_blank">
                    <img src="/static/images/header_icon_tt (5).png" width="26" height="26" alt="TikTok" />
                </SocialMediaLink>
                )
            }
            <SocialMediaLink href="https://www.instagram.com/br_performance" title="Visit our Instagram page" target="_blank">
                <img src="/static/images/header_icon_inst.png" width="26" height="26" alt="Instagram" />
            </SocialMediaLink>

        </SocialMediaIcons>
        <SearchForm>
            <Link to={`/search?val=${searchVal}`}><SearchButton type="submit" value="" onClick={handleClick} /></Link>
            <SearchInput placeholder={t("searchmessage")} id="searchinput" onChange={handleChange} />

        </SearchForm>
        <LanguageBar>
            <LanguageBarLink onClick={() => changeLanguage("en")}>
                <LanguageBarImage src="/static/images/uk.png" alt="en-UK" />
                <LanguageBarText>en</LanguageBarText>
            </LanguageBarLink>
            <LanguageBarLink onClick={() => changeLanguage("zh")}>
                <LanguageBarImage src="/static/images/china.png" alt="zh-CN" /> 
                <LanguageBarText>zh</LanguageBarText>
            </LanguageBarLink>
        </LanguageBar>

        <Logo>
            <a href="/"><LogoImage src="/static/images/logo.png" alt="LOGO for Running River Investment LLC" /></a>
        </Logo>        
        <Nav />
        </>
    );
}
const mapStateToProps = (state, ownProps) => ({
    lang: state.auth.lang,
})
const mapDispatchToProps = dispatch => ({
  changeLang: (a) => dispatch(changeLang(a)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)