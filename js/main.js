!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){!function(){var e=window.Vue;return new e({el:"body",data:n(1),ready:function(){this.loading=!1},components:{menu:n(2),tool:n(4)}})}()},function(e,t){e.exports={title:"Tools",subtitle:"Tools",loading:!0,year:(new Date).getFullYear(),links:[{name:"Github",url:"https://github.com/fengyuanchen/tool"},{name:"About",url:"http://chenfengyuan.com"}]}},function(e,t,n){e.exports={data:function(){return n(3)},template:"#menu"}},function(e,t){e.exports={items:[{name:"Home",url:"#"},{name:"Data URL Generator",url:"#data-url-generator"},{name:"Unicode Generator",url:"#unicode-generator"},{name:"HTML Special Chars",url:"#html-special-chars"}]}},function(e,t,n){e.exports={data:function(){return n(5)},template:"#tool",components:{home:n(6),"data-url-generator":n(8),"unicode-generator":n(10),"html-special-chars":n(12)},ready:function(){this.bind(),this.change()},beforeDestory:function(){this.unbind()},methods:{change:function(){var e=location.hash.replace(/^#/,"")||"home",t=this.tools[e];t&&e!==this.currentView&&(this.currentView=e,this.$root.subtitle=t)},bind:function(){window.addEventListener("hashchange",this.change)},unbind:function(e){window.removeEventListener("hashchange",this.change)}}}},function(e,t){e.exports={currentView:"",tools:{home:"Home","data-url-generator":"Data URL Generator","unicode-generator":"Unicode Generator","html-special-chars":"HTML Special Chars"}}},function(e,t,n){e.exports={data:function(){return n(7)},template:"#home"}},function(e,t){e.exports={tools:[{name:"Data URL Generator",description:"A simple tool for generating Data URLs.",url:"#data-url-generator"},{name:"Unicode Generator",description:"A simple tool for generating unicode.",url:"#unicode-generator"},{name:"HTML Special Chars",description:"A simple tool for espacing HTML special chars.",url:"#html-special-chars"}]}},function(e,t,n){e.exports={data:function(){return n(9)},template:"#data-url-generator",methods:{read:function(e,t){var n;e?(n=new FileReader,n.onload=function(){t(this.result)},n.readAsDataURL(e)):t()},change:function(e){var t=this,n=e.target,o=n.files;this.read(o&&o[0],function(e){t.dataURL=e,n.value=""})},dragover:function(e){e.preventDefault()},drop:function(e){var t=this,n=e.dataTransfer.files;e.preventDefault(),this.read(n&&n[0],function(e){t.dataURL=e})}}}},function(e,t){e.exports={dataURL:""}},function(e,t,n){e.exports={data:function(){return n(11)},computed:{unicode:function(){return this.parse(this.content)}},template:"#unicode-generator",ready:function(){this.upgrade(this.$els.checkbox)},beforeDestroy:function(){this.downgrade(this.$els.checkbox)},methods:{parse:function(e){for(var t=e.length,n=[],o=0;t>o;)n.push(this.format(e.charCodeAt(o++).toString(16)));return n.join(this.hasSeparator?",":"")},format:function(e){var t={0:"0x",1:"0x0",2:"0x00",3:"0x000"};return t[4-e.length]+e},upgrade:function(e){var t=window.componentHandler;t&&t.upgradeElements(e)},downgrade:function(e){var t=window.componentHandler;t&&t.downgradeElements(e)}}}},function(e,t){e.exports={content:"",hasSeparator:!0}},function(e,t,n){e.exports={data:function(){return n(13)},computed:{result:function(){return this.espace(this.source)}},template:"#html-special-chars",methods:{espace:function(e){var t={"&":"&amp;","'":"&#039;",'"':"&quot;","<":"&lt;",">":"&gt;"};return e.replace(/[&'"<>]/g,function(e){return t[e]})}}}},function(e,t){e.exports={source:""}}]);