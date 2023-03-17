import { Row } from "react-bootstrap";
import "./Style.css";
import FBIcon from "../../assets/images/icon-facebook.svg";
import IGIcon from "../../assets/images/icon-instagram.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import YouTubeIcon from "../../assets/images/icon-youtube.svg";
import DownIcon from "../../assets/images/icon-down.svg";
import UpIcon from "../../assets/images/icon-up.svg";
import DayNightToggle from "../togglecomponent/ToggleComponent";
import BottomComponeent from "../bottomcomponents/BottomComponent";
import TopCard from "../topcomponents/TopComponents";
import { useState } from "react";

export default function DashBoard(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };



  return (
<div className={`${isDarkMode ? 'blackBG' : 'whiteBG'}`}>
    <div className={`container-fluid textClass ${isDarkMode ? 'BGNight' : 'BgDay'}`}>
      
      <div className="container">
        <Row className="rowPadding">
          <div className="col-lg-9 col-sm-12">
            <h1 className={`${isDarkMode ? 'FontNight' : 'FontDay'}`}>{props.MediaHeader}</h1>
            <p style={{fontWeight: 700}} className={` ${isDarkMode ? 'FontSmallNight' : 'BigTextColor'}`}>Total Follwers: 23,004</p>
          </div>

               <hr className="hrLine"></hr>
               
          <div className="col-lg-2 col-sm-6 TextDisplay">
            <div style={{paddingTop: 25, fontWeight: 700}} className={`FontSmallNight`}>Dark Mode {'  '}</div>
          </div>

          <div className="col-lg-1 col-sm-6 d-flex justify-content-end">
            <DayNightToggle 
            toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>{" "}
          </div>
        </Row>
        <br></br>
        <Row >
          <div className="col-lg-3 col-sm-12 text-center ">
            <TopCard
            isDarkMode={isDarkMode}
            ContainerName={"FBCardDay"}
            MediaIcon={<img src={FBIcon}/>}
            userHandle={"@nathanf"}
            BigNum={"1987"}
            Followers={"FOLLOWERS"}
            className={"upfont"}
            Icon={<img src={UpIcon}/>}
            Percents={"12 Today"}/>
          </div>

          <div className="col-lg-3 col-sm-12 text-center mobilePadding">
          <TopCard
            isDarkMode={isDarkMode}
            ContainerName={"twitterCardDay"}
            MediaIcon={<img src={TwitterIcon}/>}
            userHandle={"@nathanf"}
            BigNum={"1044"}
            Followers={"FOLLOWERS"}
            className={"upfont"}
            Icon={<img src={UpIcon}/>}
            Percents={"99 Today"}/>
          </div>

          <div className="col-lg-3 col-sm-12 text-center mobilePadding">
          <TopCard
            isDarkMode={isDarkMode}
            ContainerName={"IGCardDay"}
            MediaIcon={<img src={IGIcon}/>}
            userHandle={" @realnathanf"}
            BigNum={"11k"}
            Followers={"FOLLOWERS"}
            className={"upfont"}
            Icon={<img src={UpIcon}/>}
            Percents={"1099 Today"}/>
          </div>

          <div className="col-lg-3 col-sm-12 text-center mobilePadding">
          <TopCard
            isDarkMode={isDarkMode}
            ContainerName={"YTCardDay"}
            MediaIcon={<img src={YouTubeIcon}/>}
            userHandle={"Nathan F."}
            BigNum={"8239"}
            Followers={"SUBSCRIBERS"}
            className={"downfont"}
            Icon={<img src={DownIcon}/>}
            Percents={"144 Today"}/>
          </div>
        </Row>
        <br/>
        <Row>
          <h3 className={`${isDarkMode ? 'FontNight' : 'BigTextDay'}`}>Overview - Today</h3>
        </Row>
        <br/>

        {/* ------------------Bottom Half of Code------------------*/}

        <Row>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
             isDarkMode={isDarkMode}
             pageInfo={"Page Views"}
             Icon={<img src={UpIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={FBIcon}/>}
             BigNum= {87}
             Percents={"3%"}
             className={"upfont"}/>
          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
             isDarkMode={isDarkMode}
             pageInfo={"Likes"}
             Icon={<img src={DownIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={FBIcon}/>}
             BigNum= {52}
             Percents={"2%"}
             className={"downfont"}/>
          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
             isDarkMode={isDarkMode}
             pageInfo={"Likes"}
             Icon={<img src={UpIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={IGIcon}/>}
             BigNum= {5462}
             Percents={"2257%"}
             className={"upfont"}/>
          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
             isDarkMode={isDarkMode}
             pageInfo={"Page Views"}
             Icon={<img src={UpIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={IGIcon}/>}
             BigNum= {"52k"}
             Percents={"1375%"}
             className={"upfont"}/>
          </div>    
        </Row>
        <br/>
        <Row>
          <div className="col-lg-3 col-sm-12 mobilePadding">
            <BottomComponeent
            isDarkMode={isDarkMode}
             pageInfo={"Retweets"}
             Icon={<img src={UpIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={TwitterIcon}/>}
             BigNum= {117}
             Percents={"303%"}
             className={"upfont"}/>
          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">
            <BottomComponeent
            isDarkMode={isDarkMode}
             pageInfo={"Likes"}
             Icon={<img src={UpIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={TwitterIcon}/>}
             BigNum= {507}
             Percents={"5573"}
             className={"upfont"}/>
          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
            isDarkMode={isDarkMode}
             pageInfo={"Likes"}
             Icon={<img src={DownIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={YouTubeIcon}/>}
             BigNum= {"107"}
             Percents={"19%"}
             className={"downfont"}/>

          </div>
          <div className="col-lg-3 col-sm-12 mobilePadding">

            <BottomComponeent
            isDarkMode={isDarkMode}
             pageInfo={"Page Views"}
             Icon={<img src={DownIcon}/>}
             Percent={"3%"}
             MediaIcon={<img src={YouTubeIcon}/>}
             BigNum= {"1407"}
             Percents={"12%"}
             className={"downfont"}/>

          </div>    
        </Row>
        </div>
      </div>
    </div>
  );
}
