let thumbnail = document.getElementsByClassName('thumbnail')
let activeImages = document.getElementsByClassName('active')
for(var i=0;i<thumbnail.length;i++){
    thumbnail[i].addEventListener('mouseover',function(){
        document.getElementById('featured').src = this.src
    })
}
let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');
buttonLeft.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft -=70
})
buttonRight.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft +=70
})