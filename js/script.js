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




    /* 69 Timer */




    const deadline = '2023-05-20';
    
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (timeInterval <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    
    setClock('.timer', deadline);



    /* 72, 73 Modal */
   

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerID);
        window.removeEventListener('scroll', showModalByScroll);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerID = setTimeout(openModal, 15000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            // window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);




    /*  */



});







/* 74 MutationObserver */


const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
})

observer.disconnect();





/* 71 Параметры документа, окна и работа с ними */




// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// // const width = box.offsetWidth;
// // const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;
// // const width = box.clientWidth;
// // const height = box.clientHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);






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


/* 

Получение компонентов даты
Существуют методы получения года, месяца и т.д. из объекта Date:

getFullYear()
Получить год (4 цифры)
getMonth()
Получить месяц, от 0 до 11.
getDate()
Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
Получить, соответственно, часы, минуты, секунды или миллисекунды.

getDay()
Вернуть день недели от 0 (воскресенье) до 6 (суббота).
Несмотря на то, что в ряде стран за первый день недели принят понедельник, 
в JavaScript начало недели приходится на воскресенье.
Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной 
зоны UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Для их использования 
требуется после "get" подставить "UTC".

getTime()
Для заданной даты возвращает таймстамп – количество миллисекунд, 
прошедших с 1 января 1970 года UTC+0.

getTimezoneOffset()
Возвращает разницу в минутах между UTC и местным часовым поясом:

Установка компонентов даты
Следующие методы позволяют установить компоненты даты и времени:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, 
прошедших с 01.01.1970 UTC)
У всех этих методов, кроме setTime(), есть UTC-вариант, например: setUTCHours().

*/





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
