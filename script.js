/* ---------- TEXT SCENES ---------- */
const messages=[
  {title:"Shayeri 1",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 2",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 3",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 4",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 5",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 6",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 7",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"}
];

/* ---------- CANVAS BACKGROUND ---------- */
const bg = document.getElementById("background");
const ctx = bg.getContext("2d");
function resize() { bg.width = innerWidth; bg.height = innerHeight; }
resize(); addEventListener("resize", resize);

let skyTarget = 0;
function drawBackground() {
  const dayTop = [255,230,180], nightTop = [20,30,60];
  const dayBot = [255,180,190], nightBot = [10,10,25];
  const lerp = (a,b,t)=>a+(b-a)*t;
  const lerpC = (c1,c2,t)=>[lerp(c1[0],c2[0],t), lerp(c1[1],c2[1],t), lerp(c1[2],c2[2],t)];
  const top = lerpC(dayTop, nightTop, skyTarget);
  const bot = lerpC(dayBot, nightBot, skyTarget);
  const g = ctx.createLinearGradient(0,0,0,bg.height);
  g.addColorStop(0,`rgb(${top.join(",")})`);
  g.addColorStop(1,`rgb(${bot.join(",")})`);
  ctx.fillStyle = g;
  ctx.fillRect(0,0,bg.width,bg.height);
  requestAnimationFrame(drawBackground);
}
drawBackground();

/* ---------- STARS ---------- */
const stars = document.getElementById("stars").getContext("2d");
const starList = Array.from({length:150},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5,p:Math.random()*6.28}));
function drawStars(a){
  stars.clearRect(0,0,innerWidth,innerHeight);
  starList.forEach(s=>{
    const tw=0.5+0.5*Math.sin(Date.now()/500+s.p);
    stars.fillStyle=`rgba(255,255,255,${a*tw})`;
    stars.beginPath();
    stars.arc(s.x,s.y,s.r,0,Math.PI*2);
    stars.fill();
  });
}

/* ---------- SUN & MOON ---------- */
const sun=document.getElementById("sun"), moon=document.getElementById("moon");
function updateCelestial(pos){
  // Move sun and moon opposite each other smoothly
  sun.style.left = `${50 - pos*50}%`;
  moon.style.left = `${100 - pos*50}%`;
  moon.style.opacity = pos;
}

/* ---------- TEXT FLOW ---------- */
const scene=document.getElementById("scene"), next=document.getElementById("nextBtn"), back=document.getElementById("backBtn"), dots=document.getElementById("dots");
let index=0;
function createDots(){dots.innerHTML="";messages.forEach((_,i)=>{const d=document.createElement("div");d.className="dot"+(i===index?" active":"");dots.appendChild(d);});}
function updateDots(){[...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));}
function typeEffect(el,text,delay=40){el.innerHTML="";let i=0;const t=setInterval(()=>{el.innerHTML=text.slice(0,i++).replace(/\n/g,"<br>");if(i>text.length)clearInterval(t);},delay);}
function updateScene(){
  scene.style.opacity=0;
  setTimeout(()=>{
    if(index>=messages.length){transitionToEnding();return;}
    const m=messages[index];
    scene.innerHTML=`<h1>${m.title}</h1><p></p>`;
    const p=scene.querySelector("p");
    scene.style.opacity=1;
    typeEffect(p,m.text);
    back.disabled=index===0;
    next.disabled=index===messages.length;
    updateDots();
    skyTarget=index/(messages.length-1);
    drawStars(skyTarget*0.9);
    updateCelestial(skyTarget);
  },800);
}
next.onclick=()=>{if(index<messages.length){index++;updateScene();}};
back.onclick=()=>{if(index>0){index--;updateScene();}};

/* ---------- INTRO & END ---------- */
const intro=document.getElementById("intro"), main=document.getElementById("mainContent"), ending=document.getElementById("ending");
const secretInput=document.getElementById("secretInput"), startBtn=document.getElementById("startBtn"), errorMsg=document.getElementById("errorMsg"), replayBtn=document.getElementById("replayBtn");

function fadeSwitch(from,to){
  from.style.opacity="0";
  setTimeout(()=>{from.classList.add("hidden");to.classList.remove("hidden");to.style.opacity="1";},1500);
}

startBtn.onclick=()=>{
  const secret="wh";
  if(secretInput.value.trim().toLowerCase()!==secret){errorMsg.textContent="💔 Wrong phrase, try again!";return;}
  fadeSwitch(intro,main);
  playRandomSong();
  index=0;updateScene();
};

function transitionToEnding(){
  fadeSwitch(main,ending);
  skyTarget=1;
  updateCelestial(1);
}

replayBtn.onclick=()=>{
  fadeSwitch(ending,main);
  skyTarget=0;
  updateCelestial(0);
  index=0;updateScene();
};

/* ---------- MUSIC ---------- */
const music=document.getElementById("bgMusic"), mute=document.getElementById("muteBtn"), nextSong=document.getElementById("nextSongBtn");
const playlist = [
  "music/song1.mp3",
  "music/song2.mp3",
  "music/song3.mp3",
  "music/song4.mp3",
  "music/song5.mp3",
  "music/song6.mp3",
  "music/song7.mp3",
  "music/song8.mp3"
];
let currentSong="",isMuted=false;
function getRandomSong(){return playlist[Math.floor(Math.random()*playlist.length)];}
function playRandomSong(){
  const s=getRandomSong(); if(s===currentSong&&playlist.length>1)return playRandomSong();
  currentSong=s; music.src=s; music.volume=0;
  music.play().then(()=>{
    let v=0;const fade=setInterval(()=>{if(v<0.7&&!isMuted){v+=0.02;music.volume=v;}else clearInterval(fade);},100);
    nextSong.classList.add("glow");setTimeout(()=>nextSong.classList.remove("glow"),1000);
  }).catch(e=>console.warn(e));
}
music.addEventListener("ended",()=>{playRandomSong();});
mute.onclick=()=>{isMuted=!isMuted;music.muted=isMuted;mute.textContent=isMuted?"🔇":"🔊";};
nextSong.onclick=()=>{playRandomSong();};

/* ---------- INIT ---------- */
createDots();updateScene();updateCelestial(0);
