webpackJsonp([1],{27:function(t,e,a){function n(t){a(34)}var i=a(14)(a(66),a(32),n,null,null);t.exports=i.exports},28:function(t,e){},29:function(t,e){},31:function(t,e,a){function n(t){a(35)}var i=a(14)(a(67),a(33),n,"data-v-68a0b9ca",null);t.exports=i.exports},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("h3",[t._v("Github热门")]),t._v(" "),a("div",{staticClass:"datepicker"},[a("datepicker",{attrs:{language:"ch",min:"2015-10-19",max:t.maxDate},on:{input:t.selectDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),a("div",{staticStyle:{"line-height":"50px"}},[t._v("选择的日期是:"+t._s(t.date))]),t._v(" "),a("div",{staticClass:"langBox"},[a("ul",{staticClass:"lang"},t._l(t.langs,function(e){return a("li",{key:e,staticClass:"{active:lang}",on:{click:function(a){t.langSelect(e)}}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"container page news"},[t.results.length>0?a("transition-group",{attrs:{tag:"div","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutLeft"}},t._l(t.results,function(e){return a("div",{key:e.id,staticClass:"mdl-card mdl-shadow--2dp section resource-list",staticStyle:{width:"100%"}},[a("div",{staticClass:"resource",staticStyle:{"border-left-color":"#f1e05a",cursor:"pointer"}},[a("div",{staticClass:"action-group pull-right"},[a("div",{staticClass:"trend-count"},[a("span",[t._v("+")]),t._v(" "),a("span",[t._v(t._s(e.count))])])]),t._v(" "),a("a",{attrs:{href:"https://www.github.com/"+e.repo_name,target:"preview"}},[a("img",{staticClass:"thumb animated fadeIn",attrs:{src:"https://avatars.githubusercontent.com/"+e.repo_name.split("/")[0]+"?v=3&s=160"}})]),t._v(" "),a("a",{attrs:{href:"https://www.github.com/"+e.repo_name,target:"preview",rel:"nofollow"}},[a("h5",{staticClass:"title"},[a("span",{staticClass:"orgname"},[a("span",[t._v(t._s(e.repo_name.split("/")[0]))]),t._v(" "),a("span",[t._v("/")])]),t._v(" "),a("span",[t._v(t._s(e.repo_name.split("/")[1]))])])]),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"description"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"tags"},[a("span",{staticClass:"badge undefined"},[t._v("\n                star:"),a("span",[t._v(t._s(e.watchers_count))])]),t._v(" "),a("span",{staticClass:"badge undefined"},[t._v("\n                语言:"),a("span",[t._v(t._s(e.language))])])])]),t._v(" "),a("div",{staticClass:"clearfix"})])])})):a("transition-group",[t._v("\n      加载中...\n    ")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loadding,expression:"loadding"}],staticClass:"loadding"},[a("div",{staticClass:"loaddingBox"}),t._v(" "),a("span",[t._v("加载中"+t._s(t.dot))])])])},staticRenderFns:[]}},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-picker"},[a("div",{staticClass:"input-wrapper",on:{mouseenter:function(e){t.showCancel=!0},mouseleave:function(e){t.showCancel=!1}}},[a("div",{staticClass:"input",domProps:{textContent:t._s(t.range?t.value[0]+" -- "+t.value[1]:t.value)},on:{click:t.togglePanel}}),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.showCancel,expression:"showCancel"}],staticClass:"cancel-btn",on:{click:t.clear}},[t._v("X")])])],1),t._v(" "),a("transition",{attrs:{name:"toggle"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.panelState,expression:"panelState"}],staticClass:"date-panel",style:t.coordinates},[a("div",{directives:[{name:"show",rawName:"v-show",value:"year"!==t.panelType,expression:"panelType !== 'year'"}],staticClass:"panel-header"},[a("div",{staticClass:"arrow-left",on:{click:function(e){t.prevMonthPreview()}}},[t._v("<")]),t._v(" "),a("div",{staticClass:"year-month-box"},[a("div",{staticClass:"year-box",domProps:{textContent:t._s(t.tmpYear)},on:{click:function(e){t.chType("year")}}}),t._v(" "),a("div",{staticClass:"month-box",on:{click:function(e){t.chType("month")}}},[t._v(t._s(t._f("month")(t.tmpMonth+1,t.language)))])]),t._v(" "),a("div",{staticClass:"arrow-right",on:{click:function(e){t.nextMonthPreview()}}},[t._v(">")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"year"===t.panelType,expression:"panelType === 'year'"}],staticClass:"panel-header"},[a("div",{staticClass:"arrow-left",on:{click:function(e){t.chYearRange(0)}}},[t._v("<")]),t._v(" "),a("div",{staticClass:"year-range"},[a("span",{domProps:{textContent:t._s(t.yearList[0])}}),t._v(" - "),a("span",{domProps:{textContent:t._s(t.yearList[t.yearList.length-1])}})]),t._v(" "),a("div",{staticClass:"arrow-right",on:{click:function(e){t.chYearRange(1)}}},[t._v(">")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"year"===t.panelType,expression:"panelType === 'year'"}],staticClass:"type-year"},[a("ul",{staticClass:"year-list"},t._l(t.yearList,function(e){return a("li",{class:{selected:t.isSelected("year",e),invalid:t.validateYear(e)},domProps:{textContent:t._s(e)},on:{click:function(a){t.selectYear(e)}}})}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"month"===t.panelType,expression:"panelType === 'month'"}],staticClass:"type-month"},[a("ul",{staticClass:"month-list"},t._l(t.monthList,function(e,n){return a("li",{class:{selected:t.isSelected("month",n),invalid:t.validateMonth(n)},on:{click:function(e){t.selectMonth(n)}}},[t._v("\n                        "+t._s(t._f("month")(e,t.language))+"\n                    ")])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"date"===t.panelType,expression:"panelType === 'date'"}],staticClass:"type-date"},[a("ul",{staticClass:"weeks"},t._l(t.weekList,function(e){return a("li",[t._v(t._s(t._f("week")(e,t.language)))])})),t._v(" "),a("ul",{staticClass:"date-list"},t._l(t.dateList,function(e,n){return a("li",{class:{preMonth:e.previousMonth,nextMonth:e.nextMonth,invalid:t.validateDate(e),firstItem:n%7==0},on:{click:function(a){t.selectDate(e)}}},[a("div",{staticClass:"message",class:{selected:t.isSelected("date",e)}},[a("div",{staticClass:"bg"}),a("span",{domProps:{textContent:t._s(e.value)}})])])}))])])])],1)},staticRenderFns:[]}},34:function(t,e){},35:function(t,e){},66:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(31),i=a.n(n),s=a(64),r=a.n(s);e.default={name:"app",data:function(){return{dot:"...",date:(new Date).getFullYear()+"-"+((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1)+"-"+((new Date).getDate()-1),maxDate:(new Date).getFullYear()+"-"+((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1)+"-"+((new Date).getDate()-1),results:[],langs:[],loadding:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.getList(t.date)}),this.dotMove()},methods:{unique:function(t){for(var e=[],a={},n=0;n<t.length;n++)a[t[n]]||(e.push(t[n]),a[t[n]]=1);return e},selectDate:function(t){this.getList(this.date)},getList:function(t){var e=this;this.results=[],this.langs=[],r.a.ajax({url:"/trending",data:"date="+t,success:function(t){t.forEach(function(t){t.repo&&e.results.push({count:t.count,date:t.date,gain:t.gain,id:t.id,repo_name:t.repo_name,yesterday_count:t.yesterday_count,cached_at:t.repo.cached_at,description:t.repo.description,language:t.repo.language,watchers_count:t.repo.watchers_count})}),e.results.forEach(function(t){t.language&&e.langs.push(t.language)}),e.langs=e.unique(e.langs)}})},langSelect:function(t){var e=this;this.getList(this.date),this.loadding=!0,setTimeout(function(){e.loadding=!1,e.results=e.results.filter(function(e){return t===e.language})},2e3)},dotMove:function(){var t=this;this.dot="∙",setInterval(function(e){t.dot+="∙",t.dot.length>6&&(t.dot="∙")},300)}},components:{datepicker:i.a}}},67:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(65),i=a.n(n);e.default={data:function(){var t=new Date;return{showCancel:!1,panelState:!1,panelType:"date",coordinates:{},year:t.getFullYear(),month:t.getMonth(),date:t.getDate(),tmpYear:t.getFullYear(),tmpMonth:t.getMonth(),tmpStartYear:t.getFullYear(),tmpStartMonth:t.getMonth(),tmpStartDate:t.getDate(),tmpEndYear:t.getFullYear(),tmpEndMonth:t.getMonth(),tmpEndDate:t.getDate(),minYear:Number,minMonth:Number,minDate:Number,maxYear:Number,maxMonth:Number,maxDate:Number,yearList:i()({length:12},function(t,e){return(new Date).getFullYear()+e}),monthList:[1,2,3,4,5,6,7,8,9,10,11,12],weekList:[0,1,2,3,4,5,6],rangeStart:!1}},props:{language:{default:"en"},min:{default:"1970-01-01"},max:{default:"3016-01-01"},value:{type:[String,Array],default:""},range:{type:Boolean,default:!1}},methods:{togglePanel:function(){this.panelState=!this.panelState,this.rangeStart=!1},isSelected:function(t,e){switch(t){case"year":return this.range?new Date(e,0).getTime()>=new Date(this.tmpStartYear,0).getTime()&&new Date(e,0).getTime()<=new Date(this.tmpEndYear,0).getTime():e===this.tmpYear;case"month":return this.range?new Date(this.tmpYear,e).getTime()>=new Date(this.tmpStartYear,this.tmpStartMonth).getTime()&&new Date(this.tmpYear,e).getTime()<=new Date(this.tmpEndYear,this.tmpEndMonth).getTime():e===this.tmpMonth&&this.year===this.tmpYear;case"date":if(!this.range)return this.date===e.value&&this.month===this.tmpMonth&&e.currentMonth;var a=this.tmpMonth;return e.previousMonth&&a--,e.nextMonth&&a++,new Date(this.tmpYear,a,e.value).getTime()>=new Date(this.tmpStartYear,this.tmpStartMonth,this.tmpStartDate).getTime()&&new Date(this.tmpYear,a,e.value).getTime()<=new Date(this.tmpEndYear,this.tmpEndMonth,this.tmpEndDate).getTime()}},chType:function(t){this.panelType=t},chYearRange:function(t){this.yearList=t?this.yearList.map(function(t){return t+12}):this.yearList.map(function(t){return t-12})},prevMonthPreview:function(){this.tmpMonth=0===this.tmpMonth?0:this.tmpMonth-1},nextMonthPreview:function(){this.tmpMonth=11===this.tmpMonth?11:this.tmpMonth+1},selectYear:function(t){this.validateYear(t)||(this.tmpYear=t,this.panelType="month")},selectMonth:function(t){this.validateMonth(t)||(this.tmpMonth=t,this.panelType="date")},selectDate:function(t){var e=this;setTimeout(function(){if(!e.validateDate(t))if(t.previousMonth?0===e.tmpMonth?(e.year-=1,e.tmpYear-=1,e.month=e.tmpMonth=11):(e.month=e.tmpMonth-1,e.tmpMonth-=1):t.nextMonth&&(11===e.tmpMonth?(e.year+=1,e.tmpYear+=1,e.month=e.tmpMonth=0):(e.month=e.tmpMonth+1,e.tmpMonth+=1)),e.range){if(e.range&&!e.rangeStart)e.tmpEndYear=e.tmpStartYear=e.tmpYear,e.tmpEndMonth=e.tmpStartMonth=e.tmpMonth,e.tmpEndDate=e.tmpStartDate=t.value,e.rangeStart=!0;else if(e.range&&e.rangeStart){e.tmpEndYear=e.tmpYear,e.tmpEndMonth=e.tmpMonth,e.tmpEndDate=t.value;var a=new Date(e.tmpStartYear,e.tmpStartMonth,e.tmpStartDate).getTime(),n=new Date(e.tmpEndYear,e.tmpEndMonth,e.tmpEndDate).getTime();if(a>n){var i=void 0,s=void 0,r=void 0;i=e.tmpEndYear,s=e.tmpEndMonth,r=e.tmpEndDate,e.tmpEndYear=e.tmpStartYear,e.tmpEndMonth=e.tmpStartMonth,e.tmpEndDate=e.tmpStartDate,e.tmpStartYear=i,e.tmpStartMonth=s,e.tmpStartDate=r}var o=e.tmpStartYear+"-"+("0"+(e.tmpStartMonth+1)).slice(-2)+"-"+("0"+e.tmpStartDate).slice(-2),l=e.tmpEndYear+"-"+("0"+(e.tmpEndMonth+1)).slice(-2)+"-"+("0"+e.tmpEndDate).slice(-2),c=[o,l];e.$emit("input",c),e.rangeStart=!1,e.panelState=!1}}else{e.year=e.tmpYear,e.month=e.tmpMonth,e.date=t.value;var h=e.tmpYear+"-"+("0"+(e.month+1)).slice(-2)+"-"+("0"+e.date).slice(-2);e.$emit("input",h),e.panelState=!1}},0)},validateYear:function(t){return t>this.maxYear||t<this.minYear},validateMonth:function(t){return!(new Date(this.tmpYear,t).getTime()>=new Date(this.minYear,this.minMonth-1).getTime()&&new Date(this.tmpYear,t).getTime()<=new Date(this.maxYear,this.maxMonth-1).getTime())},validateDate:function(t){var e=this.tmpMonth;return t.previousMonth?e-=1:t.nextMonth&&(e+=1),!(new Date(this.tmpYear,e,t.value).getTime()>=new Date(this.minYear,this.minMonth-1,this.minDate).getTime()&&new Date(this.tmpYear,e,t.value).getTime()<=new Date(this.maxYear,this.maxMonth-1,this.maxDate).getTime())},close:function(t){this.$el.contains(t.target)||(this.panelState=!1,this.rangeStart=!1)},clear:function(){this.$emit("input",this.range?["",""]:"")}},watch:{min:function(t){var e=t.split("-");this.minYear=Number(e[0]),this.minMonth=Number(e[1]),this.minDate=Number(e[2])},max:function(t){var e=t.split("-");this.maxYear=Number(e[0]),this.maxMonth=Number(e[1]),this.maxDate=Number(e[2])},range:function(t,e){t!==e&&(t&&"String"===Object.prototype.toString.call(this.value).slice(8,-1)&&this.$emit("input",["",""]),t||"Array"!==Object.prototype.toString.call(this.value).slice(8,-1)||this.$emit("input",""))}},computed:{dateList:function(){for(var t=new Date(this.tmpYear,this.tmpMonth+1,0).getDate(),e=i()({length:t},function(t,e){return{currentMonth:!0,value:e+1}}),a=new Date(this.tmpYear,this.tmpMonth,1).getDay(),n=new Date(this.tmpYear,this.tmpMonth,0).getDate(),s=0,r=a;s<r;s++)e=[{previousMonth:!0,value:n-s}].concat(e);for(var o=e.length,l=1;o<42;o++,l++)e[e.length]={nextMonth:!0,value:l};return e}},filters:{week:function(t,e){switch(e){case"en":return{0:"Su",1:"Mo",2:"Tu",3:"We",4:"Th",5:"Fr",6:"Sa"}[t];case"ch":return{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[t];case"uk":return{0:"Пн",1:"Вт",2:"Ср",3:"Чт",4:"Пт",5:"Сб",6:"Нд"}[t];default:return t}},month:function(t,e){switch(e){case"en":return{1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}[t];case"ch":return{1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二"}[t];case"uk":return{1:"Січень",2:"Лютий",3:"Березень",4:"Квітень",5:"Травень",6:"Червень",7:"Липень",8:"Серпень",9:"Вересень",10:"Жовтень",11:"Листопад",12:"Грудень"}[t];default:return t}}},mounted:function(){var t=this;this.$nextTick(function(){t.$el.parentNode.offsetWidth+t.$el.parentNode.offsetLeft-t.$el.offsetLeft<=300?t.coordinates={right:"0",top:window.getComputedStyle(t.$el.children[0]).offsetHeight+4+"px"}:t.coordinates={left:"0",top:window.getComputedStyle(t.$el.children[0]).offsetHeight+4+"px"};var e=t.min.split("-");t.minYear=Number(e[0]),t.minMonth=Number(e[1]),t.minDate=Number(e[2]);var a=t.max.split("-");if(t.maxYear=Number(a[0]),t.maxMonth=Number(a[1]),t.maxDate=Number(a[2]),t.range){if("Array"!==Object.prototype.toString.call(t.value).slice(8,-1))throw new Error("Binding value must be an array in range mode.");if(t.value.length){var n=t.value[0].split("-"),i=t.value[1].split("-");t.tmpStartYear=Number(n[0]),t.tmpStartMonth=Number(n[1])-1,t.tmpStartDate=Number(n[2]),t.tmpEndYear=Number(i[0]),t.tmpEndMonth=Number(i[1])-1,t.tmpEndDate=Number(i[2])}else t.$emit("input",["",""])}t.value||t.$emit("input",""),window.addEventListener("click",t.close)})},beforeDestroy:function(){window.removeEventListener("click",this.close)}}},68:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(30),i=a(27),s=a.n(i),r=a(28),o=(a.n(r),a(29));a.n(o);n.a.config.productionTip=!1,new n.a({el:"#hotGithub",template:"<App/>",components:{App:s.a}})}},[68]);
//# sourceMappingURL=app.b652296db8cfdc06ad5b.js.map