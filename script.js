/* --------- Story Texts --------- */
const messages=[
  {title:"🌹 Sarfaraz-e-Ihtiraam",text:"Husn-e-tajalli se roshan hai har lamha-e-dil ka maqtal-e-ishq bahaar\nZauq-e-nazar mein teri soorat hai goya sitaaron ka me’raaj-e-husn guzar\nRooh ke dafter mein teri yaad likhe mujhe deti hai har ranj se narm qaraar\nFikr-e-mohabbat mein tera aks chamakta hai jaise subah ka dhoop ka uchar\n \nLafz-o-ada mein teri mehak bas jaaye to badal jaata hai soch ka har dayaar\nWahdat-e-sha’oor ki gehraaiyon mein tera husn ban jaaye noor ka kinar\nLogon ki mehfil mein bhi meri nigah dhoondti teri muskaan ka chashm-e-sharaar\nTeri adaon se gul-o-nargis ko bhi aata hai jeetay hue rangon ka fazaar\n \nHar baat teri bani rehti hai meri raaton ka mehfooz sa noor-e-nisaar\nHar dafa teri taraf dekhoon to lagta hai waqt rukkar sajaye koi asraar\nDil ke makaam-e-ultefat mein tera zikr hai goya ibtida-e-ishq ka samar\nTere qareeb hoon to mehsoos hota hai khud maa’ni ban jaaye zindagi ka mazaar\n \nTera ta’alluq meri rooh ko deta hai subuk si razayi hawa ka ubhaar\nTeri nigah se saari kaaynaat hoti hai aik pal ke liye roshan-e-shukaar\nTu muskuraaye to dil ke shehr mein bajte hain khamosh manzar ki saazish-e-pukaar\nAur jab main dekhun tujhe, lagta hai kismet ne likh di ho ishq ki khubsurat kiraar\n"},
  {title:"🌙 Himaayat-e-Sukoon",text:"Jab nafs-parasti ke toofan mujhe todte hain, tu ban jaati hai rooh-parwari ki rubaah\nKhauf-e-firaq ke sayaaye ghirtay hi tu bhar deti hai bazm-e-tasalli ki nisaah\nMeri thakti hui rooh ko milta hai tujhse sukoon-e-wijdan ka be-sada sabaah\nMain ghabrahat mein doobun toh teri shafaqat-e-jaan ban jaati hai noor-e-dil ki jazaah\n \nQalb-e-tashweesh mein teri narm-e-tasalsul hawaon ko de deta hai rang-e-aman ka fasaah\nTanhaiyon ke darya mein teri himaayat ban jaati hai qasr-e-itminaan ki ibaah\nMeri uljhan ko tu halkaar-e-mamta ki tarah chhod kar bhar deti hai dil par meher ki wazaah\nJab zindagi bhari ho ranj se, tu deta hai soot-e-qarar jaisa gehra sa masaah\n \nBe-hausla palon mein teri maddad-e-ruhiyat uthati hai mujhe har andhere ki pasaah\nMeri har duaa ka markaz tu hi hai, jo de deti hai rooh ko pur-noor si saraah\nMere daagh-e-junoon bhi teri rehnumaayi se ban jaate hain raushniyon ke nuzhaah\nMain toot kar bikhar jaaun toh teri muhabat-e-azmeen uthati hai meri har risaah\n \nFikr-o-tashweesh ke sehraa mein tu bhar deti hai dil ko tehreek-e-taskeen ki kashaah\nMere shaqq-shubhon ko teri rehbar-e-mehrbaani bana deti hai jazb-e-umeed ka nisaakh\nHar mod-e-zindagi pe teri hifazat ban jaati hai raah-e-rahmat ka soz-e-zafaah\nAur jab tu mujhe thaamti hai, mehsoos hota hai Rab ki rehmat ne di ho be-misaal panaah\n"},
  {title:"💔 Be-Pardaai-e-Rooh",text:"Jab zaakhm-e-wijdan ubhar kar mujhe bechain kare, main tujhko kar deta hoon har raaz-e-khamosh\nMere andar ki rooh-e-parishaan khul jaati hai jab main be-parda girtay hue hota hoon behosh\nMain khauf-e-tanahaayi ke sahra mein ulajh kar rakh deta hoon teray saamne har dhadkan-e-faramosh\nJo dard-e-lateef rooh mein chhupa hota hai, tu usay samajh leti hai goya koi naghma-e-aabrosh\n \nMain kamzori ke daftar-e-sehraa ko khol kar rakh deta hoon jaise makhfi riwayat-e-parwazgosh\nMeri saanson ki thakawat ko teri rehnumaayi mil jaati hai jaise subah ka noor-e-hunsarosh\nJo jazb-e-muraaqba dil mein jam’ hota hai, tu usay khol deti hai noor-e-tasalli ke padosh\nMain apne darr ko teri shafaqat-e-jaan mein de kar mehsoos karta hoon ke dard ka naqsh ho gaya ghulamosh\n \nMere masail-e-nafsiyet jab bojh ban jaate hain, tu unhein mehsoos kar leti hai halkee hawaon ki taranjosh\nMain jab be-jaan soch mein doob kar khamoshi se rota hoon, tu sunn leti hai har aah-e-barfaamosh\nJo dard-e-nahan mere saath rehta hai, tu usay padhti hai jaise rooh ka tashreehi matrosh\nTalatum-e-ehsaas mein jab main girtay hue sochun, tu thaam leti hai har be-sada tukda-e-dilfaashosh\n \nMain apni rooh ke makhfi gham tujhko de kar paata hoon sakoon-e-wijdan ka halka sa mehvosh\nJo ranj-o-talaffuz mujhe hila deta hai, tu usay narm-e-tasalsul se kar deti hai be-dard navaamosh\nMain toot kar girun toh tu rooh-parwari se mere andar ki sunsaan hawaon ko kar deti hai adamkhosh\nAur sabse gehri baat yeh ke tere saamne kamzori dikhana lagta hai ek rehmat-e-Rab ka bakhshosh\n"},
  {title:"❤‍🔥 Aatish-e-Izteraab",text:"Jab jazb-e-talaash tere qurbat se bhadakta hai, rooh bhar jaati hai aatish-e-ishtiaq\nMere seene mein dhadakti hui arzoo uthti hai jaise lahu mein machalta koi soz-e-tasharq\nMain teri narmi ko chhootay hi mehsoos karta hoon ke dil bhar gaya hai raqs-e-wajd ke tarang\nMeri rooh mein uthti hui bechaini pighal jaati hai teri saanson ke mehekti hue aahang\n \nMain jazb-e-mohabbat ke toofaan ko rok na sakun jab teri nigah se jal uthta hoon poora sarq\nTeri baaton mein jo lutf-e-ishq hila deta hai, woh ban jaata hai rooh ki gehrayi ka absharaq\nMere haathon mein teri garmi utarti hai jaise koi taqdeer-e-shab-o-roz kar rahi ho utharq\nMain teri qurbat mein kho kar mehsoos karta hoon ke dhadkan ke har zarre mein hai ishq ka nawarang\n nJo shiddat-e-ru’baab mere dil se ubhar jaati hai, tu usey badal deti hai aatish-e-sharaarq\nMain teri baahon mein gir kar paata hoon dil-o-jan ka raqs-e-mastaani jaisa noor-e-shabhang\nTeri mojudgi se har lehja pighal jaata hai jaise rooh ko mil gaya ho koi asraar-e-farwaaq\nMeri ragon mein tez behne lagta hai junoon ka safar jab tu chhoo leti hai raaz-e-jungtarang\n \nJab teri muskurahat jala deti hai mehfil-e-hawas ko, main beh jaata hoon arzoo ke dilasharq\nTeri qurbat se ban jaati hai saari kaaynaat ek mehsoos hota hua raqs-e-ishq ka paikarang\nHar lamha jo tere saath guzarta hai, ban jaata hai rooh ke andar ubharte hue soz-e-ibtiqarq\nAur jab tu mujhe thaam kar saans mein ghulti hai, meri poori hasti bhar jaati hai ishq ke humrang\n"},
  {title:"⚡💗 Tazad-o-Sulah",text:"Jab gham-e-bayaani meri rooh ko chheed jaata hai, alfaaz takraate hain aapas mein jaise patthar-khilakh\nMain jazb-e-naraazgi mein ulajh kar bol deta hoon woh baatein jo dil ke andar deti hain dard-e-sarsakh\nTalatum-e-soch mujhe tod kar rakh deta hai, har fikr ban jaati hai ek aatish-e-ru’baab-barakh\nMere lehje ki sakhawat kabhi kabhi rooh ko chhaal deti hai jaise teer-e-nafsiyat-darakshakh\n \nMain gussa-e-makhfi ke sahra mein kho jaata hoon, teri aankhon ka dukh phir ban jaata hai be-rukhi-takh\nJo lafz-e-kadwahat be-ikhteyaar nikal jaate hain, woh dil ke dafter par chhor jaate hain kashmakash-fasaakh\nMere andar ka tufaan kabhi itna bhadka uthta hai, ke jazbaat-e-rawaan ko tod deta hai har ek band-bhanakh\nMain ghaltfahmi ke andheron mein doob kar mehsoos karta hoon ke hum dono ko alag karta jaa raha hai koi sooz-e-tarakh\n \nMagar phir teri narmi-e-jazbaat se rooh ko milti hai woh thandak jo pighla deti hai har gila-sarfaaz\nTeri baaton ke aahista narm lehje se dil ke saaye dhal jaate hain jaise rehmat ki girti hui nawaa’z\nJab tu be-sada muskurakar mujhe samjhaati hai, to gussa-e-dil ho jaata hai raqs-e-mehar ka narmgaaz\nMeri uljhan teri himaayat se badal jaati hai ek rooh-parwar tasalli mein, jaise chhuta ho dard ka ilaaj-e-raaz\n \nTeri maafi se meri rooh ko milti hai woh roshan ghadi jo likh deti hai jazb-e-wafa ka naya misbaaz\nJab tu mujhe thaam kar khamoshi se dekh leti hai, to tootay hue ehsaas ban jaate hain rang-e-nihaazaaz\nPhir hum dono apni zidd-o-jazbaat ko rakh kar pichhe, ik nayi mohabbat ka raasta dhoond lete hain kamaal-aaz\nAur us pal mehsoos hota hai ke hum dono ke darmiyan Rab ne phir se likh diya ho sulah ka noor-e-sarandaaz\n"},
  {title:"🌱 Nash'o-Numa-e-Rooh",text:"Main teri rehnumaayi se rooh ko deta hoon woh tawazun jo badal deta hai har soch ka aahista ta’leem\nTeri qurbat mujhe sikhlaati hai jazb-e-bayaani ki woh gehraai jo utha deti hai rooh ka nash’e’een\nMere andar ki rawani-e-fikr ko milti hai teri sohbat se woh roshan riwayat jo kar deti hai dil ko azeem\nJab tu samjhaati hai, parwaaz-e-ehsaas ko milta hai safar ka naya noor jaise subah ka ubharta zahir’e’een\n \nMain har kamzori ko teri himaayat se badal deta hoon quwwat-e-nafs mein, jaise ilm-e-hikmat ki narm taqweemeen\nTeri baaton ka sukoon meri soch ko deta hai wo wusa’at jo phel jaati hai rooh mein noor-e-raqeemeen\nMeri har ghalati ko tu samajh kar bana deti hai us se woh sabaq jo zindagi sikhlaati hai raag-e-baseem\nTeri muhabat ke saath har saans badal jaati hai ek musalsal taraqqi mein, ek be-nehaayat tarq’e’een\n \nJab tu sharh-e-wajood samjhaati hai, mere khwaab ban jaate hain noor-e-tameer ka be-misaal nadeem\nMain apne darr ko tere ilm-e-tasalli se pighal kar samajh paata hoon har ranj ka asal taqleemeen\nHar din teri rehnumaayi mere andar ki mehroomi ko badal kar kar deti hai rooh ka raasta aur bhi rafe’een\nMeri rooh mein teri soch ki baarish girti hai jaise ek nayi zindagi ka ubharta hua hakeem\n \nMain har qadam teray saath chal kar sikh leta hoon ke kaise badalte hain jazbaat-e-fikr ki soorat tasleemeen\nTeri mohabbat se har mod-e-hayat par milta hai woh noor jo de deta hai dil ko riwayat-e-safe’een\nJab tu saath hoti hai, toh har pechida soch bhi samajh mein dhal jaati hai jaise rooh ka likha hua tanzeem\nAur tab mehsoos hota hai ke hum dono ek doosray se seekh kar ban rahe hain behtar insaan-e-jalale’een\n"},
  {title:"💗 Wafa-e-Abad",text:"Main teri mohabbat ko rooh ki fitrat bana kar meiñ mehsoos karta hoon Rab ka likha hua paighaam\nTeri wafa meri zaat ke andar yun utar jaati hai jaise noor-e-haq ki be-sada musalsal fitrataam\nMain har dard-e-wajood ko tujh pe chhor deta hoon jaise rooh-e-tasleem ka saadiq hua koi iimaan\nTeri qurbat meri zindagi ki bunyaad ban jaati hai jaise arsh se utarta hua rehmat ka javidaan\n \nMain teri har kami ko apni rooh ka hissa banakar tumhein de deta hoon mohabbat ka pura arjuman\nTeri himaayat se meri zindagi rang laati hai jaise waqt-e-tameer ka ubharta hua raahnumaan\nMain apni saari khataayein tere saamne khol deta hoon kyunke tu ban jaati hai rooh ki asli meherbaan\nTeri rehmat-e-dilbar se har ranj-e-makhdar pighal kar ban jaata hai raushan-e-wafa ka nishaan\n \nMain apna mustaqbil bhi teri baahon mein dekh leta hoon jaise kismet ne khud likhi ho soorat-e-meraajaan\nMere khwaab tere saath yun jud jaate hain jaise har waqt raqeeb na ho, balkeh ek rooh ke hamraahaan\nMain jab kamzor padun toh teri muhabbat mujhe uthati hai jaise rooh-e-sabr ka ubharta hua imdaad-e-aam\nTeri nigah se meri rooh ko milta hai woh itminaan jo ban jaata hai har uljhan ka marham-e-aam\n \nMain har saans teray naam kar deta hoon kyunke tu ban gayi hai meri har dua ka mustaqil armaan\nTeri mojudgi se zindagi ko milta hai woh wujud jo likh deta hai har lamhe ko ishq ka sarmastaan\nMain bewajah bhi tujhe chahta hoon, bina shart-o-hadd ke, jaise rooh ki azli qasam ka arz-e-qadmaan\nAur tab samajh aata hai ke tu meri likhi hui taqdeer nahi — balki Rab ki apni rehmat ka nizdaan\n"}
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
function updateCelestial(){
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
    updateCelestial();
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
  index=0; skyTarget=0; updateCelestial();
}
function transitionToEnding(){
  fadeSwitch(main,ending);
  skyTarget=1; updateCelestial();
  setTimeout(()=>{
    moonHeart.style.opacity=1;
    moonHeart.style.animation="beat 1.5s infinite ease-in-out";
  },1200);
}
replayBtn.onclick=()=>{
  moonHeart.style.opacity=0;
  moonHeart.style.animation="none";
  fadeSwitch(ending,main);
  skyTarget=0; index=0; updateScene(); updateCelestial();
};

/* --------- Music --------- */
const music = document.getElementById("bgMusic"),
      mute = document.getElementById("muteBtn"),
      nextSong = document.getElementById("nextSongBtn");

const playlist = [
  "music/song1.mp3",
  "music/song2.mp3",
  "music/song3.mp3",
  "music/song4.mp3",
  "music/song5.mp3",
  "music/song6.mp3",
  "music/song7.mp3",
  "music/song8.mp3",
  "music/song9.mp3"
];

let currentIndex = 0;
let isMuted = false;

function playSong(index) {
  currentIndex = (index + playlist.length) % playlist.length;
  music.src = playlist[currentIndex];
  music.volume = 0;
  music.play().then(() => {
    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.7 && !isMuted) {
        v += 0.02;
        music.volume = v;
      } else clearInterval(fade);
    }, 100);
    nextSong.classList.add("glow");
    setTimeout(() => nextSong.classList.remove("glow"), 1000);
  }).catch(e => console.warn(e));
}

music.addEventListener("ended", () => {
  currentIndex = (currentIndex + 1) % playlist.length; // go to next
  playSong(currentIndex);
});

mute.onclick = () => {
  isMuted = !isMuted;
  music.muted = isMuted;
  mute.textContent = isMuted ? "🔇" : "🔊";
};

nextSong.onclick = () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  playSong(currentIndex);
};


/* --------- Start Journey --------- */
startBtn.onclick = () => {
  const secret = "251118"; //Oye! Hacker babes!
  if (secretInput.value.trim().toLowerCase() !== secret) {
    errorMsg.textContent = "💔 Wrong phrase, try again!";
    return;
  }
  fadeSwitch(intro, main);
  currentIndex = 0;
  playSong(currentIndex); // ✅ this starts music properly
  skyTarget = 0;
  index = 0;
  updateScene();
  updateCelestial();
};
// ✅ Allow pressing Enter to start journey
secretInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    startBtn.click();
  }
});

/* --------- Init --------- */
createDots();
updateScene();
drawStars(0);
updateCelestial();
