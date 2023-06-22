'use strict'


var gKeywordSearchCount = {}
var gLineCounter = 1
var gSelectedLineIdx = 0
var gX = 200

function getMeme(imgId) {
    gMeme = {
        selectedId: imgId,
        selectedLineIdx: gSelectedLineIdx,
        lines: [{ txt: 'hello', size: 20, color: 'white', y: 90}]
    }
}

function addLine(){
    gMeme.lines[gLineCounter] = { txt: makeRandomWord(), size: 20, color: 'white', y: 90+ gLineCounter*30 }
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
    for(var z=0; z<gLineCounter; z++){
    console.log(gLineCounter)
    gCtx.fillText(gMeme.lines[z].txt, gX, gMeme.lines[z].y )
    gCtx.strokeText(gMeme.lines[z].txt, gX, gMeme.lines[z].y )
    // if(x = gSelectedLineIdx) gCtx.lineWidth = 4  // continue from here
}

}

function setLineText(ev) {
    console.log(ev.value)
    gMeme.lines[gSelectedLineIdx].txt = ev.value
    renderMeme()
}

function setImage(imgId){
    console.log(imgId)
    getMeme(imgId)
    console.log(gMeme.selectedId)
}

function changeSize(direction) {
     if(direction === 'up') gMeme.lines[gSelectedLineIdx].size +=5 
     if(direction === 'down') gMeme.lines[gSelectedLineIdx].size -=5 
   
    // renderMeme()
}

function changeColor(ev) {
    console.log(ev.target.value)
    gMeme.lines[gSelectedLineIdx].color = ev.target.value
    // console.log(gMeme.lines[0].color)
}

function switchLineDown(){
    if(gSelectedLineIdx >= gLineCounter - 1) return
     gSelectedLineIdx ++
     drawRect(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
        // gCtx.clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y, 80, 30)
        // gCtx.translate(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
        // clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
    
   
//    console.log(gMeme.lines[gSelectedLineIdx].txt)
   
}

function switchLineUp(){
    if(!gSelectedLineIdx) return
    gSelectedLineIdx --
    drawRect(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
}

function drawRect(x, y) {
    renderMeme()
    console.log(gSelectedLineIdx)
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x, y-20, 80, 30)
  }

//   function clearRectStroke(x,y){
//     gCtx.strokeStyle = 'transparent'
//     gCtx.strokeRect(x, y-20, 80, 30)
//   }

