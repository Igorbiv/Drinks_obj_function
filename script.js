"use strict";

class HashStorageFunc { 
    arrContent = {};

    addValue = function(key, value) {
        this.arrContent[key] = value;
    }

    getValue = function(key) {
        return this.arrContent[key];
    }

    deleteValue = function(key) {
        if (key in this.arrContent) {
            delete this.arrContent[key];
            return true;
        } else {
            return false;
        }
    }

    getKeys = function() {
        let arrKeys = [];
        for (let key in this.arrContent) {
            arrKeys.push(key);
        } return arrKeys;
    }
}

let drinkStorage = new HashStorageFunc();

one.onclick = function() { //функция создает напиток/состав напитка/его рецепт и кладет его в память
    let drinkName = prompt("Введите наименования напитка (коктейля)");

    let alcohol = confirm("Если напиток содержит алкоголь нажмите \"Ок\", а если не содержит нажмите \"Отмена\"");
    if (alcohol == true) {
        let drinkAlcoholic = "да";
    } let drinkAlcoholic = "нет";

    let compround = prompt("Составьте напиток, например: 1. Водка; 2. Сок; 3. Пепси; 4. Так далее; укажите необходимые компоненты");
    let recipe = prompt("Рецепт приготовления напитка, например: \n1. Класть в стакан лед; \n2. Поверх льда залить водку; \n3. Слегка промешать лед с водкой; \n4. Добавить наверх пепси");

    let objectDrink = {};
    objectDrink.drinkName = drinkName;
    objectDrink.drinkAlcoholic = drinkAlcoholic;
    objectDrink.compround = compround;
    objectDrink.recipe = recipe;

    drinkStorage.addValue(drinkName, objectDrink);
}

two.onclick = function() {
    let drinkName = prompt("Введите наименования напитка (коктейля):");
    let information = drinkStorage.getValue(drinkName);

    if (information === undefined) {
        alert("Такой в баре отсутсвует!")
    } else {
        alert(`
        Напиток: ${information.drinkName}
        Алкогольный: ${information.drinkAlcoholic}
        Состав: ${information.compround}
        Рецепт приготовления: ${information.recipe}`);
    }
}

three.onclick = function() { 
    let drinkName = prompt("Введите наименования напитка (коктейля):");
    if (drinkStorage.deleteValue(drinkName)) {
        alert("Напиток удален из меню!");
    } else {
        alert("Такой в баре отсутсвует!");
    }
}

four.onclick = function() { 
    let list = drinkStorage.getKeys();
    if (list.length == 0) {
        alert("Карта напитков пустая, нажмите: \"ВВОД ИНФОРМАЦИИ О НАПИТКЕ\", чтобы добавить напиток в меню");    
    } else alert("Добро пожаловать в бар, вашему вниманию карта напитков: " + list);
}