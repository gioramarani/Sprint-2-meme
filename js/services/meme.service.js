'use strict'


var gKeywordSearchCount = {}
var gLineCounter = 1
var gSelectedLineIdx = 0
var gX = 200
var gElInputValue = document.querySelector('.text-input')
var gLineClickedOn


function getMeme(imgId) {
    gMeme = {
        selectedId: imgId,
        selectedLineIdx: gSelectedLineIdx,
        lines: [{ txt: 'Place Your Text Here', size: 20, color: 'white',txtLength: 0,x: gX, y: 90, idx: gLineCounter-1 }],
        // location : {, xEnd: gMeme.lines.txtLength*gMeme.lines.size, yEnd: y+gMeme.lines.size}
    }
}

function addLine(){
    gMeme.lines[gLineCounter] = { txt:'Place Your Text Here', size: 20, color: 'white', txtLength: 0 ,x: gX, y: 90+ gLineCounter*30, idx: gLineCounter}
    console.log(gMeme.lines[gLineCounter])
    console.log(gMeme)
    
    gLineCounter ++
}

function renderMeme(){
    // var imgIdx = gMeme.selectedId - 1

    const elImg = document.querySelector(`.img${gMeme.selectedId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)

    // const elImg = new Image()
    // elImg.src = `img/${gMeme.selectedId}.jpg`
    // elImg.onload = () => {
    //     gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    // }

    // if(!text) return
    // console.log(gMeme.selectedId)
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[gSelectedLineIdx].color
    gCtx.textAlign = 'center'
    gCtx.font = `${gMeme.lines[gSelectedLineIdx].size}px Impact`
    
    // gCtx.fillText(gMeme.lines[0].txt, 200, 90 )
    // gCtx.strokeText(gMeme.lines[0].txt, 200, 90 )
    for(var z=0; z<gLineCounter; z++){
    console.log(gLineCounter)
    gCtx.fillText(gMeme.lines[z].txt, gX, gMeme.lines[z].y )
    gCtx.strokeText(gMeme.lines[z].txt, gX, gMeme.lines[z].y )
    // if(x = gSelectedLineIdx) gCtx.lineWidth = 4  // continue from here
}

}

function setLineText(value) {
    console.log(value)
    gMeme.lines[gSelectedLineIdx].txt = value
    gMeme.lines[gSelectedLineIdx].txtLength ++
    
    gMeme.lines[gSelectedLineIdx].xEnd = gMeme.lines[gSelectedLineIdx].x + gMeme.lines[gSelectedLineIdx].txtLength
    gMeme.lines[gSelectedLineIdx].yEnd = gMeme.lines[gSelectedLineIdx].y + gMeme.lines[gSelectedLineIdx].size
    
    console.log(gMeme.lines[gSelectedLineIdx].size)
    console.log(gMeme.lines[gSelectedLineIdx].txt)
    console.log(gMeme.lines[gSelectedLineIdx].txtLength)
    console.log(gMeme.lines[gSelectedLineIdx].x)
    console.log(gMeme.lines[gSelectedLineIdx].xEnd)
    console.log(gMeme.lines[gSelectedLineIdx].y)
    console.log(gMeme.lines[gSelectedLineIdx].yEnd)
   
}

function setImage(imgId){
    console.log(imgId)
    getMeme(imgId)
    console.log(gMeme.selectedId)
}

function changeSize(direction) {
     if(direction === 'up') gMeme.lines[gSelectedLineIdx].size +=5 
     if(direction === 'down') gMeme.lines[gSelectedLineIdx].size -=5 
     console.log(gMeme.lines[gSelectedLineIdx])
   

}

function changeColor(ev) {
    console.log(ev.target.value)
    gMeme.lines[gSelectedLineIdx].color = ev.target.value
    // console.log(gMeme.lines[0].color)
}

function switchLineDown(){
    if(gSelectedLineIdx >= gLineCounter - 1) return
     gSelectedLineIdx ++
     drawRect(gX ,gMeme.lines[gSelectedLineIdx].y)
     gElInputValue.value = gMeme.lines[gSelectedLineIdx].txt
        // gCtx.clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y, 80, 30)
        // gCtx.translate(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
        // clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
    
   
//    console.log(gMeme.lines[gSelectedLineIdx].txt)
   
}

function switchLineUp(){
    if(!gSelectedLineIdx) return
    gSelectedLineIdx --
    drawRect(gX ,gMeme.lines[gSelectedLineIdx].y)
    gElInputValue.value = gMeme.lines[gSelectedLineIdx].txt
}

function drawRect(x, y) {
    renderMeme()
    console.log(gSelectedLineIdx)
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x-190, y-20, 380, 30)
  }

//   function clearRectStroke(x,y){
//     gCtx.strokeStyle = 'transparent'
//     gCtx.strokeRect(x, y-20, 80, 30)
//   }

function canvasClicked(ev){
    console.log('hello')
    const { offsetX, offsetY } = ev

    const clickedLine = gMeme.lines.find(line => {
        console.log('x',line.x -200)
        console.log('xEnd',line.x + 400)
        console.log('y',line.y -line.size)
        console.log('yEnd',line.y)
        console.log('offsetX',offsetX)
        console.log('offsetY',offsetY)
       return offsetX >= line.x -200 && offsetX <= line.x + 400 
       && offsetY >= line.y -line.size  && offsetY <= line.y
    })
    console.log(clickedLine)
    if(clickedLine){
        gSelectedLineIdx = clickedLine.idx
        console.log(clickedLine.idx)
        console.log(gSelectedLineIdx)
        drawRect(clickedLine.x, clickedLine.y)
    }
}