'use strict'


var gKeywordSearchCount = {}
var gLineCounter = 1

function getMeme(imgId) {
    gMeme = {
        selectedId: imgId,
        selectedLineIdx: 0,
        lines: [{ txt: 'hello', size: 20, color: 'white', y: 90}]
    }
}

function addLine(){
    gMeme.lines[gLineCounter] = { txt: makeRandomWord(), size: 20, color: 'white', y: 90+ gLineCounter*20 }
    console.log(gMeme.lines[gLineCounter])
    console.log(gMeme)
    
    gLineCounter ++
}

function renderMeme(){
    // var imgIdx = gMeme.selectedId - 1
    const elImg = document.querySelector(`.img${gMeme.selectedId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)

    // if(!text) return
    // console.log(gMeme.selectedId)
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[0].color
    gCtx.textAlign = 'center'
    gCtx.font = `${gMeme.lines[0].size}px Impact`
    
    // gCtx.fillText(gMeme.lines[0].txt, 200, 90 )
    // gCtx.strokeText(gMeme.lines[0].txt, 200, 90 )
    for(var x=0; x<gLineCounter; x++){
    console.log(gLineCounter)
    gCtx.fillText(gMeme.lines[x].txt, 200, gMeme.lines[x].y )
    gCtx.strokeText(gMeme.lines[x].txt, 200, gMeme.lines[x].y )
}

}

function setLineText(ev) {
    console.log(ev.value)
    gMeme.lines[0].txt = ev.value
    renderMeme()
}

function setImage(imgId){
    console.log(imgId)
    getMeme(imgId)
    console.log(gMeme.selectedId)
}

function changeSize(direction) {
     if(direction === 'up') gMeme.lines[0].size +=5 
     if(direction === 'down') gMeme.lines[0].size -=5 
   
    // renderMeme()
}

function changeColor(ev) {
    console.log(ev.target.value)
    gMeme.lines[0].color = ev.target.value
    // console.log(gMeme.lines[0].color)
}



