/* ---------------- TEXT SCENES ---------------- */
const messages = [
  { title: "Happy Anniversary, my love 💖", text: "Click next to begin our little journey together 💞" },
  { title: "From the moment I met you…", text: "I knew my world had just changed forever 🌷" },
  { title: "Every heartbeat whispers your name", text: "Your smile is my sunrise,\nYour laugh my favorite melody ☀️" },
  { title: "You are my today and all my tomorrows", text: "Each moment with you is my happiest memory 💫" },
  { title: "Forever yours ❤️", text: "As night falls, my heart still shines for you under every star 🌌" }
];

/* ---------------- BACKGROUND SKY ---------------- */
const sky=document.createElement("canvas");const sctx=sky.getContext("2d");
sky.style.position="fixed";sky.style.inset="0";sky.style.zIndex="-3";document.body.prepend(sky);
function resizeSky(){sky.width=innerWidth;sky.height=innerHeight;}resizeSky();addEventListener("resize",resizeSky);
let skyProg=0,skyTarget=0;
function lerp(a,b,t){return a+(b-a)*t;}function lerpColor(c1,c2,t){return[c1[0]+(c2[0]-c1[0])*t,c1[1]+(c2[1]-c1[1])*t,c1[2]+(c2[2]-c1[2])*t];}
function drawSky(){skyProg+=(skyTarget-skyProg)*0.02;const dt=[255,210,210],nt=[10,15,35];const db=[255,160,165],nb=[5,8,20];
const t=lerpColor(dt,nt,skyProg),b=lerpColor(db,nb,skyProg);const g=sctx.createLinearGradient(0,0,0,sky.height);
g.addColorStop(0,`rgb(${t.join(",")})`);g.addColorStop(1,`rgb(${b.join(",")})`);sctx.fillStyle=g;sctx.fillRect(0,0,sky.width,sky.height);requestAnimationFrame(drawSky);}drawSky();

/* ---------------- STARS ---------------- */
const starsCanvas=document.getElementById("stars");const starsCtx=starsCanvas.getContext("2d");
function resizeStars(){starsCanvas.width=innerWidth;starsCanvas.height=innerHeight;}resizeStars();addEventListener("resize",resizeStars);
let stars=[];for(let i=0;i<200;i++){stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5,phase:Math.random()*6.28});}
let starAlpha=0;function drawStars(a){starsCtx.clearRect(0,0,innerWidth,innerHeight);
stars.forEach(s=>{const tw=0.5+0.5*Math.sin(Date.now()/500+s.phase);starsCtx.fillStyle=`rgba(255,255,255,${a*tw})`;
starsCtx.beginPath();starsCtx.arc(s.x,s.y,s.r,0,Math.PI*2);starsCtx.fill();});}

/* ---------------- HEARTS ---------------- */
const heartsCanvas=document.getElementById("hearts");const hctx=heartsCanvas.getContext("2d");
function resizeHearts(){heartsCanvas.width=innerWidth;heartsCanvas.height=innerHeight;}resizeHearts();addEventListener("resize",resizeHearts);
let hearts=[];function Heart(x,y,s,sp){this.x=x;this.y=y;this.s=s;this.sp=sp;this.a=Math.random()*0.5+0.5;}
Heart.prototype.draw=function(){hctx.save();hctx.translate(this.x,this.y);hctx.scale(this.s,this.s);hctx.beginPath();
hctx.moveTo(0,0);hctx.bezierCurveTo(0,-3,-3,-3,-3,0);hctx.bezierCurveTo(-3,3,0,5,0,8);hctx.bezierCurveTo(0,5,3,3,3,0);
hctx.bezierCurveTo(3,-3,0,-3,0,0);hctx.fillStyle=`rgba(255,105,180,${this.a})`;hctx.fill();hctx.restore();};
Heart.prototype.update=function(){this.y-=this.sp;if(this.y<-10){this.y=heartsCanvas.height+10;this.x=Math.random()*heartsCanvas.width;}this.draw();};
const hc=innerWidth<600?40:100;for(let i=0;i<hc;i++){hearts.push(new Heart(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*0.8+0.2,Math.random()*1+0.3));}
function animateHearts(){hctx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);hearts.forEach(h=>h.update());requestAnimationFrame(animateHearts);}animateHearts();

