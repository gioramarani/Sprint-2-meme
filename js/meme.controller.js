'use strict'

var gElCanvas
var gCtx

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
var gElHomePage = document.querySelector('.home-page')
var gElMemeEditor = document.querySelector('.meme-editor')
var gElSavedMemes = document.querySelector('.saved-memes')
var gElModal = document.querySelector('.modal')

var gMeme = {}
var gImgs = [{ id: 1, url: "img/1.jpg", keywords: ['celebrity', 'wierd', 'all'] },
{ id: 2, url: "img/2.jpg", keywords: ['animals', 'cute', 'all' ] },
{ id: 3, url: "img/3.jpg", keywords: ['animals', 'cute', 'all'] },
{ id: 4, url: "img/4.jpg", keywords: ['funny', 'movies', 'all'] },
{ id: 5, url: "img/5.jpg", keywords: ['kids', 'cute', 'all'] },
{ id: 6, url: "img/6.jpg", keywords: ['funny', 'movies', 'all'] },
{ id: 7, url: "img/7.jpg", keywords: ['kids', 'cute', 'all'] },
{ id: 8, url: "img/8.jpg", keywords: ['exciting', 'movies', 'all'] },
{ id: 9, url: "img/9.jpg", keywords: ['exciting', 'movies', 'all'] },
{ id: 10, url: "img/10.jpg", keywords: ['politics', 'all'] },
{ id: 11, url: "img/11.jpg", keywords: ['sports', 'violence', 'all'] },
{ id: 12, url: "img/12.jpg", keywords:  ['movies', 'all'] },
{ id: 13, url: "img/13.jpg", keywords: ['kids', 'funny', 'all'] },
{ id: 14, url: "img/14.jpg", keywords: ['politics', 'all'] },
{ id: 15, url: "img/15.jpg", keywords: ['movies', 'all'] },
{ id: 16, url: "img/16.jpg", keywords: ['movies', 'funny' ,'all'] },
{ id: 17, url: "img/17.jpg", keywords: ['politics', 'all'] },
{ id: 18, url: "img/18.jpg", keywords: ['exciting', 'movies', 'funny' ,'all'] }
]
var gSavedMemes = []



function onInit() {
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')
    
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery(gImgs)
}

function onOpenSavedMemes() {
    gElHomePage.classList.add('hidden')
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.remove('hidden')

    openSavedMemes()
}

function onOpenGallery(){
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')
    gElHomePage.classList.remove('hidden')

}

function onImgSelect(imgId, origin) {
    console.log(imgId)
    console.log(origin)
    setImage(imgId)
    gElHomePage.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')
    gElMemeEditor.classList.remove('hidden')
    // gElMemeEditor.classList.add('position')   
    gElModal.classList.add('hidden')
    
    if(origin === 'fromGallery'){
    // var currImg = gImgs.find(img => img.id === imgId)
    renderMeme()
    } else{
    renderMemeFromStorage()
    }
}

function OnSetLineText(ev) {
    setLineText(ev.value)
    renderMeme()
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}

function onSaveMeme(){
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    var memeToStorage = {service: gMeme, display: imgContent}
    console.log(memeToStorage)
    console.log(gSavedMemes)
    gSavedMemes.push(memeToStorage)
    console.log(gSavedMemes)
    addMemeToSavedMemes(gSavedMemes)
    gElModal.classList.remove('hidden')
}

function onChangeSize(direction) {
    changeSize(direction)
    renderMeme()
}

function onRemoveLine(){
    removeline()
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

function onAlignText(textDirection){
    alignText(textDirection)
    console.log(textDirection)
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

function onGalleryFilter(filterBy){
    console.log(filterBy)
    if(filterBy === '') filterBy = 'all'
    
    var gFilteredImgs = gImgs.filter(img => {
       return img.keywords[0] === filterBy || img.keywords[1] === filterBy || img.keywords[2] === filterBy
    })
    
    console.log(gFilteredImgs)
    renderGallery(gFilteredImgs)
}

function onAddImojis(ev){
    console.log(ev)
    setImoji(ev)
    renderMeme()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    // renderMeme()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
  }
  
  function addTouchListeners() {
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchend', onUp)
  }

  function onDown(ev) {
    const pos = getEvPos(ev)

    if(!isInputClicked(pos)) return
  }

function onCloseModal(ev) {
  gElModal.classList.add('hidden')

    if(ev === 'toSaved'){
        onOpenSavedMemes()
    } 
}