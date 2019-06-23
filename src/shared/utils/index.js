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

export const stringPlural = string => {
    const regExp = /(s?)(S?)$/;
    return string.replace(regExp, (_match, p1, p2) => {
        if (p1) {
            return `${string}${p1}es`;
        } else if (p2) {
            return `${string}${p2}ES`;
        }

        return (string.toUpperCase() === string)
            ? string + 'S'
            : string + 's';
    });
};

export const stringSingular = string => {
    return string.replace(/(.*?)(se|e)?(s)$/i, (_match, p1, p2, p3) => {
        if (p2 === 'e') {
            return p1 + p2;
        } else if (p2 === 'se') {
            return p1 + p3;
        }

        return p1;
    });
};

export const stringCapitalize = string => {
    return string.replace(/(\w+)/g, match => {
        return match.replace(/^(\w)(.*)/, (_match, p1, p2) => (p1.toUpperCase() + p2));
    });
};

export const stringToConstant = string => {
    return string.replace(/([a-z])([A-Z])/, '$1_$2').toUpperCase();
};

export const arrayDelete = (array, value) => {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
    }
};

export const arrayUpdate = (array, targetValue, value) => {
    const index = array.indexOf(targetValue);
    if (index !== -1) {
        array.splice(index, 1, value);
    }
};

export const arrayDeleteById = (array, id, idField = 'id') => {
    const value = array.find(item => item[idField] === id);
    arrayDelete(array, value);
};

export const arrayUpdateById = (array, id, value, idField = 'id') => {
    const targetValue = array.find(item => item[idField] === id);
    arrayUpdate(array, targetValue, value);
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
