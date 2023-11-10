

let toggler = document.getElementById('click');
toggler.addEventListener('click', function () {
    if (toggler.className === 'topnav') {
        toggler.className += ' toggler';
    } else {
        toggler.className = 'topnav';
    }
});

