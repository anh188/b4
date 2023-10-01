const listImgs = document.querySelector('.list-imgs')
const imgs = document.getElementsByTagName('img')
const btnleft = document.querySelector('.btnleft')
const btnright = document.querySelector('.btnright')
const length = imgs.length
let i = 0

const changeSlide = () =>{
    if (i == length-1){
        i = 0
        let width = imgs[0].offsetWidth
        listImgs.style.transform= `translateX(0px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dot-item-'+i).classList.add('active')
    
    }else{
        i++
        let width = imgs[0].offsetWidth
        listImgs.style.transform= `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dot-item-'+i).classList.add('active')
    }
}
let autoChangeSlide = setInterval(changeSlide, 5000)

btnright.addEventListener('click', () =>{
    clearInterval(autoChangeSlide)
    changeSlide()
    autoChangeSlide = setInterval(changeSlide, 5000)
})

btnleft.addEventListener('click',()=>{
    clearInterval(autoChangeSlide)
    if (i == 0){
        i = length - 1
        let width = imgs[0].offsetWidth
        listImgs.style.transform= `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dot-item-'+i).classList.add('active')
    }else{
        i--
        let width = imgs[0].offsetWidth
        listImgs.style.transform= `translateX(${width * -1 * i}px)`
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.dot-item-'+i).classList.add('active')
    }
    autoChangeSlide = setInterval(changeSlide, 5000)

})