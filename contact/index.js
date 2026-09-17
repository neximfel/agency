let buttons = document.querySelectorAll('.sec2__left-inside-categories button');
buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        let activeButton = document.querySelector('.sec2__left-inside-categories .changed');
        activeButton?.classList.remove('changed')
        btn.classList.add('changed')
    });
});