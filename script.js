const btnEl=document.querySelector('.btn');
const closeIconEl = document.querySelector(".close-icon");
const trailContainerEl = document.querySelector(".trailer-container");
const videoEl=document.querySelector('video');

btnEl.addEventListener('click',remove);

function remove(){
 trailContainerEl.classList.remove('active')
}

closeIconEl.addEventListener('click',close)

function close(){
 trailContainerEl.classList.add('active');
 videoEl.pause();
 videoEl.currentTime=0;
}