

export default function TopCard(props) {
  
  const { isDarkMode } = props;    return (
    <div className={`${props.ContainerName}  ${isDarkMode ? 'CardBGNight' : 'CardBGDay'}`}>
              <div className={` cardPadding ${isDarkMode ? 'FontSmallNight' : 'FontDay'}`}>
                {props.MediaIcon}&nbsp;&nbsp;{props.userHandle}
              </div>

              <div className={`cardtextBig cardPadding ${isDarkMode ? 'FontNight' : 'FontDay'}`}>{props.BigNum}</div>
              <p className={`letterSpacing ${isDarkMode ? 'FontSmallNight' : 'FontSmallDay'}`}>{props.Followers}</p>
              <div className="cardPadding"><div className={props.className}></div>
              <div className={props.className}>{props.Icon}{' '}{props.Percents}</div>
              
              </div>
            </div>
            )
}