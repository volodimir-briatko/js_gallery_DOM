'use strict';

document.querySelectorAll('#thumbs a').forEach((element) => {
  element.addEventListener('click', (e) => {
    document.querySelector('#largeImg').src = element.href;
    e.preventDefault();
  });
});
