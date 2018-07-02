import React from "react";
import {scriptLoader} from "./metype-script-loader";


class MetypeStoryReactions extends React.Component {

  componentDidMount(){
    this.checkScriptLoad();
  }

  checkScriptLoad() {
    if(window.talktype){
      this.initReactionsScript();
    }else {
      scriptLoader(this.props.host,  () => this.initReactionsScript());
    }
  }

  initReactionsScript() {
    window.talktype && window.talktype(() =>  {
      talktype.pageReactionsIframe(this.metypeReactionsContainer);
    });
  }

  render() {
    const { accountId,
      host = "https://www.metype.com",
      pageUrl = (window && window.location) ? window.location.href : '' } = this.props;
    return <div id="metype-page-reactions-container"
                ref={(el) => this.metypeReactionsContainer = el }
                data-metype-account-id={accountId}
                data-metype-host={host}
                data-metype-page-url={pageUrl}></div>
  }
}

export {MetypeStoryReactions};