/**
 * User: Самородов Колюха
 * Date: 22.04.13
 * Time: 14:20
 * To change this template use File | Settings | File Templates.
 */
var SNN = SNN || {};
//пространство имен
SNN.namespace = function (ns) {
    var parts = ns.split('.'),
        parent = SNN,
        i;
    //удаляем префикс
    if (parts[0] === 'SNN') {
        parts = parts.slice(1);
    }

    for (i = 0;i < parts.length; i += 1) {
        //создаем свойствое если его нет
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = [parts[i]]
    }
    return parent;
};
