// moment.js language configuration
// language : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner
(function(){function a(a,b,c,d){var e=a;switch(c){case"s":return d||b?"néhány másodperc":"néhány másodperce";case"m":e="egy";case"mm":return e+(d||b?" perc":" perce");case"h":e="egy";case"hh":return e+(d||b?" óra":" órája");case"d":e="egy";case"dd":return e+(d||b?" nap":" napja");case"M":e="egy";case"MM":return e+(d||b?" hónap":" hónapja");case"y":e="egy";case"yy":return e+(d||b?" év":" éve");default:}return""}function b(a){var b="";switch(this.day()){case 0:b="vasárnap";break;case 1:b="hétfőn";break;case 2:b="kedden";break;case 3:b="szerdán";break;case 4:b="csütörtökön";break;case 5:b="pénteken";break;case 6:b="szombaton"}return(a?"":"múlt ")+"["+b+"] LT[-kor]"}var c={months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return b.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return b.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},ordinal:function(a){return"."}};typeof module!="undefined"&&module.exports&&(module.exports=c),typeof window!="undefined"&&this.moment&&this.moment.lang&&this.moment.lang("hu",c)})();