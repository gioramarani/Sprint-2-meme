'use strict'

var gCurrImg


function renderMeme(){
    const elImg = gCurrImg
    console.log('hi')
    gCtx.drawImage(elImg, 0,0, gElCanvas.clientWidth, gElCanvas.height)
}

function onPictureClicked(img) {
    console.log(img)
    gCurrImg = img
    console.log(gCurrImg)
    // elImg = document.getElementById('1')

    renderMeme()
    gElHomePage.classList.add('hidden')
    gElMemeEditor.classList.remove('hidden')
    gElMemeEditor.classList.add('position')




}