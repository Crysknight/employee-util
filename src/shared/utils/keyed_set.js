export default class KeyedSet extends Set {
    constructor(key) {
        super();
        this._key = key;
    }

    has(value) {
        const { _key: key } = this;
        if (value[key]) {
            let has = false;

            this.forEach(localValue => {
                if (localValue[key] === value[key]) {
                    has = true;
                }
            });

            return has;
        }

        return super.has(value);
    }

    add(value) {
        if (!this.has(value)) {
            super.add(value);
        }
    }

    delete(value) {
        const { _key: key } = this;
        if (value[key]) {
            this.forEach(localValue => {
                if (localValue[key] === value[key]) {
                    super.delete(localValue);
                }
            });
        } else {
            super.delete(value);
        }
    }

    find(keyedValue) {
        let value;

        this.forEach(localValue => {
            if (localValue[this._key] === keyedValue) {
                value = localValue;
            }
        });

        return value;
    }
};
