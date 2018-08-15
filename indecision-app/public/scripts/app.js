'use strict';

var nameVar = 'Garvit';
var nameVar = 'Aman';
console.log('nameVar', nameVar);

var nameLet = 'Jane';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Rachel';
console.log('nameConst', nameConst);

var fullName = 'Joey Tribbiani';
if (fullName) {
    var firstName = fullName.split(' ')[0];
}
console.log('firstName', firstName);
