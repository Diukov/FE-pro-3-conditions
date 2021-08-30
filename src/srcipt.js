const age = prompt('Введите свой возраст:');

if (!isNaN(+age)) {
    if(+age > 10 && +age < 20) {
        alert(`Вам ${age} лет.`)
    } else {
        switch(age[age.length - 1]) {
            case '1':
                alert(`Вам ${age} год.`);
                break;
            case '2':
            case '3':
            case '4':
                alert(`Вам ${age} года.`);
                break;
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                alert(`Вам ${age} лет.`);
                break;
        }
    }
} else alert('Ошибка: значение должно быть числом.');