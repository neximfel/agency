let boxes = document.querySelectorAll('.sec3__containers_box');

boxes.forEach(function(box){
    let buttons = box.querySelectorAll('.sec3__containers_box-inside-right__categories button');
    let title = box.querySelector('.sec3__containers_box-inside-right__main-inside h1');
    buttons.forEach(function(btn){
        btn.addEventListener('click', function(){
            let activeButton = box.querySelector('.changed');
            activeButton?.classList.remove('changed');
            btn.classList.add('changed');
            title.textContent = btn.dataset.title;
        });
    });
});