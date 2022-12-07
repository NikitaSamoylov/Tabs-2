window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const tabs = document.querySelector('.tabs-head');
    const tabsHead = document.querySelectorAll('.tabs-head__item');
    const tabsBody = document.querySelectorAll('.tabs-body__item');

    const hideTabsContent = (a) => {
        for (let i = a; i < tabsBody.length; i++) {
            tabsBody[i].classList.remove('show');
            tabsBody[i].classList.add('hide');
        };
    };
    hideTabsContent(1);

    const showTabsContent = (b) => {
        if (tabsBody[b].classList.contains('hide')) {
            tabsBody[b].classList.remove('hide');
            tabsBody[b].classList.add('show');
        };
    };

    tabs.addEventListener('click', function(evt) {
        let target = evt.target;
        if (target && target.classList.contains('tabs-head__item')) {
            for (let i = 0; i < tabsBody.length; i++) {
                if (target === tabsHead[i]) {
                    hideTabsContent(0);
                    showTabsContent(i);
                    break;
                };
            };
        };
    });

});



