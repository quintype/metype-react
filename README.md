
# Metype React

## Introduction

> A react wrapper around metype widgets

>* Metype-Commenting-widget 
 [ *commenting platform to keep your users engaged* ]
 
>* Metype-Feed-widget [ *realtime feed of all the comments on the site* ]

>* Metype-Contribution-Widget [ *submit content to the system* ]


## Installation



> `npm i @metype/components --save`


### Usage

> `import { MetypeFeedWidget } from "@metype/components";`

> `import { MetypeCommentingWidget } from "@metype/components";`

> `import { MetypeContributionWidget } from "@metype/components";`

### Code Samples


    <MetypeCommentingWidget
          host={'<-hostname->'}
          accountId={<-account id->}
          pageURL={'<-url of current page->'}
          primaryColor={'<-Hex code of required color->'}
          className = {'<-class name for styling->}
          secondaryColor = {'<-Hex code of required color->'}
          fontColor = {'<-Hex code of required color->'} 
          windowHeight = {'<-preferable window height || defaults to the required height>'} 
          windowWidth = {'<-preferable window width || defaults to 100% width of the parent container>''} />

---

    <MetypeFeedWidget
          host={'<-hostname->'}
          accountId={<-account id->}
          primaryColor={'<-Hex code of required color->'}
          className = {'<-class name for styling->}
          secondaryColor = {'<-Hex code of required color->'}
          fontColor = {'<-Hex code of required color->'}        
          publisher={'<-publisher name->'} />       
---
    <MetypeContributionWidget
          host={'<-hostname->'}
          accountId={<-account id->}      
          publisher={'<-publisher name->'} />


### Support for third party login

> Prerequisites:

>* Login to be implemented in the parent app where metype is embedded.
>* Enable third party login in the metype dashboard settings.

### Usage

>* Generate the jwtToken after login and pass it as a prop to the `MetypeCommentingWidget` as a string.

### Code Samples


    <MetypeCommentingWidget
          host={'<-hostname->'}
          accountId={<-account id->}
          pageURL={'<-url of current page->'}
          .....
          jwt={jwt} />
          
          
>* To login the user we call the below function with jwt being passed

    this.props.jwt && window.talktype.accountUserLogin({
      jwt: this.props.jwt
    });



### Support


>![alt text](https://fea.assettype.com/quintype-metype/assets/message_icon-98a4f0974adc888a878de0ef71695d06.svg "email") metype@quintype.com

>![alt text](https://fea.assettype.com/quintype-metype/assets/phone-b46c7c759f8ad31cb986bb080b52656e.svg "phone")  +919019218218
