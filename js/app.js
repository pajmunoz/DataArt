if ($(window).width() <= 575) {
    init();
} else {
    reinit()
}
$(window).resize(function () {
    if ($(window).width() <= 575) {
        init();
    } else {
        reinit()
    }
});

var tabs = document.getElementsByClassName("tab");
var dataT = document.querySelectorAll('[data-target]');

function openTab(evt) {

    elem = document.getElementById(evt.id);

    for (var i = 0; i < tabs.length; i += 1) {

        var dataTrun = dataT[i].getAttribute("data-target");

        if (evt.id === dataTrun) {
            // console.log("yes");
            dataT[i].classList.add("active");

        } else {
            // console.log("no");
            dataT[i].classList.remove("active");
        }

        if (tabs[i].id === evt.id) {
            tabs[i].classList.add("d-flex");
            if (tabs[i].classList.contains('is-paused')) {
                tabs[i].classList.remove('is-paused');
            }
        
            tabs[i].classList.remove("d-none");
        } else {
            tabs[i].classList.remove("d-flex");
            tabs[i].classList.add("d-none");
        }
    }
}
function closeTab(evt) {

    elem = document.getElementById(evt.id);

    elem.classList.add("d-none");
    elem.classList.remove("d-flex");
    for (var i = 0; i < dataT.length; i += 1) {
        dataT[i].classList.remove("active");
    }
}

function init() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('tab0'));
    document.getElementById('mobile-cont0').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab1'));
    document.getElementById('mobile-cont1').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab2'));
    document.getElementById('mobile-cont2').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab3'));
    document.getElementById('mobile-cont3').appendChild(fragment);
    
    fragment.appendChild(document.getElementById('tab4'));
    document.getElementById('mobile-cont4').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab5'));
    document.getElementById('mobile-cont5').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab6'));
    document.getElementById('mobile-cont6').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab7'));
    document.getElementById('mobile-cont7').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab8'));
    document.getElementById('mobile-cont8').appendChild(fragment);
}
function reinit() {
    var fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('tab0'));
    document.getElementById('contTabs').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab1'));
    document.getElementById('contTabs').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab2'));
    document.getElementById('contTabs').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab3'));
    document.getElementById('contTabs1').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab4'));
    document.getElementById('contTabs1').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab5'));
    document.getElementById('contTabs1').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab6'));
    document.getElementById('contTabs2').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab7'));
    document.getElementById('contTabs2').appendChild(fragment);

    fragment.appendChild(document.getElementById('tab8'));
    document.getElementById('contTabs2').appendChild(fragment);
}
