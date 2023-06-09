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

    // const modalTimerID = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            // window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);






    /* 79, 80 Classes for Menu Item */



    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.tranfer = 80;
            this.changeToRUB();
        }

        changeToRUB() {
            this.price = +this.price * this.tranfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнесс"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        3,
        '.menu .container',
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        7,
        '.menu .container'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        5.4,
        '.menu .container'
    ).render();
    

    


});









/*  */



















/* 77 Classes */




// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColorRectangleWithText extends Rectangle {
//     constructor(height, width, text, colorBg) {
//         super(height, width);
//         this.text = text;
//         this.colorBg = colorBg;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.colorBg}`);
//     }
// }

// const div = new ColorRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());


// const sqare = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(sqare.calcArea());
// console.log(long.calcArea());











/* Docs */




// function Weapon(range, damage) {
//     this.range = range;
//     this.damage = damage;
// }

// const sword = new Weapon(20, 28);


// Weapon.prototype.attack = function(target) {
//     // if (target > this.range) {
//     //     console.log('Out of range');
//     // } else {
//     //     target.health -= this.damage;
//     // }
//     console.log('attack')
//     this.attack += target;
// }

// // console.log(sword.health)
// console.log(sword)
// console.log(sword.attack(10))


// const Person1 = function() {};

// Person1.speak = function() {
//     console.log('im Alive');
// }

// Person1.speak();

// const john1 = new Person1();

// john1.speak()

// console.log(john1)


// const Person = class P {
//     constructor() {
//         this.speak = function() {
//             console.log('im alive');
//         }
//     }
// }

// const john = new Person();

// john.speak();
// console.log(john.speak())















/* !!! Prototype */




// function Person(first, last, age, gender, interests) {
//     this.name = {
//         'first': first,
//         'last': last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function () {
//         // First define a string, and make it equal to the part of
//         // the bio that we know will always be the same.
//         var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
//         // define a variable that will contain the pronoun part of
//         // the second sentence
//         var pronoun;

//         // check what the value of gender is, and set pronoun
//         // to an appropriate value in each case
//         if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//             pronoun = 'He likes ';
//         } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//             pronoun = 'She likes ';
//         } else {
//             pronoun = 'They like ';
//         }

//         // add the pronoun string on to the end of the main string
//         string += pronoun;

//         // use another conditional to structure the last part of the
//         // second sentence depending on whether the number of interests
//         // is 1, 2, or 3
//         if (this.interests.length === 1) {
//             string += this.interests[0] + '.';
//         } else if (this.interests.length === 2) {
//             string += this.interests[0] + ' and ' + this.interests[1] + '.';
//         } else {
//             // if there are more than 2 interests, we loop through them
//             // all, adding each one to the main string followed by a comma,
//             // except for the last one, which needs an and & a full stop
//             for (var i = 0; i < this.interests.length; i++) {
//                 if (i === this.interests.length - 1) {
//                     string += 'and ' + this.interests[i] + '.';
//                 } else {
//                     string += this.interests[i] + ', ';
//                 }
//             }
//         }

//         // finally, with the string built, we alert() it
//         console.log(string);
//     };
//     this.greeting = function () {
//         console.log('Hi! I\'m ' + this.name.first + '.');
//     };
// };

// Person.prototype.farewell = function() {
//     console.log(this.name.first + ' has left the building. Bye for now!');
// };




// let person1 = new Person('Tammi', 'Smith', 32, 'm', ['music', 'skiing', 'kickboxing']);



// console.log(person1)
// person1.bio()
// person1.greeting()

// person1.farewell()




// console.log(person1.valueOf())

// console.log(person1.__proto__)
// console.log(person1.__proto__.__proto__)

// console.log(Object.getPrototypeOf(person1))
// console.log(Person.prototype)
// console.log(Object.prototype)

// console.log(String.prototype)
// console.log(Number.prototype)
// console.log(Date.prototype)
// console.log(Array.prototype)




// let person2 = Object.create(person1)


// console.log(person2)
// person2.bio()
// person2.greeting()
// console.log(person2.farewell())

// console.log(person2.__proto__)

// console.log(person1.constructor)
// person2.constructor



// let person3 = new person1.constructor('Alex', 'Fan', 48, 'male', ['programming', 'example', 'sports'])


// console.log(person3)
// console.log(person3.greeting())
// console.log(person3.bio())

// console.log(person3.name.first)
// console.log(person3.age)
// console.log(person3.farewell())


// console.log(person1.constructor.name)
// console.log(person2.constructor.name)
// console.log(person3.constructor.name)


// console.log(person1 instanceof Person)
// console.log(person2 instanceof Person)
// console.log(person3 instanceof Person)














/* 76 -- this -- */




/* 

1) Обычная функция: this -- window, 'use strict' -- undefined

2) Контекст у методов объекта -- сам объект

3) this в конструкторах и классах -- новый экземпляр объекта

4) Ручная привязка this: call, apply, bind

*/

// function showThis(a, b) {
//     // console.log(this);
//     function sum() {
//         // console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);




// const obj = {
//     a: 1,
//     b: 2,
//     sum: function() {
//         // console.log(this);
//         // function shout() {            /* undefined */
//         //     console.log(this);
//         // }
//         // shout();
//     }
// }

// obj.sum();



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello!' + this.name);
//     };
// }

// let ivan = new User('Ivan', 20);



// function sayName(surname) {
//     console.log(this);
//     console.log(`${this.name} ${surname}`);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));



// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log(this);                           /* <button></button> */
// });

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';          /* Поменяет цвет кнопки при клике */
// });

// btn.addEventListener('click', (e) => {           /* В стрелочной функции теряется контекст вызова */
//     e.target.style.backgroundColor = 'red';      /* Надо делоть с e.target */
// });




// const obj = {
//     num: 7,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }
//         say();
//     }
// }

// obj.sayNumber();





/* Пример короткой записи стрелочной функции */

// const double = a => a * 2;







/* 75 Function constructor */





// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);


// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// ivan.exit();







/* 74 MutationObserver */




// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true
// })

// observer.disconnect();










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
