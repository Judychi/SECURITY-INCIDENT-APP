let mybtn = document.getElementById('mybtn');
let dots = document.getElementById('dots');
let more = document.getElementById('more');

mybtn.addEventListener('click', ()=>{
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        mybtn.innerHTML = "Read More";
        more.style.display = "none";
    }else{
        dots.style.display = "none";
        mybtn.innerHTML = "Read Less";
        more.style.display = "inline";
    }
})