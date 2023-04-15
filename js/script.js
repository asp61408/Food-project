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








/*  */













/* 68 Работа с датами Date */



// const now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());





// let start = new Date();
// let some;

// for (let i = 0; i < 100000; i++) {
//     some = i ** 3;
// }

// let end = new Date();

// console.log(some);
// console.log(end - start);








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


// 
// 
// 
// 


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











/* Map & Set повторил и не понял  */



/* 

Перебор Map и Set всегда осуществляется в порядке добавления элементов, 
так что нельзя сказать, что это – неупорядоченные коллекции, 
но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.

*/




/* 

new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен 
итерируемый объект (обычно это массив), то копирует его значения в новый Set.

set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), 
возвращает тот же объект set.

set.delete(value) – удаляет значение, возвращает true, если value было в множестве 
на момент вызова, иначе false.

set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.

set.clear() – удаляет все имеющиеся значения.

set.size – возвращает количество элементов в множестве.



Set имеет те же встроенные методы, что и Map:

set.keys() – возвращает перебираемый объект для значений,

set.values() – то же самое, что и set.keys(), присутствует для обратной совместимости с Map,

set.entries() – возвращает перебираемый объект для пар вида [значение, значение], 
присутствует для обратной совместимости с Map.

*/






/* 

new Map() – создаёт коллекцию.

map.set(key, value) – записывает по ключу key значение value.

map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.

map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.

map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.

map.clear() – очищает коллекцию от всех элементов.

map.size – возвращает текущее количество элементов.




Для перебора коллекции Map есть 3 метода:


map.keys() – возвращает итерируемый объект по ключам,

map.values() – возвращает итерируемый объект по значениям,

map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], 
этот вариант используется по умолчанию в for..of.

*/






// let map = new Map();

// map.set({name: 'John'}, 'user')
//     .set({name: 'Alex'}, 'admin')
//     .set('banana', 'fruit')
//     .set(1, 2);

// console.log(map.values());
// console.log(map.keys());
// console.log(map.entries());

// map.forEach((elem, item) => console.log(item, elem))

// let obj = Object.fromEntries(map.entries());

// console.log(obj);

// let newMap = Object.entries(obj);

// console.log(newMap);





/* Почему Object.fromEntries() не записывает  '[object Object]', 'user' ] в obj ???? */


/*  ???????????????????

[Map Iterator] { 'user', 'admin', 'fruit', 2 }
[Map Iterator] { { name: 'John' }, { name: 'Alex' }, 'banana', 1 }
[Map Entries] {
  [ { name: 'John' }, 'user' ],
  [ { name: 'Alex' }, 'admin' ],
  [ 'banana', 'fruit' ],
  [ 1, 2 ]
}
{ name: 'John' } user
{ name: 'Alex' } admin
banana fruit
1 2
{ '1': 2, '[object Object]': 'admin', banana: 'fruit' }          ?????????????????????????
[ [ '1', 2 ], [ '[object Object]', 'admin' ], [ 'banana', 'fruit' ] ]

*/
