import React from "react";
import {scriptLoader} from "./metype-script-loader";

class MetypeContributionWidget extends React.Component {

  constructor(props) {
    super(props);
    this.randomNumber = new Date().getMilliseconds();
  }

  componentDidMount() {
    !window.talktype && scriptLoader(this.props.host, () => this.initWidget(this.randomNumber));
    this.initWidget(this.randomNumber);
  }

  initWidget(randomNumber){
    if (window.talktype) {
      window.talktype.contributionWidgetIframe(document.getElementById(`metype-contribution-${randomNumber}`));
    }
  }

  render() {
    const {host, accountId, publisher, fontFamily, fontUrl} = this.props;

    return <div>
      <div id={`metype-contribution-${this.randomNumber}`}
           data-metype-account-id={accountId}
           data-metype-host={host}
           data-metype-publisher={publisher}
           data-metype-font-url={fontUrl || ""}
           data-metype-font-family={fontFamily || ""}>
      </div>
    </div>
  }
}

export { MetypeContributionWidget };