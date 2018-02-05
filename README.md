
# Metype React

## Introduction

> A react wrapper around metype widgets

>* Metype-Commenting-widget 
 [ *commenting platform to keep your users engaged* ]
 
>* Metype-Feed-widget [ *realtime feed of all the comments on the site* ]


## Installation



> `npm i @metype/components --save`


### Usage

> `import { MetypeFeedWidget } from "@metype/components";`

> `import { MetypeWidget } from "@metype/components";`

### Code Samples


    <MetypeWidget
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


### Support


>![alt text](https://fea.assettype.com/quintype-metype/assets/message_icon-98a4f0974adc888a878de0ef71695d06.svg "email") metype@quintype.com

>![alt text](https://fea.assettype.com/quintype-metype/assets/phone-b46c7c759f8ad31cb986bb080b52656e.svg "phone")  +919019218218
