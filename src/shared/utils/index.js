export { default as KeyedSet } from './keyed_set';

export const isObject = value => {
    return Object.prototype.toString.call(value) === '[object Object]';
};

export const isArray = value => {
    return Array.isArray(value);
};

export const stringRandom = (length = 9) => {
    return Math.random()
        .toString(36)
        .substr(2, length);
};

export const arrayDelete = (array, value) => {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
};

export const arrayToggle = (array, value) => {
    const index = array.indexOf(value);
    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
};

export const objectClone = object => JSON.parse(JSON.stringify(object));

export const objectIterate = (object, callback) => {
    Object.keys(object).forEach(key => {
        const value = object[key];

        callback(object, key, value);

        if (isObject(value) || isArray(value)) {
            objectIterate(value, callback);
        }
    });
};
