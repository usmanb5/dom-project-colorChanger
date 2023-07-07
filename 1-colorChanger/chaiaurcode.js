let buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach(function (index) {
  index.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'blue') {
      document.querySelector('body').style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      document.querySelector('body').style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      document.querySelector('body').style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'grey') {
      document.querySelector('body').style.backgroundColor = e.target.id;
    }
  });
});
