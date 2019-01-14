(function () {
    'use strict';

    let name,
        surname,
        age,
        gender,
        pension;

    function userName() {
        let userInputName = prompt('Введите ваше имя');
        if (userInputName === null || userInputName === '') {
            userName();
        } else {
            name = userInputName;
        }
        return name;
    }

    function userSurname() {
        let userInputSurname = prompt('Введите вашу фамилию');
        if (userInputSurname === null || userInputSurname === '') {
            userSurname();
        } else {
            surname = userInputSurname;
        }
        return surname;
    }

    function userGender() {
        let userInputGender = prompt('Введите ваш пол: М или Ж');
        if (userInputGender === 'м' || userInputGender === 'ж'|| userInputGender === 'М' || userInputGender === 'Ж') {
            gender = userInputGender;
            return gender
        } else {
            userGender();
        }
    }


    function userAge() {
        let userInputAgeStr = prompt('Введите ваш возраст');
        let userInputAgeNumber = (parseFloat(userInputAgeStr.trim()));
        if (isFinite(userInputAgeNumber) && userInputAgeNumber > 0) {
            age = userInputAgeNumber;
            return age;
        } else {
            userAge();
        }
    }

    function userPension() {
        if (gender === 'м' || gender === 'М') {
            if (age >= 63) {
                pension = 'да';
            } else {
                pension = 'нет';
            }
        } else {
            if (age >= 58) {
                pension = 'да';
            } else {
                pension = 'нет';
            }
        }
        return pension;
    }



    function userCard() {
        userName();
        userSurname();
        userGender();
        userAge();
        userPension();
        return alert(`Полное имя: ${name} ${surname}
                      Пол: ${gender}
                      На пенсии: ${pension}`);
    }
    userCard();
}());