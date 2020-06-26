let arr2 = [1,2,3,4,5,6,7,8,9,0];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
let arr5 = ['!', '@', '#', '$', '%', '^', '&'];

let out = document.getElementById('out');
let  print, data;

document.getElementById('param-1').oninput = function() {
    // ползунок - длина массива
    document.getElementById('password-length').innerHTML = this.value;
}

generatePass(); //запуск при старте

document.getElementById('generator').onclick = generatePass;

function generatePass() {
    let result = [];
    //проверки: какие чекбоксы включены - цифры, буквы, спецсимволы 
    if (document.getElementById('param-2').checked) {
        result = result.concat(arr2);
    }
    if (document.getElementById('param-3').checked) {
        result = result.concat(arr3);
    }
    if (document.getElementById('param-4').checked) {
        result = result.concat(arr4);
    }
    if (document.getElementById('param-5').checked) {
        result = result.concat(arr5);
    }
    // shuffle(result); //for version 1 - перемешиваем массив

    document.getElementById('out').innerHTML = '';

    for (let k = 0; k <6; k++){
        let pass = '';
        let passLength = document.getElementById('param-1').value;
        
        //version 1 - результат для небольшого кол-ва символов
        // pass = result.join('').substr(0, passLength);

        //version 2 - результат для произвольного кол-ва символов 

        for (let i = 0; i < passLength; i++) {
            pass += result[randomInteger(0, result.length-1)];
        }

        out.innerHTML += '<p>'+pass+'</p>';

        let button = document.createElement('button');
        button.setAttribute('class', 'btn btn-success');
        button.innerHTML = 'Copy';
        button.value = pass;
        document.getElementsByTagName('p')[k].prepend(button);
    }
}

//копируем содержимое кода по клику
out.addEventListener('click', function(e){
    let target = e.target;
    if (target.tagName != 'BUTTON') return;

    print = target.parentElement;
    // console.log(print);
   
    //выделяем значение pass из роительского элемента
    document.getSelection().setBaseAndExtent(print, 0, print, print.childNodes.length);
    //копируем в буфер
    document.execCommand("copy");
});

//for version 1 - перемешиваем массив

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }

  //for version 2 - получаем рандомное значение 

function randomInteger(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}
