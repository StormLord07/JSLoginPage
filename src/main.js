/*
 * Created by Ilya 'StormLord07' Repnev
 * Created on Wed Jul 26 2023
 */


var users = new Map();
users.set("user1@corporate.com9161234567", "user1");
users.set("user2@corporate.com9169876543", "user2");

document.getElementById('submit').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    let phonePattern = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
    let emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?: \.[a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    phone = phone.replace(/\D/g, '');
    phone = phone.slice(-10);
    console.log(phone)

    var emailResult = emailPattern.test(email);
    var phoneResult = phonePattern.test(phone);

    var resultField = document.getElementById('result-value');

    if (emailResult && phoneResult) {
        var userKey = email + phone;
        if (users.has(userKey)) {
            resultField.value = "Valid";
            resultField.className = 'valid';
        } else {
            resultField.value = "Invalid";
            resultField.className = 'invalid';
        }
    } else {
        resultField.value = "Invalid";
        resultField.className = 'invalid';
    }
});
