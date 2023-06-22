'use strict'




function renderGallery(imgs) {
    var elGallery = document.querySelector('.gallery')
    console.log(imgs)

    var strHTMLs = imgs.map(img => {
          return  `<img src=${img.url} class="img${img.id}" onclick="onImgSelect(${img.id})">`
    })
    // console.log(img)
    elGallery.innerHTML = strHTMLs.join('')
}

function renderSavedMemeGallery(imgs){
    var elSavedMemeGallery = document.querySelector('.saved-memes')

    var strHTMLs = imgs.map(img => {
        return  `<img src=${img.url} class="img${img.id}" onclick="onImgSelect(${img.id})">`
  })
  // console.log(img)
  elSavedMemeGallery.innerHTML = strHTMLs.join('')
}