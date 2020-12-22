import React from 'react';
import $ from 'jquery';
import {Spacer, SpacerT} from '../Elements/Common';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {HomePanel, HerProgrammatie, HPPane, HPImage, HPLink, HPDiv} from '../Elements/HomePanel';
import {BRPTeam, CarouselImgWrapper, CarouselImg} from '../Elements/HomePanel';
import {TestimonialsPane} from '../Elements/HomePanel';
import {YouTubePane, YouTubePaneHeader, YouTubePaneHeaderImage, YouTubePaneHeaderText} from '../Elements/HomePanel';
import {FacebookPane, FacebookPaneHeader, FacebookPaneHeaderImage, FacebookPaneHeaderText, FacebookFeed, FacebookContent} from '../Elements/HomePanel';
import {FacebookButton, OpenStreamButton} from '../Elements/Submit';
import {BRPVideoPane, BRPLivePane, BRPLabel, BRPLiveTitle, BRPLiveText} from '../Elements/HomePanel';
import Brands from '../Components/Brands'
import {HPItem, HPYutubeItem} from '../Components/HPItem'
import TestimonialItem from '../Components/TestimonialItem'
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux'
import {getYoutube, getTiktok, getTeamCarousel, getTopCarousel} from '../store/action/actions'

function HomePage({lang, youtube, tiktok, teamcarousel, topcarousel, getYoutube, getTiktok, getTeamCarousel, getTopCarousel}) {
	React.useEffect(()=>{
		getYoutube()
		getTiktok()
		getTeamCarousel()
		getTopCarousel()
	}, [lang])
	const {t} = useTranslation(["homepage"]);
	const display_tiktok = (event) => {
		
	    var overlay = $('<div class="overlay"></div>').appendTo('body');
	    var script = $('<script async src="https://www.tiktok.com/embed.js"></script>').appendTo('body');
	    var target = $(event.target);
	    var link = target.is("img") || target.is("input") ? target.closest("a").attr("data-link") : target.find("a").attr("data-link");
	    var video_id = target.is("img") || target.is("input") ? target.closest("a").attr("data-id") : target.find("a").attr("data-id");
	    var element = '<blockquote class="tiktok-embed" cite="'+link+'/'+video_id+'" data-video-id="'+video_id+'" style="max-width: 60%;" > <section> <a target="_blank" title="loading..." href="'+link+'">@minahilbutt09</a></section> </blockquote>'
	    var iframe = $('<div></div>').append(element);
	    var boxin = $('<div class="yt-box-in"></div>').append(iframe).append('<div class="yt-box-close"></div>');
	    var boxout = $('<div class="tiktok-box-out"></div>').append(boxin);
	    boxout.appendTo('body');
	    boxout.find(".yt-box-close").click(function() {
	        boxout.remove();
	        overlay.remove();
	    });
	}
	const display = (event) => {
		
	    var overlay = $('<div class="overlay"></div>').appendTo('body');
	    var target = $(event.target);
	    var link = target.is("img") || target.is("input") ? target.closest("a").attr("data-link") : target.find("a").attr("data-link");
	    var iframe = $('<iframe frameborder="0" class="yt-video" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="">').attr("src", link);
	    var boxin = $('<div class="yt-box-in"></div>').append(iframe).append('<div class="yt-box-close"></div>');
	    var boxout = $('<div class="yt-box-out"></div>').append(boxin);
	    boxout.appendTo('body');
	    boxout.find(".yt-box-close").click(function() {
	        boxout.remove();
	        overlay.remove();
	    });
	}
	let pane_num_yt 
	let pane_num_arr_yt = []
	if (youtube && youtube.length > 0) {
		pane_num_yt = Math.ceil(youtube.length / 6)
		for (var i = 1; i < pane_num_yt+1; i++) {
			pane_num_arr_yt.push(i)
		}
	}
	let pane_num_tt
	let pane_num_arr_tt = []
	if (tiktok && tiktok.length > 0) {
		pane_num_tt = Math.ceil(tiktok.length / 6)
		for (var j = 1; j < pane_num_tt+1; j++) {
			pane_num_arr_tt.push(j)
		}
	}
    return(
        <>
        <SpacerT space="2em" />
        <Carousel className="banner" showArrows={false} showStatus={false} showThumbs={false} autoPlay>
        {
        	topcarousel && topcarousel.length > 0 && topcarousel.map((item, index) => <CarouselImgWrapper key={index}><CarouselImg src={item.image} alt={item.name} /></CarouselImgWrapper>)
        }    
        </Carousel>
        <HomePanel>
	        <HerProgrammatie>
	            <Carousel showStatus={false} showThumbs={false}>
	            	<HPItem
	            		src="/static/images/home/24823-fichier_type_web_nl.jpg"
	            		title="HERPROGRAMMATIE FIAT/JEEP 1.0 GSE-T & 1.3 GSE-T"
	            		text="Met veel plezier kondigen wij aan dat het vanaf vandaag mogelijk is om... "
	            	/>
	            	<HPItem
	            		src="/static/images/home/24857-fichier_type_web_Swift_Milltek_nl.jpg"
	            		title="[Suzuki Swift] Uitlaat Milltek beschikbaar ..."
	            		text="Beste klanten,Sinds enkele dagen biedt Akrapovic een uitlaatsysteem vo... "
	            	/>
	            	<HPItem
	            		src="/static/images/home/24625-fichier_type_web_nl.jpg"
	            		title="HERPROGRAMMATIE 1.2 PURETECH (GPF)"
	            		text="Met veel plezier kondigen wij aan dat het vanaf vandaag mogelijk is om... "
	            	/>
	            	<HPItem
	            		src="/static/images/home/24749-fichier_type_web_nl_copie.jpg"
	            		title="HERPROGRAMMATIE 2.0 BLUEHDI (2018+)"
	            		text="Met veel plezier kondigen wij aan dat het vanaf vandaag mogelijk is om... "
	            	/>
	            	<HPItem
	            		src="/static/images/home/24665-fichier_type_web_nl_opel.jpg"
	            		title="HERPROGRAMMATIE OPEL (2017 -&gt; ...)"
	            		text="Met veel plezier kondigen wij aan dat het vanaf vandaag mogelijk is om... "
	            	/>
	            </Carousel>            
	        </HerProgrammatie>
	        <BRPTeam>
	            <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
	            {
	            	teamcarousel && teamcarousel.length > 0 && teamcarousel.map((item, index)=><HPItem key={index} src={item.imgsrc} />)
	            }
	            </Carousel>
	        </BRPTeam>
	        <Spacer />
	        <TestimonialsPane>
	            
	            	<TestimonialItem
	            		name="Kevin Deckers"
	            		score={5}
	            		imgsrc="/static/images/home/5.jpg"
	            		sublinktitle={t("readtestimonial")}	
	            	/>
	            	<TestimonialItem
	            		name="Kevin Deckers"
	            		score={5}
	            		imgsrc="/static/images/home/2.jpg"
	            		sublinktitle={t("readtestimonial")}
	            	/>
	            	<TestimonialItem
	            		name="Dimitris"
	            		score={5}
	            		imgsrc="/static/images/home/7.jpg"
	            		sublinktitle={t("readtestimonial")}
	            	/>
	            <Spacer />
	        </TestimonialsPane>
	        {
	        	lang === "en" && (
	        <YouTubePane id="yt-carousel-pane">
	            <YouTubePaneHeader>
	                <YouTubePaneHeaderImage src="/static/images/home/box_header_icon_yt.png" alt="YouTube" />
	                <YouTubePaneHeaderText>YouTube</YouTubePaneHeaderText>
	            </YouTubePaneHeader>
	            <Carousel showStatus={false} showThumbs={false}>
	            {
	            	pane_num_arr_yt && pane_num_arr_yt.length > 0 && pane_num_arr_yt.map((item, index)=>(
	            	<HPPane key={index}>
	            		<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index].link}
	                	imgsrc={youtube[6*index].imgsrc}
	                	alt={youtube[6*index].name}
	                	text={youtube[6*index].name}
	                	/>
	                	{
	                		youtube[6*index+1] && (
	                	<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index+1].link}
	                	imgsrc={youtube[6*index+1].imgsrc}
	                	alt={youtube[6*index+1].name}
	                	text={youtube[6*index+1].name}
	                	/>
	                			)
	                	}
	                	{
	                		youtube[6*index+2] && (
	                	<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index+2].link}
	                	imgsrc={youtube[6*index+2].imgsrc}
	                	alt={youtube[6*index+2].name}
	                	text={youtube[6*index+2].name}
	                	/>
	                			)
	                	}
	                	{
	                		youtube[6*index+3] && (
	                	<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index+3].link}
	                	imgsrc={youtube[6*index+3].imgsrc}
	                	alt={youtube[6*index+3].name}
	                	text={youtube[6*index+3].name}
	                	/>
	                			)
	                	}
	                	{
	                		youtube[6*index+4] && (
	                	<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index+4].link}
	                	imgsrc={youtube[6*index+4].imgsrc}
	                	alt={youtube[6*index+4].name}
	                	text={youtube[6*index+4].name}
	                	/>
	                			)
	                	}
	                	{
	                		youtube[6*index+5] && (
	                	<HPYutubeItem 
	                	onClick={display}
	                	link={youtube[6*index+5].link}
	                	imgsrc={youtube[6*index+5].imgsrc}
	                	alt={youtube[6*index+5].name}
	                	text={youtube[6*index+5].name}
	                	/>
	                			)
	                	}
	                	

	                  <HPDiv></HPDiv>
	            	</HPPane>
	            	))
	            }

	            </Carousel>
	            <Spacer />
	        </YouTubePane>
	        	)
	        }
	        {lang === "zh" && (
	        <YouTubePane id="yt-carousel-pane">
	            <YouTubePaneHeader>
	                <YouTubePaneHeaderImage src="/static/images/header_icon_tt (5).png" alt="TikTok" />
	                <YouTubePaneHeaderText>Tiktok</YouTubePaneHeaderText>
	            </YouTubePaneHeader>
	            <Carousel showStatus={false} showThumbs={false}>
	            {
	            	pane_num_arr_tt && pane_num_arr_tt.length > 0 && pane_num_arr_tt.map((item, index)=>(
	            	<HPPane key={index}>
	            		{
	            			tiktok[6*index] && (
	            		<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index].link}
	                	imgsrc={tiktok[6*index].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index].name}
	                	text={tiktok[6*index].name}
	                	/>
	            			)
	            		}
	            		
	                	{
	                		tiktok[6*index+1] && (
	                	<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index+1].link}
	                	imgsrc={tiktok[6*index+1].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index+1].name}
	                	text={tiktok[6*index+1].name}
	                	/>
	                			)
	                	}
	                	{
	                		tiktok[6*index+2] && (
	                	<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index+2].link}
	                	imgsrc={tiktok[6*index+2].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index+2].name}
	                	text={tiktok[6*index+2].name}
	                	/>
	                			)
	                	}
	                	{
	                		tiktok[6*index+3] && (
	                	<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index+3].link}
	                	imgsrc={tiktok[6*index+3].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index+3].name}
	                	text={tiktok[6*index+3].name}
	                	/>
	                			)
	                	}
	                	{
	                		tiktok[6*index+4] && (
	                	<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index+4].link}
	                	imgsrc={tiktok[6*index+4].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index+4].name}
	                	text={tiktok[6*index+4].name}
	                	/>
	                			)
	                	}
	                	{
	                		tiktok[6*index+5] && (
	                	<HPYutubeItem 
	                	onClick={display_tiktok}
	                	link={tiktok[6*index+5].link}
	                	imgsrc={tiktok[6*index+5].imgsrc}
	                	videoid = {tiktok[6*index].video_id}
	                	alt={tiktok[6*index+5].name}
	                	text={tiktok[6*index+5].name}
	                	/>
	                			)
	                	}
	                	

	                  <HPDiv></HPDiv>
	            	</HPPane>
	            	))
	            }

	            </Carousel>
	        </YouTubePane>
	        )}
	        {
	        	lang === "en" && (
	        <FacebookPane>
	            <FacebookPaneHeader>
	                <FacebookPaneHeaderImage src="/static/images/home/box_header_icon_fb.png" alt="Facebook" />
	                <FacebookPaneHeaderText>Facebook</FacebookPaneHeaderText>
	            </FacebookPaneHeader>
	            <FacebookFeed>
	                <div className="fb-page" data-href="https://www.facebook.com/BRPerformanceBelgium/" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/BRPerformanceBelgium/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/BRPerformanceBelgium/">BR-Performance Belgium</a></blockquote></div>
	            </FacebookFeed>
	            <Spacer />       
	            <FacebookContent>
	                <FacebookButton value="FACEBOOK FEED" />
	            </FacebookContent>
	        </FacebookPane>
	        	)
	        }
	        
	        <Spacer />
	        <BRPVideoPane>
            <HPLink data-link="https://www.youtube.com/embed/4Fwfab4Q_vc">
                <HPImage src="/static/images/home/promo_video.jpg" alt="BRP Video" onClick={display}></HPImage>
            </HPLink>
        </BRPVideoPane>
        <BRPLivePane>
            <HPImage src="/static/images/webcam_overlay.png" />
            <BRPLabel>
                <BRPLiveTitle>{t("brplivetitle")}</BRPLiveTitle>
                <BRPLiveText>{t("brplivetext")}</BRPLiveText>
            </BRPLabel>
            <HPLink data-link="https://live.netcamviewer.nl/BR-Performance/432">
                <OpenStreamButton value="OPEN STREAM" readOnly onClick={display} />
            </HPLink>
        </BRPLivePane>
        <Spacer />

	    </HomePanel>
	    <Brands />

        </>
    );
}
const mapStateToProps = state => ({
  lang: state.auth.lang,
  youtube: state.blogs.youtube,
  tiktok: state.blogs.tiktok,
  teamcarousel: state.blogs.teamcarousel,
  topcarousel: state.blogs.topcarousel,
})
const mapDispatchToProps = dispatch => ({
	getYoutube: getYoutube(dispatch),
	getTiktok: getTiktok(dispatch),
	getTeamCarousel: getTeamCarousel(dispatch),
	getTopCarousel: getTopCarousel(dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
