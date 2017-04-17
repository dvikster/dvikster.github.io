var box = new Array(9);

function checkEnd() {
    if (box[0]==='human' && box[1]==='human' && box[2]==='human'){ document.getElementById('line').classList.add('line_1'); return 1 }
    if (box[3]==='human' && box[4]==='human' && box[5]==='human'){ document.getElementById('line').classList.add('line_2'); return 1 }
    if (box[6]==='human' && box[7]==='human' && box[8]==='human'){ document.getElementById('line').classList.add('line_3'); return 1 }
    if (box[0]==='human' && box[3]==='human' && box[6]==='human'){ document.getElementById('line').classList.add('line_4'); return 1 }
    if (box[1]==='human' && box[4]==='human' && box[7]==='human'){ document.getElementById('line').classList.add('line_5'); return 1 }
    if (box[2]==='human' && box[5]==='human' && box[8]==='human'){ document.getElementById('line').classList.add('line_6'); return 1 }
    if (box[0]==='human' && box[4]==='human' && box[8]==='human'){ document.getElementById('line').classList.add('line_7'); return 1 }
    if (box[2]==='human' && box[4]==='human' && box[6]==='human'){ document.getElementById('line').classList.add('line_8'); return 1 }
    if (box[0]==='ai' && box[1]==='ai' && box[2]==='ai'){document.getElementById('line').classList.add('line_1'); return 2 }
    if (box[3]==='ai' && box[4]==='ai' && box[5]==='ai'){document.getElementById('line').classList.add('line_2'); return 2 }
    if (box[6]==='ai' && box[7]==='ai' && box[8]==='ai'){document.getElementById('line').classList.add('line_3'); return 2 }
    if (box[0]==='ai' && box[3]==='ai' && box[6]==='ai'){document.getElementById('line').classList.add('line_4'); return 2 }
    if (box[1]==='ai' && box[4]==='ai' && box[7]==='ai'){document.getElementById('line').classList.add('line_5'); return 2 }
    if (box[2]==='ai' && box[5]==='ai' && box[8]==='ai'){document.getElementById('line').classList.add('line_6'); return 2 }
    if (box[0]==='ai' && box[4]==='ai' && box[8]==='ai'){document.getElementById('line').classList.add('line_7'); return 2 }
    if (box[2]==='ai' && box[4]==='ai' && box[6]==='ai'){document.getElementById('line').classList.add('line_8'); return 2 }
    if (box[0] && box[1] && box[2] && box[3] && box[4] && box[5] && box[6] && box[7] && box[8]) return 3;
}

