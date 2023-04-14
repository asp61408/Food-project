'use strict';

/* Modul 4 */




window.addEventListener('DOMContentLoaded', () => {

/* 64 Tabs */

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });

});


/* 68 Работа с датами Date */











/* 67 WeakMap & WeakSet */



// let user = {name: 'Ivan'};

// let map = new Map();
// map.set(user, 'data');

// user = null;

// console.log(map.keys());   /* В Map останется ссылка на объект user и он не удалится из памяти */




// let user = {name: 'Ivan'};

// let map = new WeakMap();  /* WeakMap Слабая Карта */
// map.set(user, 'data');

// user = null;

// console.log(map.has());   /* Из WeakMap user удалится */



/* Добавление и удаление пользователя в WeakMap */


// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }
//     return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};

// cacheUser(lena);
// cacheUser(alex);

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));





// WeakSet
// add, has, delete


// let messages = [
//     {text: 'hello', from: 'John'},
//     {text: 'hi', from: 'Max'},
//     {text: 'hey', from: 'Ann'},
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);

// readMessages.add(messages[0]);                      /* Не добавится, только УНИКАЛЬНЫЕ значения */
// messages.shift();                                   /* Удаляем из messages первый элемент */
// console.log(readMessages.has(messages[0]));         /* в WeakSet его тоже нет */







/* 66 Сборщики мусора и утечки памяти */








/* 65 setTimeout & setInterval */


// const timerId = setTimeout(function() {
//     console.log('hello');
// }, 2000);




// const timerId = setTimeout(logger, 2000);

// function logger() {
//     console.log('hello');
// }




// const timerId = setTimeout(logger, 2000);

// function logger() {
//     alert('hello');
// }

// clearInterval(timerId);




// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('txt');
//     i++;
// }




/* Animation */


// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 295) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

