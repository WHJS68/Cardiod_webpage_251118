/* ----------- TEXT SCENES ----------- */
const messages=[
  {title:"Shayeri 1",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 2",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 3",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 4",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 5",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 6",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 7",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
];

/* ----------- SKY GRADIENT ----------- */
const sky=document.createElement("canvas");
const sctx=sky.getContext("2d");
sky.style.position="fixed";sky.style.inset="0";sky.style.zIndex="-3";
document.body.prepend(sky);
function resizeSky(){sky.width=innerWidth;sky.height=innerHeight;}
resizeSky();addEventListener("resize",resizeSky);
let skyProg=0,skyTarget=0;
function lerp(a,b,t){return a+(b-a)*t;}
function lerpColor(c1,c2,t){return [lerp(c1[0],c2[0],t),lerp(c1[1],c2[1],t),lerp(c1[2],c2[2],t)];}
function drawSky(){
  skyProg+=(skyTarget-skyProg)*0.02;
  const dayTop=[255,210,210],nightTop=[10,15,35];
  const dayBot=[255,160,165],nightBot=[5,8,20];
  const top=lerpColor(dayTop,nightTop,skyProg);
  const bot=lerpColor(dayBot,nightBot,skyProg);
  const g=sctx.createLinearGradient(0,0,0,sky.height);
  g.addColorStop(0,`rgb(${top.join(",")})`);
  g.addColorStop(1,`rgb(${bot.join(",")})`);
  sctx.fillStyle=g;sctx.fillRect(0,0,sky.width,sky.height);
  requestAnimationFrame(drawSky);
}
drawSky();

/* ----------- STARS ----------- */
const starsCanvas=document.getElementById("stars");
const starsCtx=starsCanvas.getContext("2d");
function resizeStars(){starsCanvas.width=innerWidth;starsCanvas.height=innerHeight;}
resizeStars();addEventListener("resize",resizeStars);
let stars=[];
for(let i=0;i<200;i++)
  stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5,phase:Math.random()*6.28});
let starAlpha=0;
function drawStars(alpha){
  starsCtx.clearRect(0,0,innerWidth,innerHeight);
  stars.forEach(s=>{
    const tw=0.5+0.5*Math.sin(Date.now()/500+s.phase);
    starsCtx.fillStyle=`rgba(255,255,255,${alpha*tw})`;
    starsCtx.beginPath();
    starsCtx.arc(s.x,s.y,s.r,0,Math.PI*2);
    starsCtx.fill();
  });
}

/* ----------- HEARTS ----------- */
const heartsCanvas=document.getElementById("hearts");
const hctx=heartsCanvas.getContext("2d");
function resizeHearts(){heartsCanvas.width=innerWidth;heartsCanvas.height=innerHeight;}
resizeHearts();addEventListener("resize",resizeHearts);
let hearts=[];
function Heart(x,y,s,sp){this.x=x;this.y=y;this.s=s;this.sp=sp;this.a=Math.random()*0.5+0.5;}
Heart.prototype.draw=function(){
  hctx.save();hctx.translate(this.x,this.y);hctx.scale(this.s,this.s);
  hctx.beginPath();
  hctx.moveTo(0,0);
  hctx.bezierCurveTo(0,-3,-3,-3,-3,0);
  hctx.bezierCurveTo(-3,3,0,5,0,8);
  hctx.bezierCurveTo(0,5,3,3,3,0);
  hctx.bezierCurveTo(3,-3,0,-3,0,0);
  hctx.fillStyle=`rgba(255,105,180,${this.a})`;
  hctx.fill();hctx.restore();
};
Heart.prototype.update=function(){
  this.y-=this.sp;
  if(this.y<-10){this.y=heartsCanvas.height+10;this.x=Math.random()*heartsCanvas.width;}
  this.draw();
};
const heartCount=innerWidth<600?40:100;
for(let i=0;i<heartCount;i++)
  hearts.push(new Heart(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*0.8+0.2,Math.random()*1+0.3));
function animateHearts(){
  hctx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);
  hearts.forEach(h=>h.update());
  requestAnimationFrame(animateHearts);
}
animateHearts();

/* ----------- SCENES ----------- */
let index=0;
const scene=document.getElementById("scene");
const nextBtn=document.getElementById("nextBtn");
const backBtn=document.getElementById("backBtn");
const dots=document.getElementById("dots");

function createDots(){
  dots.innerHTML="";
  for(let i=0;i<messages.length;i++){
    const d=document.createElement("div");
    d.className="dot"+(i===index?" active":"");
    dots.appendChild(d);
  }
}
function updateDots(){[...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));}

function typeEffect(el,text,delay=40){
  el.textContent="";
  let i=0;const timer=setInterval(()=>{el.textContent+=text[i++];if(i>=text.length)clearInterval(timer);},delay);
}
function updateScene(){
  scene.style.opacity=0;
  setTimeout(()=>{
    const m=messages[index];
    scene.innerHTML=`<h1>${m.title}</h1><p></p>`;
    const p=scene.querySelector("p");
    scene.style.opacity=1;
    typeEffect(p,m.text);
    backBtn.disabled=index===0;
    nextBtn.disabled=index===messages.length-1;
    updateDots();
    skyTarget=index/(messages.length-1);
    starAlpha=skyTarget*0.9;
    drawStars(starAlpha);
  },400);
}
nextBtn.onclick=()=>{if(index<messages.length-1){index++;updateScene();}};
backBtn.onclick=()=>{if(index>0){index--;updateScene();}};

/* ----------- MUSIC ----------- */
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

// 💿 List of songs (just list whatever you upload to /music)
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

function getRandomSong() {
  const i = Math.floor(Math.random() * playlist.length);
  return playlist[i];
}

let currentSong = "", isMuted = false;

function playRandomSong() {
  const random = getRandomSong();
  if (random === currentSong && playlist.length > 1) return playRandomSong();
  currentSong = random;
  music.src = random;
  music.volume = 0;
  music.play()
    .then(() => {
      let v = 0;
      const fade = setInterval(() => {
        if (v < 0.7 && !isMuted) {
          v += 0.02;
          music.volume = v;
        } else clearInterval(fade);
      }, 100);

      // 🌟 Glow animation when song changes
      nextSongBtn.classList.add("glow");
      setTimeout(() => nextSongBtn.classList.remove("glow"), 1000);
    })
    .catch(err => console.warn("Audio error:", err));
}

startBtn.onclick = () => {
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 1500);
  playRandomSong();
};

const muteBtn = document.getElementById("muteBtn");
const nextSongBtn = document.getElementById("nextSongBtn");

muteBtn.onclick = () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
};

nextSongBtn.onclick = () => {
  playRandomSong();
};

/* ----------- INIT ----------- */
createDots();updateScene();