function aiRandom() {
    var id = Math.floor(Math.random() * 9);//Return a random number between 1 and 9
    if (box[id]) {
        aiRandom();
    }
    else {
        addicon(id, 'ai');
    }
}
function ai() {
    // The ai move based on some of the prioritized rules from https://en.wikipedia.org/wiki/Tic-tac-toe#Strategy
    // and some rules from my children:)
    if (box[7] !== 'human' && box[7] !== 'ai' && box[0] === 'ai' && box[2] === 'ai' && box[5] === 'ai' && box[4] === 'human'  && box[6] === 'human'  && box[8] === 'human') {addicon(7, 'ai');}
    else if (box[0] !== 'human' && box[0] !== 'ai' && box[4] === 'human') {addicon(0, 'ai');}
    else if (box[6] !== 'human' && box[6] !== 'ai' && box[4] === 'ai' && box[3] === 'human' && box[7] === 'human') {addicon(6, 'ai');}
    else if (box[3] !== 'human' && box[3] !== 'ai' && box[4] === 'ai'  && box[7] === 'ai' && box[0] === 'human' && box[8] === 'human')  {addicon(3, 'ai');}
    else if (box[5] !== 'human' && box[5] !== 'ai' && box[4] === 'ai' && box[0] === 'human' && box[8] === 'human') {addicon(5, 'ai');}
    else if (box[7] !== 'human' && box[7] !== 'ai' && box[1] === 'ai' && box[4] === 'ai' && box[0] === 'human' && box[2] === 'human' && box[8] === 'human') {addicon(7, 'ai');}
    else if (((box[0] !== 'human') && (box[0] !== 'ai')) && ((box[1] === 'ai' && box[2] === 'ai') || (box[3] === 'ai' && box[6] === 'ai') || (box[4] === 'ai' && box[8] === 'ai'))) {addicon(0, 'ai');}
    else if (((box[1] !== 'human') && (box[1] !== 'ai')) && ((box[0] === 'ai' && box[2] === 'ai') || (box[4] === 'ai' && box[7] === 'ai'))) {addicon(1, 'ai');}
    else if (((box[2] !== 'human') && (box[2] !== 'ai')) && ((box[0] === 'ai' && box[1] === 'ai') || (box[5] === 'ai' && box[8] === 'ai') || (box[4] === 'ai' && box[6] === 'ai'))) {addicon(2, 'ai');}
    else if (((box[3] !== 'human') && (box[3] !== 'ai')) && ((box[0] === 'ai' && box[6] === 'ai') || (box[4] === 'ai' && box[5] === 'ai'))) {addicon(3, 'ai');}
    else if (((box[4] !== 'human') && (box[4] !== 'ai')) && ((box[3] === 'ai' && box[5] === 'ai') || (box[0] === 'ai' && box[8] === 'ai') || (box[2] === 'ai' && box[6] === 'ai'))) {addicon(4, 'ai');}
    else if (((box[5] !== 'human') && (box[5] !== 'ai')) && ((box[3] === 'ai' && box[4] === 'ai') || (box[2] === 'ai' && box[8] === 'ai'))) {addicon(5, 'ai');}
    else if (((box[6] !== 'human') && (box[6] !== 'ai')) && ((box[7] === 'ai' && box[8] === 'ai') || (box[0] === 'ai' && box[3] === 'ai') || (box[2] === 'ai' && box[4] === 'ai'))) {addicon(6, 'ai');}
    else if (((box[7] !== 'human') && (box[7] !== 'ai')) && ((box[6] === 'ai' && box[8] === 'ai') || (box[1] === 'ai' && box[4] === 'ai'))) {addicon(7, 'ai');}
    else if (((box[8] !== 'human') && (box[8] !== 'ai')) && ((box[6] === 'ai' && box[7] === 'ai') || (box[2] === 'ai' && box[5] === 'ai') || (box[0] === 'ai' && box[4] === 'ai'))) {addicon(8, 'ai');}
    else if (((box[0] !== 'human') && (box[0] !== 'ai')) && ((box[1] === 'human' && box[2] === 'human') || (box[3] === 'human' && box[6] === 'human') )) {addicon(0, 'ai');}
    else if (((box[6] !== 'human') && (box[6] !== 'ai')) && (box[2] === 'human'  && box[7] === 'human' && box[5] === 'ai')) {addicon(6, 'ai');}
    else if (((box[1] !== 'human') && (box[1] !== 'ai')) && ((box[0] === 'human' && box[2] === 'human') || (box[4] === 'human' && box[7] === 'human'))) {addicon(1, 'ai');}
    else if (((box[2] !== 'human') && (box[2] !== 'ai')) && ((box[0] === 'human' && box[1] === 'human') || (box[5] === 'human' && box[8] === 'human') || (box[4] === 'human' && box[6] === 'human'))) {addicon(2, 'ai');}
    else if (((box[3] !== 'human') && (box[3] !== 'ai')) && ((box[0] === 'human' && box[6] === 'human') || (box[4] === 'human' && box[5] === 'human'))) {addicon(3, 'ai');}
    else if (((box[4] !== 'human') && (box[4] !== 'ai')) && ((box[3] === 'human' && box[5] === 'human') || (box[0] === 'human' && box[8] === 'human') || (box[2] === 'human' && box[6] === 'human'))) {addicon(4, 'ai');}
    else if (((box[5] !== 'human') && (box[5] !== 'ai')) && ((box[3] === 'human' && box[4] === 'human') || (box[2] === 'human' && box[8] === 'human'))) {addicon(5, 'ai');}
    else if (((box[6] !== 'human') && (box[6] !== 'ai')) && ((box[7] === 'human' && box[8] === 'human') || (box[0] === 'human' && box[3] === 'human') || (box[2] ==='human' && box[4] === 'human'))) {addicon(6, 'ai');}
    else if (((box[7] !== 'human') && (box[7] !== 'ai')) && ((box[6] === 'human' && box[8] === 'human') || (box[1] === 'human' && box[4] === 'human'))) {addicon(7, 'ai');}
    else if (((box[8] !== 'human') && (box[8] !== 'ai')) && ((box[6] === 'human' && box[7] === 'human') || (box[2] === 'human' && box[5] === 'human') || (box[0] ==='human' && box[4] === 'human'))) {addicon(8, 'ai');}
    else if ((box[4] !== 'human') && (box[4] !== 'ai')) {addicon(4, 'ai');}
    else if (((box[5] !== 'human') && (box[5] !== 'ai')) && (box[2] === 'human'  || box[6] === 'human')) {addicon(5, 'ai');}
    else if (((box[0] !== 'human') && (box[0] !== 'ai')) && (box[2] === 'human'  || box[6] === 'human')) {addicon(0, 'ai');}
    else if (((box[2] !== 'human') && (box[2] !== 'ai')) && (box[0] === 'human'  || box[8] === 'human')) {addicon(2, 'ai');}
    else if (((box[6] !== 'human') && (box[6] !== 'ai')) && (box[0] === 'human'  || box[8] === 'human')) {addicon(6, 'ai');}
    else if ((box[5] !== 'human') && (box[5] !== 'ai')) {addicon(5, 'ai');}
    else if ((box[2] !== 'human') && (box[2] !== 'ai')) {addicon(2, 'ai');}
    else if ((box[6] !== 'human') && (box[6] !== 'ai')) {addicon(6, 'ai');}
    else if ((box[8] !== 'human') && (box[8] !== 'ai')) {addicon(8, 'ai');}
    else if ((box[1] !== 'human') && (box[1] !== 'ai')) {addicon(1, 'ai');}
    else if ((box[5] !== 'human') && (box[5] !== 'ai')) {addicon(5, 'ai');}
    else if ((box[7] !== 'human') && (box[7] !== 'ai')) {addicon(7, 'ai');}
    else if ((box[3] !== 'human') && (box[3] !== 'ai')) {addicon(3, 'ai');}

    else {    aiRandom();  }
}

function aiTime(){
    setTimeout(ai, 100);
}

function addicon(id, person) {
    if (box[id]) return false;
    box[id] = person;
    document.getElementById(id).className = 'box ' + person;
    if (checkEnd() != 1 && checkEnd() != 2 && checkEnd() != 3){
        if((person === 'human')){
            aiTime();
        }
    }
    else{
        if (checkEnd() == 1) { endMassegeWinHuman();
        } else if (checkEnd() == 2) {
            endMassegeWinAi();
        } else if (checkEnd() == 3) {
            endMassegeDraw();
        }
    }
}

function endMassegeWinHuman() {
    document.getElementById('end_massegeWinHuman').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
}
function endMassegeWinAi() {
    document.getElementById('end_massegeWinAi').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
}
function endMassegeDraw() {
    document.getElementById('end_massegeDraw').classList.add('vis');
    document.getElementById('overlay').classList.add('vis');
}

function reload() {
    location.reload();
}
