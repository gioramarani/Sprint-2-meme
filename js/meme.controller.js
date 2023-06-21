'use strict'

var gMeme = {}

'use strict'

var gElCanvas
var gCtx

var gElHomePage = document.querySelector('.home-page')
var gElMemeEditor = document.querySelector('.meme-editor')
var gElSavedMemes = document.querySelector('.saved-memes')

var gImgs = [{ id: 1, url: "img/1.jpg", keywords: ['celebrity', 'wierd'] },
                { id: 2, url: "img/2.jpg", keywords: ['animals', 'cute'] },
                { id: 3, url: "img/3.jpg", keywords: ['animals', 'cute'] },
]



function onInit(){
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')
    
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery(gImgs)
}

function onOpenSavedMemes(){
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

