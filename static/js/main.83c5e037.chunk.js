(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),r=a.n(s),o=a(36),l=(a(21),a(5)),c=a(6),u=a(8),m=a(7),d=a(9),h=a(35),p=a(37),E=(a(23),a(25),function(){return i.a.createElement("section",{className:"selling-points"},i.a.createElement("div",{className:"point landing"},i.a.createElement("h2",{className:"point-title"},"Unlimited Ad-Free"),i.a.createElement("h2",{className:"point-title"},"Music Streaming"),i.a.createElement("p",{className:"point-description"},"No limits. No distractions."),i.a.createElement("p",{className:"point-description"},"Available on all mobile platforms"),i.a.createElement("a",{href:"/library"},i.a.createElement("p",{className:"start-button"},"GET STARTED"))),i.a.createElement("a",{href:"https://unsplash.com/@arstyy?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank"},i.a.createElement("p",{className:"photo-credit"},"Photo credit: Austin Neill")))}),g=[{title:"The Colors",artist:"Pablo Picasso",releaseInfo:"1909 Spanish Records",albumCover:"/assets/images/album_covers/01.jpg",slug:"the-colors",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]},{title:"The Telephone",artist:"Guglielmo Marconi",releaseInfo:"1909 EM",albumCover:"/assets/images/album_covers/02.jpg",slug:"the-telephone",songs:[{title:"Blue",duration:"161.71",audioSrc:"/assets/music/blue.mp3"},{title:"Green",duration:"103.96",audioSrc:"/assets/music/green.mp3"},{title:"Red",duration:"268.45",audioSrc:"/assets/music/red.mp3"},{title:"Pink",duration:"153.14",audioSrc:"/assets/music/pink.mp3"},{title:"Magenta",duration:"374.22",audioSrc:"/assets/music/magenta.mp3"}]}],v=(a(27),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={albums:g},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"library"},i.a.createElement("div",{className:"album-list"},this.state.albums.map(function(e,t){return i.a.createElement("div",{className:"container",key:t},i.a.createElement("div",{className:"album"},i.a.createElement("p",{className:"artist"},e.artist),i.a.createElement("img",{src:e.albumCover,alt:e.title}),i.a.createElement("p",null,e.title),i.a.createElement(h.a,{to:"/album/".concat(e.slug)},i.a.createElement("div",{className:"listen"},"LISTEN"))))})))}}]),t}(n.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"player-bar"},i.a.createElement("section",{id:"buttons"},i.a.createElement("button",{id:"previous",onClick:this.props.handlePrevClick},i.a.createElement("i",{class:"icon ion-md-skip-backward custom-icon"})),i.a.createElement("button",{id:"play-pause",onClick:this.props.handleSongClick},i.a.createElement("i",{class:this.props.isPlaying?"icon ion-md-pause custom-icon":"icon ion-md-play custom-icon"})),i.a.createElement("button",{id:"next",onClick:this.props.handleNextClick},i.a.createElement("i",{class:"icon ion-md-skip-forward custom-icon"}))),i.a.createElement("section",{id:"time-control"},i.a.createElement("div",{className:"current-time"},this.props.formattedCurrentTime(this.props.currentTime)),i.a.createElement("ion-icon",{name:"rewind"}),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.currentTime/this.props.duration||0,max:"1",min:"0",step:"0.01",onChange:this.props.handleTimeChange}),i.a.createElement("ion-icon",{name:"fastforward"})),i.a.createElement("section",{id:"volume-control"},i.a.createElement("div",{className:"total-time"},this.props.formattedDuration(this.props.duration)),i.a.createElement("ion-icon",{name:"volume-low"}),i.a.createElement("input",{type:"range",className:"seek-bar",value:this.props.volume||0,min:"0",max:"1",step:"0.01",onChange:this.props.handleVolumeChange}),i.a.createElement("ion-icon",{name:"volume-high"})))}}]),t}(n.Component),b=(a(31),function(e){function t(e){var a;Object(l.a)(this,t),a=Object(u.a)(this,Object(m.a)(t).call(this,e));var n=g.find(function(e){return e.slug===a.props.match.params.slug});return a.state={album:n,currentSong:n.songs[0],currentTime:0,duration:n.songs[0].duration,isPlaying:!1,hovered:null,volume:0},a.audioElement=document.createElement("audio"),a.audioElement.src=n.songs[0].audioSrc,a.audioElement.volume=0,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"play",value:function(){this.audioElement.play(),this.setState({isPlaying:!0})}},{key:"pause",value:function(){this.audioElement.pause(),this.setState({isPlaying:!1})}},{key:"componentDidMount",value:function(){var e=this;this.eventListeners={timeupdate:function(t){e.setState({currentTime:e.audioElement.currentTime})},durationchange:function(t){e.setState({duration:e.audioElement.duration})},volumechange:function(t){e.setState({volume:e.audioElement.volume})}},this.audioElement.addEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.addEventListener("durationchange",this.eventListeners.durationchange),this.audioElement.addEventListener("volumechange",this.eventListeners.volumechange)}},{key:"componentWillUnmounnt",value:function(){this.audioElement.src=null,this.audioElement.removeEventListener("timeupdate",this.eventListeners.timeupdate),this.audioElement.removeEventListener("durationchange",this.eventListeners.durationchange)}},{key:"setSong",value:function(e){this.audioElement.src=e.audioSrc,this.setState({currentSong:e})}},{key:"handleSongClick",value:function(e){var t=this.state.currentSong===e;this.state.isPlaying&&t?this.pause():(t||this.setSong(e),this.play())}},{key:"handlePrevClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.max(0,t-1),n=this.state.album.songs[a];this.setSong(n),this.play()}},{key:"handleNextClick",value:function(){var e=this,t=this.state.album.songs.findIndex(function(t){return e.state.currentSong===t}),a=Math.min(this.state.album.songs.length-1,t+1),n=this.state.album.songs[a];this.setSong(n),this.play()}},{key:"handleTimeChange",value:function(e){var t=this.audioElement.duration*e.target.value;this.audioElement.currentTime=t,this.setState({currentTime:t})}},{key:"handleVolumeChange",value:function(e){this.audioElement.volume=e.target.value,this.setState({volume:e.target.value})}},{key:"mouseOver",value:function(e){this.setState({hovered:e})}},{key:"mouseLeave",value:function(e){this.setState({hovered:null})}},{key:"formatTime",value:function(e){if("number"!==typeof parseInt(e))return"-:--";var t=Math.floor(e/60),a=Math.floor(e%60);return a<10&&(a="0".concat(a)),"".concat(t,":").concat(a)}},{key:"button",value:function(e){return this.state.isPlaying||this.state.hovered!==e?this.state.isPlaying&&this.state.hovered===e?i.a.createElement("ion-icon",{name:"pause"}):e+1:i.a.createElement("ion-icon",{name:"arrow-dropright-circle"})}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"album-page"},i.a.createElement("section",{className:"album-container"},i.a.createElement("section",{id:"album-info"},i.a.createElement("div",{className:"cover-image"},i.a.createElement("img",{id:"album-cover-art",src:this.state.album.albumCover,alt:"album cover"})),i.a.createElement("div",{className:"album-details"},i.a.createElement("h1",{id:"album-title"},this.state.album.title),i.a.createElement("h2",{className:"artist"},this.state.album.artist),i.a.createElement("div",{id:"release-info"},this.state.album.releaseInfo)),i.a.createElement(f,{isPlaying:this.state.isPlaying,currentSong:this.state.currentSong,currentTime:this.audioElement.currentTime,duration:this.audioElement.duration,volume:this.audioElement.volume,handleSongClick:function(){return e.handleSongClick(e.state.currentSong)},handlePrevClick:function(){return e.handlePrevClick()},handleNextClick:function(){return e.handleNextClick()},handleTimeChange:function(t){return e.handleTimeChange(t)},handleVolumeChange:function(t){return e.handleVolumeChange(t)},formattedCurrentTime:function(){return e.formatTime(e.state.currentTime)},formattedDuration:function(){return e.formatTime(e.state.duration)}})),i.a.createElement("table",{id:"song-list"},i.a.createElement("colgroup",null,i.a.createElement("col",{id:"song-number-colum"}),i.a.createElement("col",{id:"song-title-colum"}),i.a.createElement("col",{id:"song-duration-colum"})),i.a.createElement("tbody",null,this.state.album.songs.map(function(t,a){return i.a.createElement("tr",{key:a,className:"song",onClick:function(){return e.handleSongClick(t)},onMouseEnter:function(){return e.mouseOver(a)},onMouseLeave:function(){return e.mouseLeave(a)}},i.a.createElement("td",{className:"index"},e.button(a)),i.a.createElement("td",{className:"song-title"},t.title),i.a.createElement("td",null,e.formatTime(t.duration)))})))))}}]),t}(n.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"https://github.com/grace-ko",target:"_blank",className:"link hide"},"ABOUT"),i.a.createElement(h.a,{to:"/",className:"link hide"},"HOME"),i.a.createElement(h.a,{to:"/library",className:"link"},"LIBRARY")),i.a.createElement(h.a,{to:"/"},i.a.createElement("h1",{className:"logo"},"Bloc Jams"))),i.a.createElement("main",null,i.a.createElement(p.a,{exact:!0,path:"/",component:E}),i.a.createElement(p.a,{path:"/library",component:v}),i.a.createElement(p.a,{path:"/album/:slug",component:b})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(o.a,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.83c5e037.chunk.js.map