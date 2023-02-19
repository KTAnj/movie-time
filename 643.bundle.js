"use strict";(self.webpackChunkmovie_time=self.webpackChunkmovie_time||[]).push([[643],{643:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(294),o=r(998),l=r(335),s=r(379),i=r.n(s),a=r(795),c=r.n(a),h=r(569),u=r.n(h),p=r(565),d=r.n(p),f=r(216),m=r.n(f),g=r(589),v=r.n(g),y=r(443),w={};w.styleTagTransform=v(),w.setAttributes=d(),w.insert=u().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=m(),i()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;const E=function(e){var t=e.title,r=e.image,o=e.id,s=e.year,i=(0,l.s0)();return n.createElement("div",{className:"card"},n.createElement("img",{className:"card-top-img",src:r&&"N/A"!==r?r:"".concat("","/assets/default-movie.jpg"),onClick:function(){return i("/movie/"+o)},alt:t}),n.createElement("div",{className:"card-title"},t),n.createElement("small",{className:"ml-auto"},s))};var b=r(284),T=function(e,t){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},T(e,t)},S=function(){return S=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},L={Pixel:"Pixel",Percent:"Percent"},D={unit:L.Percent,value:.8};function x(e){return"number"==typeof e?{unit:L.Percent,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:L.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:L.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),D):(console.warn("scrollThreshold should be string or number"),D)}const _=function(e){function t(t){var r=e.call(this,t)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:"string"==typeof r.props.scrollableTarget?document.getElementById(r.props.scrollableTarget):(null===r.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},r.onStart=function(e){r.lastScrollTop||(r.dragging=!0,e instanceof MouseEvent?r.startY=e.pageY:e instanceof TouchEvent&&(r.startY=e.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(e){r.dragging&&(e instanceof MouseEvent?r.currentY=e.pageY:e instanceof TouchEvent&&(r.currentY=e.touches[0].pageY),r.currentY<r.startY||(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),r.currentY-r.startY>1.5*r.maxPullDownDistance||r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")}))},r.onScrollListener=function(e){"function"==typeof r.props.onScroll&&setTimeout((function(){return r.props.onScroll&&r.props.onScroll(e)}),0);var t=r.props.height||r._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;r.actionTriggered||((r.props.inverse?r.isElementAtTop(t,r.props.scrollThreshold):r.isElementAtBottom(t,r.props.scrollThreshold))&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=t.scrollTop)},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},r.throttledOnScrollListener=function(e,t,r,n){var o,l=!1,s=0;function i(){o&&clearTimeout(o)}function a(){var a=this,c=Date.now()-s,h=arguments;function u(){s=Date.now(),r.apply(a,h)}l||(n&&!o&&u(),i(),void 0===n&&c>e?u():!0!==t&&(o=setTimeout(n?function(){o=void 0}:u,void 0===n?e-c:e)))}return"boolean"!=typeof t&&(n=r,r=t,t=void 0),a.cancel=function(){i(),l=!0},a}(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return function(e,t){function r(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?S(S({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=x(t);return n.unit===L.Pixel?e.scrollTop<=n.value+r-e.scrollHeight+1:e.scrollTop<=n.value/100+r-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=x(t);return n.unit===L.Pixel?e.scrollTop+r>=e.scrollHeight-n.value:e.scrollTop+r>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=S({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},n.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&n.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},n.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);var Y=r(655);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const P=function(){var e,t,r=(0,o.I0)(),l=(e=(0,Y.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,s,i=[],a=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].get("query"),s=(0,o.v9)((function(e){return e.movies})),i=s.data,a=s.page,c=s.hasNextPage,h=s.error,u=s.isLoading;(0,n.useEffect)((function(){r((0,b.vw)({page:a,query:l}))}),[l]);var p=(0,n.useCallback)((function(){return r((0,b.vw)({page:a,query:l}))}),[a,l]);return 0===i.length&&u?n.createElement("h1",null,"Loading ..."):0===i.length?n.createElement(n.Fragment,null,n.createElement("h2",null,'Search results for "',l,'"'),n.createElement("h1",{className:"error"},h||"No data found")):n.createElement(_,{dataLength:i.length||0,next:p,loader:n.createElement("h4",null,"Loading ..."),hasMore:c},n.createElement("h2",{"data-testid":"searched-text"},'Search results for "',l,'"'),n.createElement("div",{className:"row"},i&&i.map((function(e){return n.createElement("div",{className:"col",key:"movie-".concat(e.imdbID)},n.createElement(E,{title:e.Title,image:e.Poster,id:e.imdbID,year:e.Year}))}))))}},443:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),l=r(645),s=r.n(l)()(o());s.push([e.id,".card{display:flex;flex-direction:column;width:100%;align-items:center;justify-content:space-between;border-radius:8px;margin-bottom:10px}.card img{width:100%;height:auto;border-top-right-radius:8px;border-top-left-radius:8px;cursor:pointer}.card .card-title{margin-right:auto;padding:10px;font-size:20px;font-weight:500}.card p{text-align:justify;padding:0 10px}",""]);const i=s}}]);