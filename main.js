var sliderStore=['url(slide-1.jpg)','url(slide-2.jpg)']

var sliderBtn1=document.querySelector('.btn1');
var sliderBtn2=document.querySelector('.btn2');

var sliderImg=document.querySelector('.slider')

sliderBtn1.addEventListener('click',function(){
    sliderImg.style.background=sliderStore[0]
    sliderImg.classList.add('styleImg')
    sliderBtn1.classList.add('style2')
    sliderBtn2.classList.remove('style2')
})
sliderBtn2.addEventListener('click',function(){
    sliderImg.style.background=sliderStore[1];
    sliderImg.classList.add('styleImg')
    sliderBtn2.classList.add('style2')
    sliderBtn1.classList.remove('style2')
    sliderBtn1.classList.add('style1')
})

var count=0
setInterval(function(){
    count++
    if(count==sliderStore.length){
        count=0
        sliderImg.style.background=sliderStore[count]
    sliderBtn1.classList.add('style2')
    sliderBtn2.classList.remove('style2')
        sliderImg.classList.add('styleImg')
    }
    else{
        sliderImg.style.background=sliderStore[count]
    sliderBtn2.classList.add('style2')
    sliderBtn1.classList.remove('style2')
    sliderBtn1.classList.add('style1')
        sliderImg.classList.add('styleImg')
    }
},2000)


// menu list
var barBtn = document.querySelector('.barIcon')
var barBtnIcon = document.querySelector('.barIcon i')
var menuList = document.querySelector('.navigationBox')

barBtn.addEventListener('click', function() {
  menuList.classList.toggle('navStyle')
  barBtnIcon.classList.toggle('fa-times')
})


// PreLoader
var PreLoader=document.querySelector('.preLoader')

function fncLoad(){
  PreLoader.classList.add('prlStyle')
}

// Scrooll Top
var scrlBtn = document.querySelector('.scrlTopBox')
window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 200) {
    scrlBtn.classList.add('scrlBtnStyle')
  }
  else {
    scrlBtn.classList.remove('scrlBtnStyle')
  }
})