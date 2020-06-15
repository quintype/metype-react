import React from "react";
import {scriptLoader} from "./metype-script-loader";

class MetypeCommentingWidget extends React.Component {

  constructor(props) {
    super(props);
    this.randomNumber = new Date().getMilliseconds();
  }

  componentDidMount() {
    !window.talktype && scriptLoader(this.props.host, () => this.initWidget(this.randomNumber));
    this.initWidget(this.randomNumber);
  }

  metypeToggleButton(){
    (!global && window.talktype) && window.talktype.toggleButton();
  }

  metypeSlideToggleButton(){
    (!global && window.talktype) && window.talktype.slideButton();
  }

  initWidget(randomNumber){
    if (window.talktype) {
      this.props.jwt && window.talktype.accountUserLogin({
        jwt: this.props.jwt
      });
      window.talktype.pageMetadataSetter(this.props.accountId, this.props.pageURL, {"section": ["cooking1","tech1"], "author_ids": [1000]}, this.props.host);
      window.talktype.commentWidgetIframe(document.getElementById(`metype-container-${randomNumber}`));
    }
  }

  render() {
    const {primaryColor, publisher, host, accountId, className, secondaryColor, fontColor, pageURL, windowHeight, windowWidth, fontUrl, fontFamily} = this.props;
    return <div>
      <div id={`metype-container-${this.randomNumber}`}
           ref={(el) => this.metypeWidget = el }
           className={`iframe-container ${className}`}
           data-metype-account-id={accountId}
           data-metype-host={host} //Change fallback to deployed domain name
           data-metype-primary-color={primaryColor || '#3a9fdd'}
           data-metype-bg-color={secondaryColor || 'transparent'}
           data-metype-font-color={fontColor || '#4a4a4a'}
           data-metype-window-width={windowWidth || (!global ? window.screen.width : 700)}
           data-metype-window-height={windowHeight || (!global ? window.screen.height : 700)}
           data-metype-page-url={pageURL}
           data-metype-font-url={fontUrl || ""}
           data-metype-font-family={fontFamily || ""}>
      </div>
    </div>
  }
}

export {MetypeCommentingWidget};