/* --------- Story Texts --------- */
const messages=[
  {title:"Shayeri 1",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 2",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 3",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 4",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 5",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 6",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"},
  {title:"Shayeri 7",text:"line1 line1 line1 line1 line1\nline2 line2 line2 line2 line2\nline3 line3 line3 line3 line3\nline4 line4 line4 line4 line4\n.\nline5 line5 line5 line5 line5\nline6 line6 line6 line6 line6\nline7 line7 line7 line7 line7\nline8 line8 line8 line8 line8\n.\nline9 line9 line9 line9 line9\nline10 line10 line10 line10 line10\nline11 line11 line11 line11 line11\nline12 line12 line12 line12 line12\n.\nline13 line13 line13 line13 line13\nline14 line14 line14 line14 line14\nline15 line15 line15 line15 line15\nline16 line16 line16 line16 line16\n"}
];

/* --------- Sky Gradient --------- */
const sky = document.getElementById("sky"), ctx = sky.getContext("2d");
function resize(){ sky.width = innerWidth; sky.height = innerHeight; }
resize(); addEventListener("resize", resize);
let skyProgress = 0, skyTarget = 0;
function lerp(a,b,t){ return a+(b-a)*t; }
function lerpColor(c1,c2,t){ return [c1[0]+(c2[0]-c1[0])*t, c1[1]+(c2[1]-c1[1])*t, c1[2]+(c2[2]-c1[2])*t]; }
function drawSky(){
  skyProgress += (skyTarget - skyProgress)*0.05;
  const dayTop=[255,235,190], nightTop=[10,20,40];
  const dayBot=[255,170,180], nightBot=[10,10,25];
  const top=lerpColor(dayTop,nightTop,skyProgress), bot=lerpColor(dayBot,nightBot,skyProgress);
  const g=ctx.createLinearGradient(0,0,0,sky.height);
  g.addColorStop(0,`rgb(${top.join(",")})`);
  g.addColorStop(1,`rgb(${bot.join(",")})`);
  ctx.fillStyle=g; ctx.fillRect(0,0,sky.width,sky.height);
  requestAnimationFrame(drawSky);
}
drawSky();

/* --------- Stars --------- */
const starsCanvas=document.getElementById("stars"), starsCtx=starsCanvas.getContext("2d");
function resizeStars(){ starsCanvas.width=innerWidth; starsCanvas.height=innerHeight; }
resizeStars(); addEventListener("resize", resizeStars);
let stars=[]; for(let i=0;i<200;i++) stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5,phase:Math.random()*6.28});
function drawStars(a){
  starsCtx.clearRect(0,0,innerWidth,innerHeight);
  stars.forEach(s=>{
    const tw=0.5+0.5*Math.sin(Date.now()/500+s.phase);
    starsCtx.fillStyle=`rgba(255,255,255,${a*tw})`;
    starsCtx.beginPath(); starsCtx.arc(s.x,s.y,s.r,0,Math.PI*2); starsCtx.fill();
  });
}

/* --------- Floating Hearts --------- */
const heartsCanvas=document.getElementById("hearts"), hctx=heartsCanvas.getContext("2d");
function resizeHearts(){ heartsCanvas.width=innerWidth; heartsCanvas.height=innerHeight; }
resizeHearts(); addEventListener("resize", resizeHearts);
class Heart{
  constructor(x,y,s,sp){ this.x=x; this.y=y; this.s=s; this.sp=sp; this.a=Math.random()*0.5+0.5; }
  draw(){
    hctx.save(); hctx.translate(this.x,this.y); hctx.scale(this.s,this.s);
    hctx.beginPath();
    hctx.moveTo(0,0);
    hctx.bezierCurveTo(0,-3,-3,-3,-3,0);
    hctx.bezierCurveTo(-3,3,0,5,0,8);
    hctx.bezierCurveTo(0,5,3,3,3,0);
    hctx.bezierCurveTo(3,-3,0,-3,0,0);
    hctx.fillStyle=`rgba(255,105,180,${this.a})`;
    hctx.fill(); hctx.restore();
  }
  update(){
    this.y -= this.sp;
    if(this.y<-10){ this.y=heartsCanvas.height+10; this.x=Math.random()*heartsCanvas.width; }
    this.draw();
  }
}
let hearts=[];
for(let i=0;i<(innerWidth<600?40:100);i++)
  hearts.push(new Heart(Math.random()*innerWidth,Math.random()*innerHeight,Math.random()*0.8+0.2,Math.random()*1+0.3));
function animateHearts(){
  hctx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);
  hearts.forEach(h=>h.update());
  requestAnimationFrame(animateHearts);
}
animateHearts();

