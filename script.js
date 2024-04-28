let isDOBOpen=false;
let dateOfBirth;
const settingCogEl=document.getElementById("settingIcon");
const settingcContentEl=document.getElementById("settingContent");
const initialTextEl=document.getElementById("intialText");
const afterTextEl=document.getElementById("afterText");
const dobButtonEl=document.getElementById("dobButton");
const dobInputEl=document.getElementById("dobInput");
const yearEl=document.getElementById("year");
const monthEl=document.getElementById("month");
const dayEl=document.getElementById("day");
const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("minutes");
const secondEl=document.getElementById("second");
// const makeTwoDigitNumber =(number)=>{
//    return number > 9 ? number :'0${number}';
// };
const toggleDateOfBirthSelector= () =>{
    if(isDOBOpen){
      settingcContentEl.classList.add("hide");  
    }
    else{
        settingcContentEl.classList.remove("hide");
    }
    isDOBOpen=!isDOBOpen;
    console.log("Toggle",isDOBOpen);
};
const updateAge=() =>{
   const currentDate=new Date();
   const dateDiff=currentDate-dateOfBirth;
   const year=Math.floor(dateDiff/(1000*60*60*24*365));
   const month=Math.floor(dateDiff/(1000*60*60*24*365)% 12);
   const day=Math.floor(dateDiff/(1000*60*60*24)%30);
   const hour=Math.floor(dateDiff/(1000*60*60)%24);
   const minutes=Math.floor(dateDiff/(1000*60)%60);
   const second=Math.floor(dateDiff/(1000)%60);
   console.log("year",year,month,day,hour,minutes,second);
   yearEl.innerHTML=year;
   monthEl.innerHTML=month;
   dayEl.innerHTML=day;
   hourEl.innerHTML=hour;
   minutesEl.innerHTML=minutes;
   secondEl.innerHTML=second;
};
const setDOBHandler=() =>{
   dateString=dobInputEl.value;
   dateOfBirth=new Date(dateString) ;
   if(dateOfBirth){
    initialTextEl.classList.add("hide");
    afterTextEl.classList.remove("hide");
    setInterval(()=>updateAge(),1000);
   }
   else{
    afterTextEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
   }
};
 setDOBHandler();
 
settingCogEl.addEventListener("click",toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click",setDOBHandler);