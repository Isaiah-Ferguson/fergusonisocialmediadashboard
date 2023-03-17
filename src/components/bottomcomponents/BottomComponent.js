import { Row } from "react-bootstrap";


export default function BottomComponeent(props) {
  const { isDarkMode } = props;

    return(
<div className={`SMcardDay  ${isDarkMode ? 'CardBGNight' : 'CardBGDay'}`}>
              <Row className="smallContainerDivHeight align-item-center">
                <div style={{paddingLeft: 50}} className={`col-6 ${isDarkMode ? 'FontSmallNight' : 'FontDay'}`}>{props.pageInfo}</div>
                <div style={{paddingRight: 50}} className="col-6 col-6 d-flex justify-content-end">{props.MediaIcon} </div>
              </Row>
              <Row className="smallContainerDivHeight ">
                <div style={{paddingLeft: 50}} className={`col-6 smallContainerBIGText ${isDarkMode ? 'FontSmallNight' : 'FontDay'}`}>{props.BigNum}</div>
                <div style={{paddingRight: 50}} className="col-6 d-flex justify-content-end"><div className={props.className}>
                {props.Icon}{' '}{props.Percents}
                </div>
                    </div>
              </Row>
            </div>
    )
    
}