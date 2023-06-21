'use strict'

var gElCanvas
var gCtx

var gElHomePage = document.querySelector('.home-page')
var gElMemeEditor = document.querySelector('.meme-editor')
var gElSavedMemes = document.querySelector('.saved-memes')


function onInit(){
    gElMemeEditor.classList.add('hidden')
    gElSavedMemes.classList.add('hidden')

    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function onOpenSavedMemes(){
    gElHomePage.classList.add('hidden')
    gElSavedMemes.classList.remove('hidden')
}