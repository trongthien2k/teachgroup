import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import useLocation from '../hooks/useLocation';
import Banner from './Banner';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import ClientsMap from './ClientsMap'
import History from './History/HistoryOne'
import HistoryTwo from './History/HistoryTwo'
import Technologies from './Technologies'
import SolutionsOne from './Solutions/SolutionsOne'
import SolutionsTwo from './Solutions/SolutionsTwo'
import SolutionsThree from './Solutions/SolutionsThree'
import SolutionsFour from './Solutions/SolutionsFour'
import MembersOne from './Members/MembersOne'
import MembersTwo from './Members/MembersTwo'
import MembersThree from './Members/MembersThree'
import MembersFour from './Members/MembersFour'
import MembersFive from './Members/MembersFive'
import StrongQualityFoundation from './Members/StrongQualityFoundation'
import LargeTalentPool from './Members/LargeTalentPool'
import ExperiencedInLarge from './Members/ExperiencedInLarge'
import TMASolutionsBinhDinh from './Members/TMASolutionsBinhDinh'
import TMAInnovationPark from './Members/TMAInnovationPark'
import ResearchCenter from './Members/ResearchCenter'
import DataScienceLab from './Members/DataScienceLab'
import "../assets/sass/home.scss"

function Home(props) {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const pathname = useLocation();
    const [namePage, setNamePage ] = useState("home");
    const [activeSlider, setActiveSlider] = useState(0);
    const sendData = (urlPage) => {
        props.parentCallback(urlPage);
    }
    const sendPageName = (namePage) => {
        props.classPage(namePage);
    }
    const sendStatus = (data) => {
        props.StatusCall(data);
    }
    useEffect(() => {
        sendPageName(namePage)
    }, [namePage])
    const handleSlider = async (e) => {
        let urlPage = '/';
        if(language === 'EN' || language === 'en'){
            switch(e) {
                case 1:
                    urlPage = '/about-us'
                    setNamePage('about-us')
                  break;
                case 2:
                    urlPage = '/about-us'
                    setNamePage('clients-map')
                break;
                case 3:
                    urlPage = '/history'
                    setNamePage('history')
                break;
                case 4:
                    urlPage = '/history'
                    setNamePage('history')
                break;
                case 5:
                    urlPage = '/technologies'
                    setNamePage('technologies')
                break;
                case 6:
                    urlPage = '/solutions'
                    setNamePage('solutionsOne')
                break;
                case 7:
                    urlPage = '/solutions'
                    setNamePage('solutionsTwo')
                break;
                case 8:
                    urlPage = '/solutions'
                    setNamePage('solutionsThree')
                break;
                case 9:
                    urlPage = '/solutions'
                    setNamePage('solutionsFour')
                break;
                case 10:
                    urlPage = '/members'
                    setNamePage('membersOne')
                break;
                case 11:
                    urlPage = '/members'
                    setNamePage('membersTwo')
                break;
                case 12:
                    urlPage = '/members'
                    setNamePage('membersThree')
                break;
                case 13:
                    urlPage = '/members'
                    setNamePage('membersFive')
                break;
                case 14:
                    urlPage = '/members'
                    setNamePage('strongQualityFoundation')
                break;
                case 15:
                    urlPage = '/members'
                    setNamePage('largeTalentPool')
                break;
                case 16:
                    urlPage = '/members'
                    setNamePage('experiencedInLarge')
                break;
                case 17:
                    urlPage = '/members'
                    setNamePage('TMASolutionsBinhDinh')
                break;
                case 18:
                    urlPage = '/members'
                    setNamePage('TMAInnovationPark')
                break;
                default:
                    urlPage = '/'
                    setNamePage('home')
            }
        } else {
            switch(e) {
                case 1:
                    urlPage = '/about-us'
                    setNamePage('about-us')
                  break;
                case 2:
                    urlPage = '/about-us'
                    setNamePage('clients-map')
                break;
                case 3:
                    urlPage = '/history'
                    setNamePage('history')
                break;
                case 4:
                    urlPage = '/history'
                    setNamePage('history')
                break;
                case 5:
                    urlPage = '/technologies'
                    setNamePage('technologies')
                break;
                case 6:
                    urlPage = '/solutions'
                    setNamePage('solutionsOne')
                break;
                case 7:
                    urlPage = '/solutions'
                    setNamePage('solutionsTwo')
                break;
                case 8:
                    urlPage = '/solutions'
                    setNamePage('solutionsThree')
                break;
                case 9:
                    urlPage = '/solutions'
                    setNamePage('solutionsFour')
                break;
                case 10:
                    urlPage = '/members'
                    setNamePage('membersOne')
                break;
                case 11:
                    urlPage = '/members'
                    setNamePage('membersFour')
                break;
                case 12:
                    urlPage = '/members'
                    setNamePage('membersTwo')
                break;
                case 13:
                    urlPage = '/members'
                    setNamePage('membersThree')
                break;
                case 14:
                    urlPage = '/members'
                    setNamePage('membersFive')
                break;
                case 15:
                    urlPage = '/members'
                    setNamePage('strongQualityFoundation')
                break;
                case 16:
                    urlPage = '/members'
                    setNamePage('TMASolutionsBinhDinh')
                break;
                case 17:
                    urlPage = '/members'
                    setNamePage('TMAInnovationPark')
                break;
                case 18:
                    urlPage = '/members'
                    setNamePage('researchCenter')
                break;
                case 19:
                    urlPage = '/members'
                    setNamePage('dataScienceLab')
                break;
                default:
                    urlPage = '/'
                    setNamePage('home')
            }
        }
        
       await window.history.pushState('', '', urlPage);
       await setActiveSlider(e)
       await sendData(urlPage)
       await sendStatus(true)
    }

    useEffect(() => {
        if(language === 'EN' || language === 'en'){
            switch(pathname) {
                case '/about-us':
                    setActiveSlider(1)
                    setNamePage('about-us')
                  break;
                case '/about-us':
                    setActiveSlider(2)
                    setNamePage('clients-map')
                    break;
                case '/history':
                    setActiveSlider(3)
                    setNamePage('history')
                    break;
                case '/history':
                    setActiveSlider(4)
                    setNamePage('history')
                    break;
                case '/technologies':
                    setActiveSlider(5)
                    setNamePage('technologies')
                    break;
                case '/solutions':
                    setActiveSlider(6)
                    setNamePage('solutionsOne')
                    break;
                case '/solutions':
                    setActiveSlider(7)
                    setNamePage('solutionsTwo')
                    break;
                case '/solutions':
                    setActiveSlider(8)
                    setNamePage('solutionsThree')
                    break;
                case '/solutions':
                    setActiveSlider(9)
                    setNamePage('solutionsFour')
                    break;
                case '/members':
                    setActiveSlider(10)
                    setNamePage('membersOne')
                    break;
                case '/members':
                    setActiveSlider(11)
                    setNamePage('membersTwo')
                    break;
                case '/members':
                    setActiveSlider(12)
                    setNamePage('membersThree')
                    break;
                case '/members':
                    setActiveSlider(13)
                    setNamePage('membersFive')
                    break;
                case '/members':
                    setActiveSlider(14)
                    setNamePage('strongQualityFoundation')
                    break;
                case '/members':
                    setActiveSlider(15)
                    setNamePage('largeTalentPool')
                    break;
                case '/members':
                    setActiveSlider(16)
                    setNamePage('experiencedInLarge')
                    break;
                case '/members':
                    setActiveSlider(17)
                    setNamePage('TMASolutionsBinhDinh')
                    break;
                case '/members':
                    setActiveSlider(18)
                    setNamePage('TMAInnovationPark')
                    break;
                default:
                    setActiveSlider(0)
                    setNamePage('home')
            }
        }else {
            switch(pathname) {
                case '/about-us':
                    setActiveSlider(1)
                    setNamePage('about-us')
                  break;
                case '/about-us':
                    setActiveSlider(2)
                    setNamePage('clients-map')
                    break;
                case '/history':
                    setActiveSlider(3)
                    setNamePage('history')
                    break;
                case '/history':
                    setActiveSlider(4)
                    setNamePage('history')
                    break;
                case '/technologies':
                    setActiveSlider(5)
                    setNamePage('technologies')
                    break;
                case '/solutions':
                    setActiveSlider(6)
                    setNamePage('solutionsOne')
                    break;
                case '/solutions':
                    setActiveSlider(7)
                    setNamePage('solutionsTwo')
                    break;
                case '/solutions':
                    setActiveSlider(8)
                    setNamePage('solutionsThree')
                    break;
                case '/solutions':
                    setActiveSlider(9)
                    setNamePage('solutionsFour')
                    break;
                case '/members':
                    setActiveSlider(10)
                    setNamePage('membersOne')
                    break;
                case '/members':
                    setActiveSlider(11)
                    setNamePage('membersFour')
                    break;
                case '/members':
                    setActiveSlider(12)
                    setNamePage('membersTwo')
                    break;
                case '/members':
                    setActiveSlider(13)
                    setNamePage('membersThree')
                    break;
                case '/members':
                    setActiveSlider(14)
                    setNamePage('membersFive')
                    break;
                case '/members':
                    setActiveSlider(15)
                    setNamePage('strongQualityFoundation')
                    break;
                case '/members':
                    setActiveSlider(16)
                    setNamePage('TMASolutionsBinhDinh')
                    break;
                case '/members':
                    setActiveSlider(17)
                    setNamePage('TMAInnovationPark')
                    break;
                case '/members':
                    setActiveSlider(18)
                    setNamePage('researchCenter')
                    break;
                case '/members':
                    setActiveSlider(19)
                    setNamePage('dataScienceLab')
                    break;
                default:
                    setActiveSlider(0)
                    setNamePage('home')
            }
        }
        
        sendStatus()
    }, [pathname])

    return (
        <>
        <div className="none-desktop">
            {
                language === 'EN' || language === 'en' ?
                <div className={`home-page ${namePage}` }>
                    <Carousel interval={null} activeIndex={activeSlider} onSelect={(e) => handleSlider(e)}>
                    <Carousel.Item>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item>
                        <AboutUs />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ClientsMap />
                    </Carousel.Item>
                    <Carousel.Item>
                        <History /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <HistoryTwo /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Technologies /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsOne />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsTwo />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsThree />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsFour />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersOne />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersTwo />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersThree />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersFive />
                    </Carousel.Item>
                    <Carousel.Item>
                        <StrongQualityFoundation />
                    </Carousel.Item>
                    <Carousel.Item>
                        <LargeTalentPool />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExperiencedInLarge />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TMASolutionsBinhDinh />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TMAInnovationPark />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <ContactUs />
                    </Carousel.Item> */}
                    {/* <Technology />
                    <SolutionsServices />
                    <TechnologySolutions lang={lang} />
                    <TMATechGroup />
                    <MediaAwards />
                    <History lang={lang} /> */}
                    {/* <ContactUs/> */}
                    {/* <Footer /> */}
                    </Carousel>
                </div>
                : 
                <div className={`home-page ${namePage}` }>
                    <Carousel interval={null} activeIndex={activeSlider} onSelect={(e) => handleSlider(e)}>
                    <Carousel.Item>
                        <Banner />
                    </Carousel.Item>
                    <Carousel.Item>
                        <AboutUs />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ClientsMap />
                    </Carousel.Item>
                    <Carousel.Item>
                        <History /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <HistoryTwo /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Technologies /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsOne />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsTwo />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsThree />
                    </Carousel.Item>
                    <Carousel.Item>
                        <SolutionsFour />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersOne />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersFour />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersTwo />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersThree />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MembersFive />
                    </Carousel.Item>
                    <Carousel.Item>
                        <StrongQualityFoundation />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TMASolutionsBinhDinh />
                    </Carousel.Item>
                    <Carousel.Item>
                        <TMAInnovationPark />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ResearchCenter />
                    </Carousel.Item>
                    <Carousel.Item>
                        <DataScienceLab />
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <ContactUs />
                    </Carousel.Item> */}
                    {/* <Technology />
                    <SolutionsServices />
                    <TechnologySolutions lang={lang} />
                    <TMATechGroup />
                    <MediaAwards />
                    <History lang={lang} /> */}
                    {/* <ContactUs/> */}
                    {/* <Footer /> */}
                    </Carousel>
                </div>
            }
        </div>

        {/* mobile */}
        <div className="mobile-page">
            {
                // EN
                language === 'EN' || language === 'en' ?
                <div>
                     <div id='home'>
                        <Banner />
                    </div>
                    {/* AboutUs */}
                    <div id='/about-us'>
                        <AboutUs />
                    </div>
                    <div>
                        <ClientsMap /> 
                    </div>
                    {/* history */}
                    <div id='/history'>
                        <History /> 
                    </div>
                    <div>
                        <HistoryTwo /> 
                    </div>
                    {/* Technologies */}
                    <div id='/technologies'>
                        <Technologies /> 
                    </div>
                    {/* solutions */}
                    <div id='/solutions'>
                        <SolutionsOne />
                    </div>
                    <div>
                        <SolutionsTwo />
                    </div>
                    <div>
                        <SolutionsThree />
                    </div>
                    <div>
                        <SolutionsFour />
                    </div>
                    {/* Members */}
                    <div id="/members">
                        <MembersOne />
                    </div>
                    <div>
                        <MembersTwo />
                    </div>
                    <div>
                        <MembersThree />
                    </div>
                    <div>
                        <MembersFive />
                    </div>
                    <div>
                        <StrongQualityFoundation />
                    </div>
                    <div>
                        <LargeTalentPool />
                    </div>
                    <div>
                        <ExperiencedInLarge />
                    </div>
                    <div>
                        <TMASolutionsBinhDinh />
                    </div>
                    <div>
                        <TMAInnovationPark />
                    </div>
                </div>
                :
                // VN
                <div>
                    <div id='home'>
                        <Banner />
                    </div>
                    {/* AboutUs */}
                    <div id='/about-us'>
                        <AboutUs />
                    </div>
                    <div>
                        <ClientsMap /> 
                    </div>
                    <div>
                        <ClientsMap /> 
                    </div>
                    {/* history */}
                    <div id='/history'>
                        <History /> 
                    </div>
                    <div>
                        <HistoryTwo /> 
                    </div>
                    {/* Technologies */}
                    <div id='/technologies'>
                        <Technologies /> 
                    </div>
                    {/* solutions */}
                    <div id='/solutions'>
                        <SolutionsOne />
                    </div>
                    <div>
                        <SolutionsTwo />
                    </div>
                    <div>
                        <SolutionsThree />
                    </div>
                    <div>
                        <SolutionsFour />
                    </div>
                    {/* Members */}
                    <div id="/members">
                        <MembersOne />
                    </div>
                    <div>
                        <MembersFour />
                    </div>
                    <div>
                        <MembersTwo />
                    </div>
                    <div>
                        <MembersThree />
                    </div>
                    <div>
                        <MembersFive />
                    </div>
                    <div>
                        <StrongQualityFoundation />
                    </div>
                    <div>
                        <TMASolutionsBinhDinh />
                    </div>
                    <div>
                        <TMAInnovationPark />
                    </div>
                    <div>
                        <ResearchCenter />
                    </div>
                    <div>
                        <DataScienceLab />
                    </div>
                </div>
            }
        </div>
            
        </>
    );
}

export default Home;