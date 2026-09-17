let buttons = document.querySelectorAll('.sec1-inside__main-title button');
buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
        let activeButton = document.querySelector('.sec1-inside__main-title .changed');
        activeButton?.classList.remove('changed')
        btn.classList.add('changed')
    });
});

