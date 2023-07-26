/*
 * Created on Wed Jul 26 2023
 *
 * The MIT License (MIT)
 * Copyright (c) 2023 Ilya 'StormLord07' Repnev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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