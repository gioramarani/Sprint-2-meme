'use strict'

var gElCanvas
var gCtx

var gElHomePage = document.querySelector('.home-page')
var gElMemeEditor = document.querySelector('.meme-editor')
var gElSavedMemes = document.querySelector('.saved-memes')

var gMeme = {}
var gImgs = [{ id: 1, url: "img/1.jpg", keywords: ['celebrity', 'wierd'] },
{ id: 2, url: "img/2.jpg", keywords: ['animals', 'cute'] },
{ id: 3, url: "img/3.jpg", keywords: ['animals', 'cute'] },
{ id: 4, url: "img/4.jpg", keywords: ['animals', 'cute'] },
{ id: 5, url: "img/5.jpg", keywords: ['animals', 'cute'] },
{ id: 6, url: "img/6.jpg", keywords: ['animals', 'cute'] },
{ id: 7, url: "img/7.jpg", keywords: ['animals', 'cute'] },
{ id: 8, url: "img/8.jpg", keywords: ['animals', 'cute'] }
]



function onInit() {
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')

    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery(gImgs)
}

function onOpenSavedMemes() {
    gElHomePage.classList.add('hidden')
    gElSavedMemes.classList.remove('hidden')
}


function onImgSelect(imgId) {
    setImage(imgId)
    // var currImg = gImgs.find(img => img.id === imgId)

    renderMeme()
    gElHomePage.classList.add('hidden')
    gElMemeEditor.classList.remove('hidden')
    gElMemeEditor.classList.add('position')

}

function OnSetLineText(ev) {
    setLineText(ev.value)
    renderMeme()
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onChangeSize(direction) {
    changeSize(direction)
    renderMeme()
}

function onChangeColor(ev) {
    console.log(ev.target.value)
    changeColor(ev.target.value)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onSwitchLine(direction) {
    if (direction === 'down') switchLineDown()
    if (direction === 'up') switchLineUp()
}

function onCanvasClicked(ev) {
    canvasClicked(ev)
}

function onFlexibleClicked() {
    const randomNum1 = getRandomIntInclusive(1, gImgs.length)
    const randomNum2 = getRandomIntInclusive(1,5)
    const randomNum3 = getRandomIntInclusive(20,60)
    const randColor = getRandomColor()
    setImage(randomNum1)

    for(var x = 0; x < randomNum2; x++){
    var randomString = getRandomStringFromArray(gWords)
    setLineText(randomString)
    addLine(randomString)
    changeColor(randColor)
    changeSize(randomNum3)
    }
    
    renderMeme()

    gElHomePage.classList.add('hidden')
    gElMemeEditor.classList.remove('hidden')
    gElMemeEditor.classList.add('position')
}