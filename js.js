window.addEventListener('load', func);
const objects_menu = document.getElementById('hov');
let menu = null;
function func() {
    objects_menu.addEventListener('mouseover', add_menu);
    document.addEventListener('click', remove_menu);
}
function add_menu(e) {
    e.preventDefault();
    if (!menu) {
        menu = document.createElement('div');
        menu.classList.add('menu');
        const objects = {
            1: 'Чудните мостове',
            2: 'Белоградчишките скали',
            3: 'Леденика',
            4: 'Шипка',
            5: 'Крушенските водопади'
        };
        const links = {
            1: '../places/chudnite_mostove.html',
            2: '../places/belogradchishkite_skali.html',
            3: '../places/ledenika.html',
            4: '../places/shipka.html',
            5: '../places/krushenskite_vodopadi.html'
        };
        for (let object in links) {
            let a = document.createElement('a');
            a.innerHTML = objects[object];
            a.href = links[object];
            menu.appendChild(a);
        }
        objects_menu.appendChild(menu);
    }
}
function remove_menu(e) {
    if (menu) {
        if (!objects_menu.contains(e.target) && !menu.contains(e.target)) {
            menu.remove();
            menu = null;
        }
    }
}