/* ---------------- SCENE FLOW ---------------- */
let index=0;const scene=document.getElementById("scene");const nextBtn=document.getElementById("nextBtn");
const backBtn=document.getElementById("backBtn");const dots=document.getElementById("dots");const ending=document.getElementById("ending");
const replayBtn=document.getElementById("replayBtn");

function createDots(){dots.innerHTML="";for(let i=0;i<messages.length;i++){const d=document.createElement("div");d.className="dot"+(i===index?" active":"");dots.appendChild(d);}}
function updateDots(){[...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));}
function typeEffect(el,text,delay=40){el.innerHTML="";let i=0;const timer=setInterval(()=>{el.innerHTML=text.slice(0,i++).replace(/\n/g,"<br>");if(i>text.length)clearInterval(timer);},delay);}
function updateScene(){scene.style.opacity=0;setTimeout(()=>{if(index>=messages.length){document.getElementById("mainContent").classList.add("hidden");ending.classList.remove("hidden");return;}
const m=messages[index];scene.innerHTML=`<h1>${m.title}</h1><p></p>`;const p=scene.querySelector("p");scene.style.opacity=1;typeEffect(p,m.text);
backBtn.disabled=index===0;nextBtn.disabled=index===messages.length;updateDots();skyTarget=index/(messages.length-1);starAlpha=skyTarget*0.9;drawStars(starAlpha);},400);}
nextBtn.onclick=()=>{if(index<messages.length){index++;updateScene();}};backBtn.onclick=()=>{if(index>0){index--;updateScene();}};
replayBtn.onclick=()=>{ending.classList.add("hidden");index=0;document.getElementById("mainContent").classList.remove("hidden");updateScene();};

/* ---------------- MUSIC ---------------- */
const intro=document.getElementById("intro");const mainContent=document.getElementById("mainContent");
const startBtn=document.getElementById("startBtn");const music=document.getElementById("bgMusic");
const secretInput=document.getElementById("secretInput");const errorMsg=document.getElementById("errorMsg");
const muteBtn=document.getElementById("muteBtn");const nextSongBtn=document.getElementById("nextSongBtn");

const playlist=["music/1.mp3","music/2.mp3","music/3.mp3","music/4.mp3"];
let currentSong="",isMuted=false;
function getRandomSong(){return playlist[Math.floor(Math.random()*playlist.length)];}
function playRandomSong(){
  const r=getRandomSong();
  if(r===currentSong&&playlist.length>1)return playRandomSong();
  currentSong=r;music.src=r;music.volume=0;
  music.play().then(()=>{
    let v=0;const fade=setInterval(()=>{if(v<0.7&&!isMuted){v+=0.02;music.volume=v;}else clearInterval(fade);},100);
    nextSongBtn.classList.add("glow");setTimeout(()=>nextSongBtn.classList.remove("glow"),1000);
  }).catch(e=>console.warn(e));
}
music.addEventListener("ended",()=>{playRandomSong();});

startBtn.onclick=()=>{
  const secret="forever"; // <- your secret phrase
  if(secretInput.value.trim().toLowerCase()!==secret){
    errorMsg.textContent="💔 Wrong phrase, try again!";
    return;
  }
  intro.style.opacity="0";
  setTimeout(()=>{intro.style.display="none";mainContent.classList.remove("hidden");},1500);
  playRandomSong();
};
muteBtn.onclick=()=>{isMuted=!isMuted;music.muted=isMuted;muteBtn.textContent=isMuted?"🔇":"🔊";};
nextSongBtn.onclick=()=>{playRandomSong();};

/* ---------------- INIT ---------------- */
createDots();updateScene();
