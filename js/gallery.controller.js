'use strict'




function renderGallery(imgs) {
    var elGallery = document.querySelector('.gallery')

    var strHTMLs = imgs.map(img => {
          return  `<img src=${img.url} class="img${img.id}" onclick="onImgSelect(${img.id})">`
    })
    // console.log(img)
    elGallery.innerHTML = strHTMLs.join('')
}