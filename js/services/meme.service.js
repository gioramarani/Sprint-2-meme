'use strict'


var gKeywordSearchCount = {}

function getMeme(imgId) {
    gMeme = {
        selectedId: imgId,
        selectedLineIdx: 0,
        lines: [{ txt: 'hello', size: '20px', color: 'white' }]
    }
}

function renderMeme(){
    // var imgIdx = gMeme.selectedId - 1
    const elImg = document.querySelector(`.img${gMeme.selectedId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)

    // if(!text) return
    console.log(gMeme.selectedId)
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[0].color
    // gCtx.textAlign = 'center'
    gCtx.font = `${gMeme.lines[0].size} Impact`
    
    gCtx.fillText(gMeme.lines[0].txt, 200, 90 )
    gCtx.strokeText(gMeme.lines[0].txt, 200, 90 )
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

function changeSize(ev) {
    if (ev === 'up') gMeme.lines.size += '6px'
    else gMeme.lines.size -= '6px'
    var size = gMeme.lines.size
    console.log(size)
    renderMeme(size)
}

function changeColor(ev) {
    console.log(ev.target.value)
    gMeme.lines.color = ev.target.value
    var color = gMeme.lines.color
    renderMeme(color)
}