/* =========================
   요소 가져오기
========================= */

const facePart = document.getElementById("facePart");
const eyebrowPart = document.getElementById("eyebrowPart");
const eyePart = document.getElementById("eyePart");
const nosePart = document.getElementById("nosePart");
const mouthPart = document.getElementById("mouthPart");

const browLabel = document.getElementById("browLabel");
const eyeLabel = document.getElementById("eyeLabel");
const noseLabel = document.getElementById("noseLabel");
const mouthLabel = document.getElementById("mouthLabel");


/* =========================
   아코디언
========================= */

document.querySelectorAll(".accordion-header")
.forEach(header => {

  header.addEventListener("click", () => {

    const accordion = header.parentElement;

    accordion.classList.toggle("active");

    const content = header.nextElementSibling;

    if(content.style.maxHeight){

      content.style.maxHeight = null;

    }else{

      content.style.maxHeight =
      content.scrollHeight + "px";

    }

  });

});


/* =========================
   얼굴형
========================= */

function setFace(type){

  facePart.textContent = type;

}


/* =========================
   눈썹
========================= */

const browNames = {

  "aA":"올라간 눈썹",
  "bB":"아치형 눈썹",
  "cC":"일자 눈썹",
  "dD":"쳐진 눈썹"

};

function setBrows(type){

  eyebrowPart.textContent = type;

  if(browLabel){

    browLabel.textContent =
    browNames[type];

  }

}


/* =========================
   눈
========================= */

const eyeNames = {

  "fF":"둥근 눈",
  "gG":"가는 눈",
  "hH":"올라간 눈",
  "iI":"거북이상 눈",
  "jJ":"뱀상 눈",
  "kK":"토끼상 눈"

};

function setEyes(type){

  eyePart.textContent = type;

  if(eyeLabel){

    eyeLabel.textContent =
    eyeNames[type];

  }

}


/* =========================
   코
========================= */

const noseNames = {

  "L":"매부리 코",
  "M":"정석 코",
  "N":"뾰족 코",
  "O":"투박한 코",
  "P":"긴 코",
  "Q":"넙적한 코"

};

function setNose(type){

  nosePart.textContent = type;

  if(noseLabel){

    noseLabel.textContent =
    noseNames[type];

  }

}


/* =========================
   입
========================= */

const mouthNames = {

  "R":"두툼한 입",
  "S":"작은 입",
  "T":"큰 입",
  "U":"얇은 입",
  "V":"쳐진 입",
  "W":"올라간 입"

};

function setMouth(type){

  mouthPart.textContent = type;

  if(mouthLabel){

    mouthLabel.textContent =
    mouthNames[type];

  }

}


/* =========================
   선택 버튼 표시
========================= */

const optionButtons =
document.querySelectorAll(".option-btn");

optionButtons.forEach(button => {

  button.addEventListener("click", () => {

    const group =
    button.closest(".accordion-content");

    if(!group) return;

    group.querySelectorAll(".option-btn")
    .forEach(btn => {

      btn.style.background =
      "white";

      btn.style.color =
      "black";

    });

    button.style.background =
    "black";

    button.style.color =
    "white";

  });

});


/* =========================
   저장
========================= */

function saveAvatar(){

  const saveBtn =
  document.getElementById("saveBtn");

  saveBtn.style.visibility =
  "hidden";

  html2canvas(
    document.getElementById("archiveCard"),
    {
      backgroundColor:"#ffffff",
      scale:4
    }
  )
  .then(canvas => {

    saveBtn.style.visibility =
    "visible";

    const link =
    document.createElement("a");

    link.download =
    "YOURFACE_ARCHIVE.png";

    link.href =
    canvas.toDataURL();

    link.click();

  });

}


/* =========================
   기본값
========================= */

setFace("0");
setBrows("aA");
setEyes("fF");
setNose("M");
setMouth("R");


/* =========================
   눈 조정
========================= */

let eyeSize =
parseFloat(
getComputedStyle(eyePart).fontSize
);

let eyeGap =
parseFloat(
getComputedStyle(eyePart).letterSpacing
);

if(isNaN(eyeGap)){

  eyeGap = 19;

}

let eyeTop =
parseFloat(
getComputedStyle(eyePart).top
);

function eyeSizeSmall(){

  eyeSize -= 1;

  eyePart.style.fontSize =
  eyeSize + "px";

}

function eyeSizeLarge(){

  eyeSize += 1;

  eyePart.style.fontSize =
  eyeSize + "px";

}

function eyeGapSmall(){

  eyeGap -= 1;

  eyePart.style.letterSpacing =
  eyeGap + "px";

}

function eyeGapLarge(){

  eyeGap += 1;

  eyePart.style.letterSpacing =
  eyeGap + "px";

}

function eyeUp(){

  eyeTop -= 1;

  eyePart.style.top =
  eyeTop + "px";

}

function eyeDown(){

  eyeTop += 1;

  eyePart.style.top =
  eyeTop + "px";

}


/* =========================
   코 조정
========================= */

let noseSize =
parseFloat(
getComputedStyle(nosePart).fontSize
);

let noseTop =
parseFloat(
getComputedStyle(nosePart).top
);

function noseSizeSmall(){

  noseSize -= 1;

  nosePart.style.fontSize =
  noseSize + "px";

}

function noseSizeLarge(){

  noseSize += 1;

  nosePart.style.fontSize =
  noseSize + "px";

}

function noseUp(){

  noseTop -= 1;

  nosePart.style.top =
  noseTop + "px";

}

function noseDown(){

  noseTop += 1;

  nosePart.style.top =
  noseTop + "px";

}


/* =========================
   입 조정
========================= */

let mouthSize =
parseFloat(
getComputedStyle(mouthPart).fontSize
);

let mouthTop =
parseFloat(
getComputedStyle(mouthPart).top
);

function mouthSizeSmall(){

  mouthSize -= 1;

  mouthPart.style.fontSize =
  mouthSize + "px";

}

function mouthSizeLarge(){

  mouthSize += 1;

  mouthPart.style.fontSize =
  mouthSize + "px";

}

function mouthUp(){

  mouthTop -= 1;

  mouthPart.style.top =
  mouthTop + "px";

}

function mouthDown(){

  mouthTop += 1;

  mouthPart.style.top =
  mouthTop + "px";

}