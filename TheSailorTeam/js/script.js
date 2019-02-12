let img = document.querySelectorAll('.image')
  
for (let i = 0; i < 9; i++) {
  img[i].addEventListener('click', () => {
    if (img[i].classList.contains('focus') == false) {
        img[i].classList.add('focus');
    } else {
        img[i].classList.remove('focus');
    }
  });
}