// 💖 Messages — add or edit freely!
const messages = [
  { title: "Happy Anniversary, my love 💖", text: "Click next to begin our little journey together 💞" },
  { title: "From the moment I met you…", text: "I knew my world had just changed forever 🌷" },
  { title: "Every heartbeat whispers your name", text: "Your smile is my sunrise, your laugh my favorite melody ☀️" },
  { title: "You are my today and all my tomorrows", text: "Each moment with you is my happiest memory 💫" },
  { title: "Forever yours ❤️", text: "As night falls, my heart still shines for you under every star 🌌" }
];

// 🌅 Background gradient that darkens as you go
function updateBackground(index) {
  const t = index / (messages.length - 1);
  const startColor = [255, 154, 158]; // light pink
  const endColor = [10, 15, 35]; // dark night blue
  const mix = (a,b)=>Math.round(a+(b-a)*t);
  const c1 = `rgb(${mix(startColor[0],endColor[0])},${mix(startColor[1],endColor[1])},${mix(startColor[2],endColor[2])})`;
  const c2 = `rgb(${mix(startColor[0],80)},${mix(startColor[1],80)},${mix(startColor[2],80)})`;
  document.body.style.background = `radial-gradient(circle at top left, ${c1}, ${c2})`;
}

// 🌠 Stars Canvas (appear more as you go)
const starsCanvas = document.getElementById("stars");
const sctx = starsCanvas.getContext("2d");
starsCanvas.width = innerWidth;
starsCanvas.height = innerHeight;
let stars = [];
for(let i=0;i<150;i++){
  stars.push({x:Math.random()*innerWidth, y:Math.random()*innerHeight, r:Math.random()*1.5});
}
function drawStars(alpha=0){
  sctx.clearRect(0,0,starsCanvas.width,starsCanvas.height);
  sctx.fillStyle = `rgba(255,255,255,${alpha})`;
  stars.forEach(st=>{ sctx.beginPath(); sctx.arc(st.x,st.y,st.r,0,Math.PI*2); sctx.fill(); });
}

// ❤️ Floating Hearts
const heartsCanvas = document.getElementById("hearts");
const hctx = heartsCanvas.getContext("2d");
heartsCanvas.width = innerWidth;
heartsCanvas.height = innerHeight;
let hearts = [];
function Heart(x,y,s,sp){ this.x=x; this.y=y; this.s=s; this.sp=sp; this.a=Math.random()*0.5+0.5; }
Heart.prototype.draw=function(){
  hctx.save();
  hctx.translate(this.x,this.y);
  hctx.scale(this.s,this.s);
  hctx.beginPath();
  hctx.moveTo(0,0);
  hctx.bezierCurveTo(0,-3,-3,-3,-3,0);
  hctx.bezierCurveTo(-3,3,0,5,0,8);
  hctx.bezierCurveTo(0,5,3,3,3,0);
  hctx.bezierCurveTo(3,-3,0,-3,0,0);
  hctx.fillStyle=`rgba(255,105,180,${this.a})`;
  hctx.fill();
  hctx.restore();
};
Heart.prototype.update=function(){
  this.y-=this.sp;
  if(this.y<-10){ this.y=heartsCanvas.height+10; this.x=Math.random()*heartsCanvas.width; }
  this.draw();
};
function animateHearts(){
  hctx.clearRect(0,0,heartsCanvas.width,heartsCanvas.height);
  hearts.forEach(h=>h.update());
  requestAnimationFrame(animateHearts);
}
const heartCount = window.innerWidth<600?40:100;
for(let i=0;i<heartCount;i++){
  hearts.push(new Heart(Math.random()*heartsCanvas.width,Math.random()*heartsCanvas.height,Math.random()*0.8+0.2,Math.random()*1+0.3));
}
animateHearts();

window.addEventListener("resize",()=>{
  heartsCanvas.width=innerWidth; heartsCanvas.height=innerHeight;
  starsCanvas.width=innerWidth; starsCanvas.height=innerHeight;
});

// 💌 Scene logic
let index=0;
const scene=document.getElementById("scene");
const nextBtn=document.getElementById("nextBtn");
const backBtn=document.getElementById("backBtn");
const dotsContainer=document.getElementById("dots");

// Create dots
function createDots(){
  dotsContainer.innerHTML="";
  for(let i=0;i<messages.length;i++){
    const d=document.createElement("div");
    d.classList.add("dot");
    if(i===index)d.classList.add("active");
    dotsContainer.appendChild(d);
  }
}
function updateDots(){
  [...dotsContainer.children].forEach((d,i)=>{
    d.classList.toggle("active",i===index);
  });
}

function typeEffect(element,text,delay=40){
  element.innerHTML="";
  let i=0;
  const timer=setInterval(()=>{
    element.innerHTML+=text.charAt(i);
    i++;
    if(i===text.length)clearInterval(timer);
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
    updateBackground(index);
    drawStars(index/(messages.length-1)*0.8); // more stars towards end
  },400);
}

nextBtn.onclick=()=>{ if(index<messages.length-1)index++; updateScene(); };
backBtn.onclick=()=>{ if(index>0)index--; updateScene(); };

createDots();
updateBackground(0);
drawStars(0);