/* --------- Sun & Moon Motion --------- */
const sun=document.getElementById("sun"), moon=document.getElementById("moon"), moonHeart=document.getElementById("moonHeart");
function updateCelestial(immediate=false){
  const t=skyTarget;
  const sunX=50-t*50, moonX=100-t*50;
  sun.style.left=`calc(${sunX}% - 50px)`;
  moon.style.left=`calc(${moonX}% - 50px)`;
  const sunFade=1-t*1.2, moonFade=t;
  const sunSize=250-t*150, moonSize=100+t*150;
  sun.style.opacity=Math.max(sunFade,0);
  moon.style.opacity=Math.min(moonFade,1);
  sun.style.width=sun.style.height=`${sunSize}px`;
  moon.style.width=moon.style.height=`${moonSize}px`;
}

/* --------- Scene Flow --------- */
let index=0;
const scene=document.getElementById("scene"),
      next=document.getElementById("nextBtn"),
      back=document.getElementById("backBtn"),
      dots=document.getElementById("dots");

function createDots(){
  dots.innerHTML="";
  messages.forEach((_,i)=>{
    const d=document.createElement("div");
    d.className="dot"+(i===index?" active":"");
    dots.appendChild(d);
  });
}
function updateDots(){
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));
}
function typeEffect(el,text,delay=40){
  el.innerHTML="";
  let i=0;
  const t=setInterval(()=>{
    el.innerHTML=text.slice(0,i++).replace(/\n/g,"<br>");
    if(i>text.length)clearInterval(t);
  },delay);
}
function updateScene(){
  if(index<0){ transitionToIntro(); return; }
  scene.style.opacity=0;
  setTimeout(()=>{
    if(index>=messages.length){ transitionToEnding(); return; }
    const m=messages[index];
    scene.innerHTML=`<h1>${m.title}</h1><p></p>`;
    const p=scene.querySelector("p");
    scene.style.opacity=1; typeEffect(p,m.text);
    updateDots();
    skyTarget=index/(messages.length-1);
    drawStars(skyTarget*0.9);
    updateCelestial(true);
  },200);
}
next.onclick=()=>{ index++; updateScene(); };
back.onclick=()=>{ index--; updateScene(); };

/* --------- Transitions --------- */
const intro=document.getElementById("intro"),
      main=document.getElementById("mainContent"),
      ending=document.getElementById("ending"),
      startBtn=document.getElementById("startBtn"),
      secretInput=document.getElementById("secretInput"),
      errorMsg=document.getElementById("errorMsg"),
      replayBtn=document.getElementById("replayBtn");

function fadeSwitch(from,to){
  from.style.opacity="0";
  setTimeout(()=>{
    from.classList.add("hidden");
    to.classList.remove("hidden");
    to.style.opacity="1";
  },1500);
}
function transitionToIntro(){
  fadeSwitch(main,intro);
  index=0; skyTarget=0; updateCelestial(true);
}
function transitionToEnding(){
  fadeSwitch(main,ending);
  skyTarget=1; updateCelestial(true);
  setTimeout(()=>{
    moonHeart.style.opacity=1;
    moonHeart.style.animation="beat 1.5s infinite ease-in-out";
  },1200);
}
replayBtn.onclick=()=>{
  moonHeart.style.opacity=0;
  moonHeart.style.animation="none";
  fadeSwitch(ending,main);
  skyTarget=0; index=0; updateScene(); updateCelestial(true);
};

/* --------- Music --------- */
const music=document.getElementById("bgMusic"),
      mute=document.getElementById("muteBtn"),
      nextSong=document.getElementById("nextSongBtn");
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
let currentSong="", isMuted=false;
function getRandomSong(){ return playlist[Math.floor(Math.random()*playlist.length)]; }
function playRandomSong(){
  const s=getRandomSong();
  if(s===currentSong && playlist.length>1) return playRandomSong();
  currentSong=s; music.src=s; music.volume=0;
  music.play().then(()=>{
    let v=0;
    const fade=setInterval(()=>{
      if(v<0.7 && !isMuted){ v+=0.02; music.volume=v; }
      else clearInterval(fade);
    },100);
    nextSong.classList.add("glow");
    setTimeout(()=>nextSong.classList.remove("glow"),1000);
  }).catch(e=>console.warn(e));
}
music.addEventListener("ended",()=>playRandomSong());
mute.onclick=()=>{ isMuted=!isMuted; music.muted=isMuted; mute.textContent=isMuted?"🔇":"🔊"; };
nextSong.onclick=()=>playRandomSong();

/* --------- Start Journey --------- */
startBtn.onclick=()=>{
  const secret="wh";
  if(secretInput.value.trim().toLowerCase()!==secret){
    errorMsg.textContent="💔 Wrong phrase, try again!";
    return;
  }
  fadeSwitch(intro,main);
  playRandomSong();
  skyTarget=0; index=0; updateScene(); updateCelestial(true);
};

/* --------- Init --------- */
createDots();
updateScene();
drawStars(0);
updateCelestial(true);
