let songindex=0;
let audioelement=new Audio("songs/3.mp3");
let masterplay=document.getElementById("masterplay"); 
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let mastersong=document.getElementById("mastersong");
 let songitem=Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songname:"Song1",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Song2",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Song3",filepath:"songs/2.mp3",coverpath:"covers/3.jpg"},
    {songname:"Song4",filepath:"songs/3.mp3",coverpath:"covers/4.jpg"},
    {songname:"Song5",filepath:"songs/4.mp3",coverpath:"covers/5.jpg"},
    {songname:"Song6",filepath:"songs/5.mp3",coverpath:"covers/6.jpg"},
    {songname:"Song7",filepath:"songs/6.mp3",coverpath:"covers/7.jpg"},
];

songitem.forEach((element,i)=>{
    // console.log(element,i);
  element.getElementsByTagName("img")[0].src=songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText= songs[i].songname;
})
masterplay.addEventListener("click",()=>{
    if(audioelement.paused ||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove("play_circle");
        masterplay.classList.add("pause_circle");
        gif.style.opacity=1;
    }else{
        audioelement.pause();
        masterplay.classList.remove("pause_circle");
        masterplay.classList.add("play_circle");
        gif.style.opacity=0;
    }
})



audioelement.addEventListener("timeupdate",()=>{
   console.log("timeupdate");
 let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
 console.log(progress);  
 myprogressbar.value=progress;
});
myprogressbar.addEventListener("change",()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;

})
const makeallPlay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("pause_circle");
        element.classList.add("play_circle");   
})
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
element.addEventListener("click",(e)=>{
    // console.log(e.target);
     makeallPlay();
     index=parseInt(e.target.id);
    e.target.classList.remove("play_circle");
    e.target.classList.add("pause_circle");
    audioelement.src=`songs/${index+1}.mp3`;
    mastersong.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove("play_circle");
    masterplay.classList.add("pause_circle");
});
});
document.getElementById("next").addEventListener("click",()=>{
   if(songindex>=6){
    songindex=0;
   }else{
    songindex += 1;
   }
   audioelement.src=`songs/${songindex+1}.mp3`;
   mastersong.innerText=songs[songindex].songname;
   audioelement.currentTime=0;
   audioelement.play();
   masterplay.classList.remove("play_circle");
   masterplay.classList.add("pause_circle");
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=0){
     songindex=0;
    }else{
     songindex -= 1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersong.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove("play_circle");
    masterplay.classList.add("pause_circle");
 })