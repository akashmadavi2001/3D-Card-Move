let card = document.querySelector('.container');

card.addEventListener('mousemove', (e) => {
    let rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left - rect.width / 2;
    let y = e.clientY - rect.top - rect.height / 2;

    let rotateX = (y / rect.width) * -30;
    let rotateY = (x / rect.height) * 30;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    let bgX = (x / rect.width) * 50 + 50;
    card.style.backgroundPositionX = `${bgX}%`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(10000px) rotateX(0deg) rotateY(0deg)`;
    card.style.backgroundPositionX = ``;
});
