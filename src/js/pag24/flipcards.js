function flipCard() {  
    
    const flipcard = document.querySelectorAll('.flipcard');

    flipcard.forEach(card=>{
        card.addEventListener('click', function () {  
            card.classList.toggle('click');
        });
    });
}