var Colibri = {};
Colibri.utils = {};

Colibri.utils.createGuid = (function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
                   .toString(16)
                   .substring(1);
    }
    
    return function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
               s4() + '-' + s4() + s4() + s4();
    };
})();


Colibri.utils.getRandomInt = function(min, max) {	
    return Math.floor(Math.random() * (max - min + 1)) + min;
};