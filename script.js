// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let yesSize = 16; // Initial font size for Yes button

noBtn.addEventListener('click', () => {
    // Move No button to a random position
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Enlarge Yes button
    yesSize += 10; // Increase size by 4px each time
    yesBtn.style.fontSize = `${yesSize}px`;
    yesBtn.style.padding = `${10 + (yesSize - 16) / 2}px ${20 + (yesSize - 16) / 2}px`; // Adjust padding to match
});

yesBtn.addEventListener('click', () => {
    alert('Yay! bati na po tayo ahhh I love youuuuu');
    // Optionally reset or redirect here

});
