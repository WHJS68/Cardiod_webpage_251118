/* ---------------  TEXT SCENES --------------- */
const messages = [
  { title:"Happy Anniversary, my love 💖", text:"Click next to begin our little journey together 💞"},
  { title:"From the moment I met you…", text:"I knew my world had just changed forever 🌷"},
  { title:"Every heartbeat whispers your name", text:"Your smile is my sunrise, your laugh my favorite melody ☀️"},
  { title:"You are my today and all my tomorrows", text:"Each moment with you is my happiest memory 💫"},
  { title:"Forever yours ❤️", text:"As night falls, my heart still shines for you under every star 🌌"}
];

/* ---------------  SKY CANVAS --------------- */
const sky = document.createElement("canvas");
const sctx = sky.getContext("2d");
sky.style.position="fixed";
sky.style.inset="0";
sky.style.zIndex="-3";
document.body.prepend(sky);
function resize(){ sky.width=innerWidth; sky.height=innerHeight; }
resize(); addEventListener("resize",resize);

let skyProg = 0, skyTarget = 0; // 0 = day , 1 = night
function lerp(a,b,t){ return a+(b-a)*t; }
function lerpColor(c1,c2,t){
  return [lerp(c1[0],c2[0],t),lerp(c1[1],c2[1],t),lerp(c1[2],c2[2],t)];
}
function drawSky(){
  skyProg += (skyTarget - skyProg) * 0.02; // smooth catch-up
  const dayTop=[255,210,210], nightTop=[10,15,35];
  const dayBot=[255,160,165], nightBot=[5,8,20];
  const top=lerpColor(dayTop,nightTop,skyProg);
  const bot=lerpColor(dayBot,nightBot,skyProg);
  const grad=sctx.createLinearGradient(0,0,0,sky.height);
  grad.addColorStop(0,`rgb(${top.join(",")})`);
  grad.addColorStop(1,`rgb(${bot.join(",")})`);
  sctx.fillStyle=grad;
  sctx.fillRect(0,0,sky.width,sky.height);
  requestAnimationFrame(drawSky);
}
drawSky();

/* ---------------  STARS --------------- */
const starsCanvas=document.getElementById("stars");
const starsCtx=starsCanvas.getContext("2d");
resizeStars();
let stars=[];
function resizeStars(){ starsCanvas.width=innerWidth; starsCanvas.height=innerHeight; }
addEventListener("resize",resizeStars);
for(let i=0;i<200;i++){
  stars.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.5,phase:Math.random()*6.28});
}
function drawStars(alphaBase){
  starsCtx.clearRect(0,0,innerWidth,innerHeight);
  stars.forEach(s=>{
    const twinkle = 0.5+0.5*Math.sin(Date.now()/500+s.phase);
    starsCtx.fillStyle=`rgba(255,255,255,${alphaBase*twinkle})`;
    starsCtx.beginPath();
    starsCtx.arc(s.x,s.y,s.r,0,Math.PI*2);
    starsCtx.fill();
  });
}

/* ---------------  HEARTS --------------- */
const heartsCanvas=document.getElementById("hearts");
const hctx=heartsCanvas.getContext("2d");
resizeHearts();
function resizeHearts(){ heartsCanvas.width=innerWidth; heartsCanvas.height=innerHeight; }
addEventListener("resize",resizeHearts);
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

/* ---------------  SCENE FLOW --------------- */
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
function updateDots(){
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));
}

function typeEffect(el,text,delay=40){
  el.textContent="";
  let i=0; const timer=setInterval(()=>{
    el.textContent+=text[i++]; if(i>=text.length) clearInterval(timer);
  },delay);
}

function updateScene(){
  scene.style.opacity=0;
  setTimeout(()=>{
    const msg=messages[index];
    scene.innerHTML=`<h1>${msg.title}</h1><p></p>`;
    const p=scene.querySelector("p");
    scene.style.opacity=1;
    typeEffect(p,msg.text);
    backBtn.disabled=index===0;
    nextBtn.disabled=index===messages.length-1;
    updateDots();
    /* background & stars smooth goals */
    skyTarget=index/(messages.length-1);            // 0→1 drives gradient
    drawStars(skyTarget*0.9);                      // star brightness
  },400);
}

nextBtn.onclick=()=>{ if(index<messages.length-1) index++; updateScene(); };
backBtn.onclick=()=>{ if(index>0) index--; updateScene(); };

createDots();
updateScene();
