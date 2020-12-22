import React from 'react';
import $ from 'jquery';
import {Menu, MenuItem, SubMenuLD, SubMenuLDArrow, SubMenuLDItem, SubMenuRD, SubMenuRDArrow, SubMenuRDItem} from '../Elements/Menu';
import {MenuButton} from '../Elements/Submit';
import {MobileMenu, MobileMenuItem, MobileSubMenuItem, MobileMenuCloseButton} from '../Elements/Menu';
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux'
import {logoutUser, saveVisitUrl} from '../store/action/actions'

function Nav({auth, logoutUser, saveVisitUrl}) {

    React.useEffect(function() {
        $(document).ready(set);
        $(window).resize(set);
    },[])
    function set() {
        $("#menubutton").off("click").on("click", showMenu);
    }

    function showMenu() {
        $("#closebutton").off("click").on("click", function() {
            $("#mobilemenu").toggle("slide");
        });
        $("#mobilemenu").toggle("slide");
    }
    const {t} = useTranslation(["header"]);
    const handleLogout = e => {
        logoutUser()
    }
    const handleClick = e => {
        saveVisitUrl(e.target.id)
    }
    return(
        <nav>
            <Menu>
                <Link to="/"><MenuItem>{t("menuitem1")}</MenuItem></Link>
                <Link to="/news"><MenuItem>{t("menuitem21")}
                    <SubMenuLD>
                        <SubMenuLDArrow><img src="/static/images/subnav_arrow_left.gif" alt="image_src"/></SubMenuLDArrow>
                        <Link to="/compose"><SubMenuLDItem id="/compose" onClick={handleClick}>{t("menuitem23")}</SubMenuLDItem></Link>
                    </SubMenuLD>
                </MenuItem></Link>
                <Link to="/submission"><MenuItem id="/submission" onClick={handleClick}>{t("menuitem22")}</MenuItem></Link>
                <Link to="/chiptuning"><MenuItem>{t("menuitem3")}
                    {/*<SubMenuRD>
                                            <SubMenuRDArrow><img src="/static/images/subnav_arrow_right.gif" alt="image_src"/></SubMenuRDArrow>
                                            <SubMenuRDItem>Development</SubMenuRDItem>
                                            <SubMenuRDItem>Motorboats</SubMenuRDItem>
                                            <SubMenuRDItem>Jet Skis</SubMenuRDItem>
                                            <SubMenuRDItem>Bikes/Quad</SubMenuRDItem>
                                            <SubMenuRDItem>Cars</SubMenuRDItem>
                                        </SubMenuRD>*/}
                </MenuItem></Link>
                <Link to="/faq"><MenuItem>{t("menuitem4")}</MenuItem></Link>
                <Link to="/download-software"><MenuItem>{t("menuitem6")}</MenuItem></Link>
                {
                    auth.isAuthenticated === true ? (
                        <MenuItem>{auth.user.username}
                            <SubMenuRD>
                            <SubMenuRDArrow><img src="/static/images/subnav_arrow_right.gif" alt="image_src"/></SubMenuRDArrow>
                                <Link to="/"><SubMenuRDItem onClick={handleLogout}>{t("logout")}</SubMenuRDItem></Link>
                            </SubMenuRD>
                        </MenuItem>
                      ) : (
                        <Link to="/login"><MenuItem>{t("menuitem5")}
                            <SubMenuRD>
                            <SubMenuRDArrow><img src="/static/images/subnav_arrow_right.gif" alt="image_src"/></SubMenuRDArrow>
                                <Link to="/signup"><SubMenuRDItem>{t("menuitem51")}</SubMenuRDItem></Link>
                            </SubMenuRD>
                        </MenuItem></Link>
                      )
                }
                
               
                
            </Menu>
            <MenuButton id="menubutton" readOnly />
            <MobileMenu id="mobilemenu">
                <MobileMenuCloseButton id="closebutton">X</MobileMenuCloseButton>
                <MobileMenuItem><Link to="/"><MenuItem>{t("menuitem1")}</MenuItem></Link></MobileMenuItem>
                <MobileMenuItem>{t("menuitem2")}</MobileMenuItem>
                    <MobileSubMenuItem><Link to="/news"><MenuItem>{t("menuitem21")}</MenuItem></Link></MobileSubMenuItem>
                    <MobileSubMenuItem><Link to="/submission"><MenuItem>{t("menuitem22")}</MenuItem></Link></MobileSubMenuItem>
                    <MobileSubMenuItem><Link to="/compose"><MenuItem>{t("menuitem23")}</MenuItem></Link></MobileSubMenuItem>
                <MobileMenuItem><Link to="/chiptuning"><MenuItem>{t("menuitem3")}</MenuItem></Link></MobileMenuItem>
                <MobileMenuItem><Link to="/faq"><MenuItem>{t("menuitem4")}</MenuItem></Link></MobileMenuItem>
                <MobileMenuItem><Link to="/login"><MenuItem>{t("menuitem5")}</MenuItem></Link></MobileMenuItem>
                    <MobileSubMenuItem><Link to="/signup"><MenuItem>{t("menuitem51")}</MenuItem></Link></MobileSubMenuItem>
            </MobileMenu>
        </nav>
    );
}
const mapStateToProps = state=>({
    auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  saveVisitUrl: (a) => dispatch(saveVisitUrl(a)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Nav);










