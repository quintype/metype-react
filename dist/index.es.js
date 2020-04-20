import React, { useEffect } from 'react';

var scriptLoader = function scriptLoader(host, callback) {
  var metypeScript = document.createElement('script');
  metypeScript.setAttribute("src", host + "/quintype-metype/assets/application.js");
  metypeScript.setAttribute("data-metype-script", "1");
  metypeScript.async = 1;
  metypeScript.onload = function () {
    return callback();
  };
  document.body.appendChild(metypeScript);
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MetypeFeedWidget = function (_React$Component) {
  inherits(MetypeFeedWidget, _React$Component);

  function MetypeFeedWidget(props) {
    classCallCheck(this, MetypeFeedWidget);
    return possibleConstructorReturn(this, (MetypeFeedWidget.__proto__ || Object.getPrototypeOf(MetypeFeedWidget)).call(this, props));
  }

  createClass(MetypeFeedWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      !window.talktype && scriptLoader(this.props.host, function () {
        return _this2.initFeed(_this2.randomNumber);
      });
    }
  }, {
    key: "initFeed",
    value: function initFeed(randomNumber) {
      if (window.talktype) {
        window.talktype.feedWidgetIframe(document.getElementById('feed-metype-container'));
      }
    }
  }, {
    key: "metypeToggleButton",
    value: function metypeToggleButton() {
      global && global.talktype && window.talktype.toggleButton();
    }
  }, {
    key: "metypeSlideToggleButton",
    value: function metypeSlideToggleButton() {
      global && global.talktype && window.talktype.slideButton();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          primaryColor = _props.primaryColor,
          publisher = _props.publisher,
          host = _props.host,
          accountId = _props.accountId,
          className = _props.className,
          secondaryColor = _props.secondaryColor,
          fontColor = _props.fontColor;


      return React.createElement(
        "div",
        { id: "feed-metype-container",
          ref: function ref(el) {
            return _this3.metypeFeedWidget = el;
          },
          className: "feed-iframe-container",
          "data-metype-account-id": accountId,
          "data-metype-host": host,
          "data-metype-publisher": publisher,
          "data-metype-primary-color": primaryColor || '#3a9fdd',
          "data-metype-bg-color": secondaryColor || '#fff',
          "data-metype-font-color": fontColor || '#4a4a4a' },
        React.createElement("div", { id: "metype-clickthru", className: "metype-clickthru", onClick: function onClick() {
            return _this3.metypeToggleButton();
          } }),
        React.createElement("div", { className: "metype-feed-slide-icon", id: "metype-feed-slide-icon", onClick: function onClick() {
            return _this3.metypeSlideToggleButton();
          } })
      );
    }
  }]);
  return MetypeFeedWidget;
}(React.Component);

var MetypeCommentingWidget = function (_React$Component) {
  inherits(MetypeCommentingWidget, _React$Component);

  function MetypeCommentingWidget(props) {
    classCallCheck(this, MetypeCommentingWidget);

    var _this = possibleConstructorReturn(this, (MetypeCommentingWidget.__proto__ || Object.getPrototypeOf(MetypeCommentingWidget)).call(this, props));

    _this.randomNumber = new Date().getMilliseconds();
    return _this;
  }

  createClass(MetypeCommentingWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      !window.talktype && scriptLoader(this.props.host, function () {
        return _this2.initWidget(_this2.randomNumber);
      });
      this.initWidget(this.randomNumber);
    }
  }, {
    key: "metypeToggleButton",
    value: function metypeToggleButton() {
      !global && window.talktype && window.talktype.toggleButton();
    }
  }, {
    key: "metypeSlideToggleButton",
    value: function metypeSlideToggleButton() {
      !global && window.talktype && window.talktype.slideButton();
    }
  }, {
    key: "initWidget",
    value: function initWidget(randomNumber) {
      if (window.talktype) {
        this.props.jwt && window.talktype.accountUserLogin({
          jwt: this.props.jwt
        });
        window.talktype.commentWidgetIframe(document.getElementById("metype-container-" + randomNumber));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          primaryColor = _props.primaryColor,
          publisher = _props.publisher,
          host = _props.host,
          accountId = _props.accountId,
          className = _props.className,
          secondaryColor = _props.secondaryColor,
          fontColor = _props.fontColor,
          pageURL = _props.pageURL,
          windowHeight = _props.windowHeight,
          windowWidth = _props.windowWidth;

      return React.createElement(
        "div",
        null,
        React.createElement("div", { id: "metype-container-" + this.randomNumber,
          ref: function ref(el) {
            return _this3.metypeWidget = el;
          },
          className: "iframe-container " + className,
          "data-metype-account-id": accountId,
          "data-metype-host": host //Change fallback to deployed domain name
          , "data-metype-primary-color": primaryColor || '#3a9fdd',
          "data-metype-bg-color": secondaryColor || 'transparent',
          "data-metype-font-color": fontColor || '#4a4a4a',
          "data-metype-window-width": windowWidth || (!global ? window.screen.width : 700),
          "data-metype-window-height": windowHeight || (!global ? window.screen.height : 700),
          "data-metype-page-url": pageURL })
      );
    }
  }]);
  return MetypeCommentingWidget;
}(React.Component);

var MetypeContributionWidget = function (_React$Component) {
  inherits(MetypeContributionWidget, _React$Component);

  function MetypeContributionWidget(props) {
    classCallCheck(this, MetypeContributionWidget);

    var _this = possibleConstructorReturn(this, (MetypeContributionWidget.__proto__ || Object.getPrototypeOf(MetypeContributionWidget)).call(this, props));

    _this.randomNumber = new Date().getMilliseconds();
    return _this;
  }

  createClass(MetypeContributionWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      !window.talktype && scriptLoader(this.props.host, function () {
        return _this2.initWidget(_this2.randomNumber);
      });
      this.initWidget(this.randomNumber);
    }
  }, {
    key: "initWidget",
    value: function initWidget(randomNumber) {
      if (window.talktype) {
        window.talktype.contributionWidgetIframe(document.getElementById("metype-contribution-" + randomNumber));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          host = _props.host,
          accountId = _props.accountId,
          publisher = _props.publisher;


      return React.createElement(
        "div",
        null,
        React.createElement("div", { id: "metype-contribution-" + this.randomNumber,
          "data-metype-account-id": accountId,
          "data-metype-host": host,
          "data-metype-publisher": publisher })
      );
    }
  }]);
  return MetypeContributionWidget;
}(React.Component);

var MetypeReactionsWidget = function MetypeReactionsWidget(props) {
  var accountId = props.accountId,
      host = props.host,
      storyUrl = props.storyUrl,
      storyId = props.storyId;


  useEffect(function () {
    !window.talktype && scriptLoader(host, function () {
      return initPageReactions(storyId);
    });
    initPageReactions(storyId);
  }, []);

  var initPageReactions = function initPageReactions() {
    if (window.talktype) {
      window.talktype.pageReactionsIframe(document.getElementById("metype-page-reactions-container-" + storyId));
    }
  };

  return React.createElement(
    "div",
    {
      id: "metype-page-reactions-container-" + storyId,
      "data-metype-account-id": accountId,
      "data-metype-host": host,
      "data-metype-page-url": storyUrl },
    ">"
  );
};

export { MetypeFeedWidget, MetypeCommentingWidget, scriptLoader, MetypeContributionWidget, MetypeReactionsWidget };
