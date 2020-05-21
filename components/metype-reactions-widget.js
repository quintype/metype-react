import React, { useEffect } from "react";
import { scriptLoader } from "./metype-script-loader";

const MetypeReactionsWidget = (props) => {
  const { accountId, host, storyUrl, storyId, fontUrl, fontFamily } = props;

  useEffect(() => {
    !window.talktype &&
      scriptLoader(host, () =>
        initPageReactions(storyId)
      );
    initPageReactions(storyId);
  }, []);

  const initPageReactions = () => {
    if (window.talktype) {
      window.talktype.pageReactionsIframe(
        document.getElementById(
          `metype-page-reactions-container-${storyId}`
        )
      );
    }
  }

  return (
    <div
      id={`metype-page-reactions-container-${storyId}`}
      data-metype-account-id={accountId}
      data-metype-host={host}
      data-metype-page-url={storyUrl}
      data-metype-font-url={fontUrl || ""}
      data-metype-font-family={fontFamily || ""}>
    </div>
  );
}

export { MetypeReactionsWidget };