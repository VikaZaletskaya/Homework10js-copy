
// Задание 2

 let Dom = function() {
     this.create = function (tagName) {

         this.element = document.createElement(tagName);
         return this.element
     }   
     this.addClass = function (element, className) {
        element.classList.add(className);
     } 
     this.html = function (element, text) {
         element.innerHTML = text;
     }
     this.removeClass = function (element, className) {
         element.classList.remove(className);

     }
     this.toogleClass = function (element, className) {
         element.classList.toggle(className);
     }
     this.append = function (to, element, before) {
         element = element || this.element;

         if (!before) {
             to.appendChild(element);
         } else {
             to.insertBefore(element, before)
         }
         }
     this.search = function (selector, element) {
        element = element || document;

        let result = element.querySelectorAll(selector);

        if (result.length == 1) result = result[0];

        return result;
      };
      

    this.attr = function(element, name, text) {
        element = element.setAttribute(name, text);
        return this.attr
    }

     };
     
 

 let dom = new Dom();
 let div = dom.create('div');
 dom.addClass(div,'wrapper');
 document.body.appendChild(div);
 dom.html(div,'');
 dom.addClass(div,'section');
 dom.removeClass(div, 'section');
 dom.toogleClass(div, 'conteiner');
 let h1 = dom.create('h1');
 let p = dom.create('p');
 dom.append(document.body, h1);
 dom.html(h1,'Lorem Ipsum');
 dom.addClass(h1,'h1');
 dom.append(document.body, p);
 dom.html(p,'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.');
 dom.addClass(p,'p');
 let button = dom.create('button');
 dom.html(button, 'Push');
 dom.addClass(button,'btn');
 

 dom.append(document.body, button, p);
 console.log(dom.search('p'));
 dom.attr(h1, 'id', 'title');
 
 























 