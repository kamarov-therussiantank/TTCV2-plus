// Injection 
if (window.location.hostname.includes("tanktrouble.com")) {
    function injectJSCode(code) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.textContent = code;
        document.documentElement.appendChild(scriptElement);
    }

    function injectJSLink(src) {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'text/javascript');
        scriptElement.setAttribute('src', src);
        document.documentElement.appendChild(scriptElement);
    }

    // Function to dynamically add custom CSS
    const addCustomStyle = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

    // Get the hostname of the current website
    const site = window.location.hostname;
    if (site.includes("tanktrouble.com")) {
       addCustomStyle(`
#game {
    position: relative;
    left: -10px;
    top: 0px;
}
.button.warning {
    background: #f10808;
    font-family: Arial;
}
    .premium #header {
        background-image: url(../assets/images/header/background.png);
        background-size: 120px 120px;
}
    .snippet {
        background: #fff;
        border: #333 2px solid;
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0,0,0, .5)
    }
    .snippet .header {
        background: #dadada;
        color: #fff;
        border-radius: 3px;
        border: #bababa 2px solid;
        margin-bottom: 5px;
        text-shadow: -1px -1px 0 #000,  
                      1px -1px 0 #000,
                     -1px  1px 0 #000,
                      1px  1px 0 #000;
    }
    #scrapyardSnippet .content {
        margin-left: 4px;
        margin-right: 4px;
    }
    #scrapyardSnippet {
        width: 133px;
        padding: 3px;
    }
    .shopItem svg text {
       text-shadow: none;
       stroke: none;
    }
.shopItem {
    background: #555;
    border-radius: 3px;
    border: #666 3px solid;
    box-shadow: #000 0 3px 5px 0;
    border-radius: 7px;
}
    .shopItem.info button.info {
    width: 34px;
    float: right;
    right: 10px;
    color: white;
    background: #0097fb;
    }
    #teaser-25 .mode {
        color: red;
    }
    .forum .bubble {
        background-color: #f2f2f2;
        border: #333 2px solid;
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0,0,0, .5)
    }
    .body {
        font-size: 14px;
    }
    .forum .tank {
        font-family: 'TankTrouble';
        font-size: 14px;
    }
   .box .content {
    background: #d5d5d5;
    border-radius: 5px;
    border: #999 3px solid;
    padding: 5px;
    width: 250px;
}
.box .spaced {
    padding: 5px;
    left: 0px;
    border: none;
    background: none;
    box-shadow: none;
}
    #overlay {
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    background-color: rgb(0 0 0 / 85%);
}
    #overlay .newGame .premium {
    background: #aaa;
    border: #666 4px solid;
    border-radius: 7px;
    box-shadow: 0 5px 7px 0 rgba(0,0,0, .5);
   }
   #overlay .newGame .premium::before {
    content: "";
    width: 160px;
    height: 180px;
    position: absolute;
    top: -115px;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(https://cdn.tanktrouble.com/RELEASE-2023-09-06-01/assets/images/tankInfo/accountActive@2x.png);
    background-size: 160px 180px;
}
    #overlay .messages .message {
        background: #1ad72a;
        color: #fff;
        border-radius: 2px;
        text-shadow: none;
    }
    #overlay .messages .message.important {
        background: #e01f1f;
        color: #fff;
        border-radius: 2px;
        text-shadow: none;
     }
     #overlay .admin .attention {
        text-shadow: none;
     }
#overlay .messages textarea {
    box-sizing: border-box;
    width: 490px;
}
    .box .tab.right {
        background: #999;
    }
    .box .tab.left {
        background: #999;
    }
   #tankinfo .username {
    position: relative;
    z-index: 1;
    height: 28px;
    background: #979797;
    border: 3px #0000002e solid;
    border-radius: 4px;
}
   #tankinfo .icon {
    position: absolute;
    width: 320px;
    height: 192px;
    left: calc(50% + 5px);
    top: -162px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
     .achievement.unlockedAndSeen {
        background: linear-gradient(to bottom, #ccc, #666);
        box-shadow: #000 0px 3px 3px 0px;
        text-shadow: none;
        color: #000;
    }
    .achievement {
        background: #666;
        text-shadow: none;
        color: #fff;
    }
    .achievement .progress {
        background: linear-gradient(to bottom, #e5c766, #a68826);
    }
    .note {
        color: #000;
    }
    #overlay input[type="checkbox"]+label::before {
    content: '';
    background: red;
    border: 2px solid #fff;
    transition: background .3s;
    border-radius: 5px;
    font-size: 35px;
    line-height: 24px;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
}
#overlay input[type="checkbox"]:checked+label::before {
    border-color: #fff !important;
    background: limegreen;
}
#content {
    max-width: 1884px !important;
    width: calc(100%) !important;
}
.horizontalAdSlot,
.verticalAdSlot,
#leftBanner,
#rightBanner,
#topBanner {
    display: none !important;
}
.buttonGroup {
    display: inline-block;
    background: #ccc;
    border-radius: 7px;
    border: #666 3px solid;
    margin-bottom: 10px;
}
#chat {
    -webkit-filter: none;
    filter: none;
    -webkit-transform: translateZ(0);
    position: fixed;
    z-index: 10;
    width: 1px;
    height: 1px;
}
#chat .body {
    width: 242px;
    height: 140px;
    margin-left: 20px;
    margin-top: 0px !important;
    cursor: default;
    background: #00000014;
    padding: 2px 2px 2px 5px;
}
#chat .content {
    font-family: verdana;
    font-size: 10pt;
    width: 0;
    pointer-events: none;
    transition: width .3s .2s;
    background: none;
}
#chat form {
    border-radius: 3px;
    background-color: #dfdfdf;
    pointer-events: auto;
    animation-name: chatsend;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-direction: normal;
    animation-iteration-count: infinite;
    padding: 2px 2px 2px 2px;
    margin-left: 20px;
    left: 0px;
    border: none;
    width: 245px;
    box-shadow: none;
}
#chat:not(.open) form {
	display: none;
    background: none;
}
#chat.opening .content, #chat.open .content {
    width: 269px;
    transition: width .250s;
}
#chat.opening textarea, #chat.open textarea {
    width: 235px;
    opacity: 1;
    cursor: inherit;
}
#chat textarea {
    font-family: 'Arial';
    font-weight: bold;
    position: relative;
    left: 5px;
    width: 0;
    min-height: 16px !important;
    opacity: 0;
    margin: 0;
    padding: 1px 2px;
    border: none !important;
    outline: none !important;
    overflow-y: hidden;
    resize: none;
    background: none;
    cursor: default;
}
       `);
    }
}
