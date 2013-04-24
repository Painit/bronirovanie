/**
 * User: Самородов Колюха
 * Date: 22.04.13
 * Time: 14:20
 * To change this template use File | Settings | File Templates.
 */
/*jslint browser: true*/
/*global console*/
var SNN = SNN || {};

//Конструктор изолированного пространства
SNN = function () {
    "use strict";
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;
    if (!(this instanceof SNN)) {
        return new SNN(modules, callback);
    }
    if (!modules || modules === '*') {
        modules = [];
        for (i in SNN.modules) {
            if (SNN.modules.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }
    for (i = 0; i < modules.length; i += 1) {
        if (typeof SNN.modules[modules[i]] === 'function') {
            SNN.modules[modules[i]](this);
        } else {
            console.log('Не удалось подключить модуль ' + modules[i]);
        }
    }
    callback(this);
};
SNN.modules = {};
SNN.modules.calendar = function (SNN) {
    "use strict";
    SNN.renderCalendar = function () {
    };
};