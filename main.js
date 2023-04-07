const popup = document.querySelector('.popup')
const popupContainer = document.querySelector('.popup__container')
const openBtn = document.querySelector('.open__popup')
const closeBtn = document.querySelector('.close__popup')


popup.addEventListener('click', function(e) {
  e.preventDefault
  if (e.target == popup) {
    popup.classList.add('popap__closed')
  }
})
openBtn.addEventListener('click', function(e) {
  e.preventDefault
  popup.classList.remove('popap__closed')
})
closeBtn.addEventListener('click', function(e) {
  e.preventDefault
  popup.classList.add('popap__closed')
})

const popupImgLoader = document.querySelector('.popup__img')
const popupImgBtn = document.querySelector('.img__btn')
const popupImgRemover = document.querySelector('.img__closer')
const popupImg = document.querySelector('#popup__logo')

popupImgBtn.addEventListener('click', function(e) {
  e.preventDefault
  popupImgLoader.click()
  setTimeout(()=>{
    console.log(popupImgLoader.value)
    popupImg.style.background = `url(${popupImgLoader.value}) 0 0 / 100% no-repeat`
  }, 5000)
})
popupImgRemover.addEventListener('click', function(e){
  e.preventDefault
  popupImg.style.background = 'url("/img/Ellipse44.png") 0 0 / 100% no-repeat'
})