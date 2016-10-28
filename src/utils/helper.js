'use strict';
export function helper() {
    return {
        getUniqueKey: function () {
            return new Date().getTime().toString() + Math.random().toString();
        }
    };
}