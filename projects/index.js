let buttons = document.querySelectorAll('.sec4__main-title button');
buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        let activeButton = document.querySelector('.sec4__main-title .changed');
        activeButton?.classList.remove('changed')
        btn.classList.add('changed')
    });
});

