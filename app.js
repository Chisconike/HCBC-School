

let toggler = document.getElementById('click');
toggler.addEventListener('click', function () {
    let dropDownMenu = document.getElementById('click')
    if (dropDownMenu.className === 'topnav') {
        dropDownMenu.className += ' responsive';
    } else {
        dropDownMenu.className = 'topnav';
    }
});