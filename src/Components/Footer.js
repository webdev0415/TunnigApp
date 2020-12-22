import React from 'react';
import {useTranslation} from 'react-i18next';
import {Address, AddressPart, AddressPartB1, AddressPartB2, AddressItem} from '../Elements/Address';
import {Follow, FollowItem, FollowItemFirst, FollowItemL, FollowItemR, FollowDir, FollowImage} from '../Elements/Follow';
import {Dark} from '../Elements/Common';
import {Spacer} from '../Elements/Common';

function Footer() {
    const {t} = useTranslation(["footer"]);

    return(
        <footer>
            <Address>
                <AddressPart>
                    <img src="/static/images/footer/footer_icon_tuv.png" alt="TÜVRheinland - Certified" />
                </AddressPart>
                <AddressPart>
                    <AddressItem>{t("title1")}<Dark>© ® 2020</Dark></AddressItem>
                    <AddressItem>{t("title2")}</AddressItem>
                </AddressPart>
                <AddressPartB1>
                    <AddressItem>{t("address1")} 94</AddressItem>
                    <AddressItem>2830 {t("address2")}</AddressItem>
                </AddressPartB1>          
                <AddressPart>
                    <AddressItem>{t("email")}</AddressItem>
                    <AddressItem>{t("phone")}: +123 456 789</AddressItem>
                </AddressPart>          
                <AddressPartB2>
                    <AddressItem>{t("salesconditions")}</AddressItem>
                    <AddressItem>{t("privacypolicy")}</AddressItem>
                </AddressPartB2>          
            </Address>
            <Follow>
                <FollowItemFirst>
                    {t("becomefan")}
                    <FollowDir src="/static/images/footer/arrow_grey_footer.png" />    
                </FollowItemFirst>
                <FollowItemL>
                    <a href="http://www.facebook.com/BRPerformanceBelgium" title="Visit our Facebook page" target="_blank" rel="noopener noreferrer">
                        <FollowImage src="/static/images/footer/footer_icon_fb.png" width="28" height="28" alt="Facebook" />
                    </a>                    
                </FollowItemL>
                <FollowItem>
                    <a href="http://www.youtube.com/user/BRPerformances" title="Visit our YouTube page" target="_blank" rel="noopener noreferrer">
                        <FollowImage src="/static/images/footer/footer_icon_yt.png" width="28" height="28" alt="YouTube" />
                    </a>                    
                </FollowItem>
                <FollowItemR>
                    <a href="https://www.instagram.com/br_performance" title="Visit our Instagram page" target="_blank" rel="noopener noreferrer">
                        <FollowImage src="/static/images/footer/footer_icon_inst.png" width="28" height="28" alt="Instagram" />
                    </a>                    
                </FollowItemR>
                <Spacer />
            </Follow>
            <Spacer space="1em" />
        </footer>
    );
}
export default Footer;