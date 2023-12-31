'use strict'


var gKeywordSearchCount = {}
var gLineCounter = 1
var gSelectedLineIdx = 0

var gX = 200
var gElInputValue = document.querySelector('.text-input')
var gLineClickedOn
const MEME_KEY = 'memeDB'



function getMeme(imgId) {
    return gMeme = {
        selectedId: imgId,
        selectedLineIdx: gSelectedLineIdx,
        lines: [{ txt: 'Place Your Text Here', size: 20, color: 'white', txtLength: 0, x: gX, y: 90, txtDirection: 'center' }],
        // location : {, xEnd: gMeme.lines.txtLength*gMeme.lines.size, yEnd: y+gMeme.lines.size}
    }
}

function addLine(randomString) {
    if (randomString) gMeme.lines[gLineCounter] = { txt: randomString, size: 20, color: 'white', txtLength: 0, x: gX, y: 90 + gLineCounter * 30, idx: gLineCounter, txtDirection: 'center' }
    else gMeme.lines[gLineCounter] = { txt: 'Place Your Text Here', size: 20, color: 'white', txtLength: 0, x: gX, y: 90 + gLineCounter * 30, idx: gLineCounter, txtDirection: 'center' }
    console.log(gMeme.lines[gLineCounter])
    console.log(gMeme)

    gLineCounter++
}

function renderMeme() {

    const elImg = document.querySelector(`.img${gMeme.selectedId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    // const elImg = new Image()
    // elImg.src = `img/${gMeme.selectedId}.jpg`
    // elImg.onload = () => {
    //     gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    // }

    
    for (var z = 0; z < gLineCounter; z++) {
        console.log(gLineCounter)
        gCtx.strokeStyle = 'black'
        gCtx.textAlign = gMeme.lines[z].txtDirection
        gCtx.fillStyle = gMeme.lines[z].color
        gCtx.font = `${gMeme.lines[z].size}px Impact`
        gCtx.fillText(gMeme.lines[z].txt, gX, gMeme.lines[z].y)
        gCtx.strokeText(gMeme.lines[z].txt, gX, gMeme.lines[z].y)
    }
}

function renderMemeFromStorage() {
    const elImg = document.querySelector(`.img${gMeme.selectedId}`)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    // const elImg = new Image()
    // elImg.src = `img/${gMeme.selectedId}.jpg`
    // elImg.onload = () => {
    //     gCtx.drawImage(elImg, 0, 0, gElCanvas.clientWidth, gElCanvas.height)
    // }
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = gMeme.lines[gSelectedLineIdx].color
    gCtx.textAlign = 'center'
    gCtx.font = `${gMeme.lines[gSelectedLineIdx].size}px Impact`

    for (var z = 0; z < gLineCounter; z++) {
        console.log(gLineCounter)
        gCtx.fillText(gMeme.lines[z].txt, gX, gMeme.lines[z].y)
        gCtx.strokeText(gMeme.lines[z].txt, gX, gMeme.lines[z].y)
    }
}
// not working....

function setLineText(value) {
    console.log(value)
    gMeme.lines[gSelectedLineIdx].txt = value
    // gMeme.lines[gSelectedLineIdx].txtLength ++

    // gMeme.lines[gSelectedLineIdx].xEnd = gMeme.lines[gSelectedLineIdx].x + gMeme.lines[gSelectedLineIdx].txtLength
    // gMeme.lines[gSelectedLineIdx].yEnd = gMeme.lines[gSelectedLineIdx].y + gMeme.lines[gSelectedLineIdx].size
}

function setImoji(value) {
    gMeme.lines[gSelectedLineIdx].txt += value
}

function setImage(imgId) {
    console.log(imgId)
    getMeme(imgId)
    console.log(gMeme.selectedId)
}

function changeSize(direction) {
    console.log(gSelectedLineIdx)
    console.log(gMeme.lines)
    console.log(gMeme.lines[1])
    console.log(gMeme.lines[1].size)
    if (direction === 'up') {
        gMeme.lines[gSelectedLineIdx].size += 5
    } else if (direction === 'down') {
        gMeme.lines[gSelectedLineIdx].size -= 5
    } else {
        gMeme.lines[gSelectedLineIdx].size = direction
        console.log(gMeme.lines[gSelectedLineIdx])
    }
}

function changeColor(clr) {
    console.log(clr)
    gMeme.lines[gSelectedLineIdx].color = clr
}

function removeline() {
    // gMeme.lines.slice(gSelectedLineIdx)
    gMeme.lines[gSelectedLineIdx].txt = ''
}

function alignText(textDirection) {
    if (textDirection === 'left') gMeme.lines[gSelectedLineIdx].txtDirection = 'left'
    else if (textDirection === 'right') gMeme.lines[gSelectedLineIdx].txtDirection = 'right'
    else if (textDirection === 'center') gMeme.lines[gSelectedLineIdx].txtDirection = 'center'
    console.log(gMeme.lines[gSelectedLineIdx])
}

function switchLineDown() {
    if (gSelectedLineIdx >= gLineCounter - 1) return
    gSelectedLineIdx++
    drawRect(gX, gMeme.lines[gSelectedLineIdx].y)
    gElInputValue.value = gMeme.lines[gSelectedLineIdx].txt
    // gCtx.clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y, 80, 30)
    // gCtx.translate(gX-40 ,gMeme.lines[gSelectedLineIdx].y)
    // clearRectStroke(gX-40 ,gMeme.lines[gSelectedLineIdx].y)

    //    console.log(gMeme.lines[gSelectedLineIdx].txt)
}

function switchLineUp() {
    if (!gSelectedLineIdx) return
    gSelectedLineIdx--
    drawRect(gX, gMeme.lines[gSelectedLineIdx].y)
    gElInputValue.value = gMeme.lines[gSelectedLineIdx].txt
}

function drawRect(x, y) {
    console.log(gSelectedLineIdx)
    renderMeme()
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x - 190, y - 20, 380, 30)
}

function canvasClicked(ev) {
    const { offsetX, offsetY } = ev
    const clickedLine = gMeme.lines.find(line => {
        return offsetX >= line.x - 200 && offsetX <= line.x + 400
            && offsetY >= line.y - line.size && offsetY <= line.y
    })
    console.log(clickedLine)
    if (clickedLine) {
        gSelectedLineIdx = clickedLine.idx
        drawRect(clickedLine.x, clickedLine.y)
    }
}

function addMemeToSavedMemes(memes) {
    saveMemeToStorage(memes)
}

function saveMemeToStorage(savedMemes) {
    saveToStorage(MEME_KEY, savedMemes)
}

function openSavedMemes() {
    var savedMemes = loadFromStorage(MEME_KEY)
    renderSavedMemeGallery(savedMemes)
}