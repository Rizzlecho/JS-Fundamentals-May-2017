function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    let element = template[prop];
                    if (typeof element === 'function') {
                        obj.__proto__[prop] = element;
                    }
                    else obj[prop] = element;
                }
            }
        }
    };

    return obj;
}

let myObj = getExtensibleObject();
let template = {
    extensionMethod: function () {
        console.log('Stamat');
    },
    extensionProp: 'Penka'
};

myObj.extend(template);
console.log(myObj);
console.log(myObj.__proto__);
