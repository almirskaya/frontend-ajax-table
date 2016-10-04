'use strict';

var $ = require('jquery');

var dataUrl='http://www.mocky.io/v2/55f748b33568195d044b3dc8'
var $mainElem = $('main')
var $tableElem = $('<table>')
$mainElem.append($tableElem)

function requestData(callback){
    $.ajax(dataUrl).then(callback)
}

function addHeadersElemes(){
    $tableElem.append(
        '<tr>'
            + '<th>Фото</th>'
            + '<th>Полное имя</th>'
            + '<th>Активный</th>'
            + '<th>Описание</th>'
            + '<th>Баланс</th>'
            + '<th>Возрост</th>'
            + '<th>Дата регистрации</th>'
            + '<th>Компания</th>'
            + '<th>Емейл</th>'
            + '<th>Номер телефона</th>'
            + '<th>Адрес</th>'
        + '</tr>'
    )
}
 




function renderAllItems (data){
    addHeadersElemes()
    data.forEach(function(dataItem){
        var photo = dataItem.picture;
        var fullName = dataItem.name.first + ' ' + dataItem.name.last;
        var active = dataItem.isActive;
        var description = dataItem.about;
        var balance = dataItem.balance;
        var age = dataItem.age;
        var dateRegistration = dataItem.registered;
        var company = dataItem.company;
        var emailAddress = dataItem.email;
        var phoneNumber = dataItem.phone;
        var address = dataItem.address;

        $tableElem.append(
            '<tr>'
                + '<td><img src= ' + photo + ' alt="personsPhoto"/></td>'
                + '<td>' + fullName + '</td>'
                + '<td>' + active + '</td>'
                + '<td>' + description + '</td>'
                + '<td>' + balance + '</td>'
                + '<td>' + age + '</td>'
                + '<td>' + dateRegistration + '</td>'
                + '<td>' + company + '</td>'
                + '<td><a target="_blank" href="mailto:'+ emailAddress +'">' + emailAddress + '</a></td>'
                + '<td><a target="_blank" href="tel:'+ phoneNumber +'">' + phoneNumber + '</a></td>'
                + '<td>' + address + '</td>'
            + '</tr>'
        )
    })
}

requestData(renderAllItems);



console.log($);

