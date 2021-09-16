let instance = null;

class Singleton {
    constructor() {
        this.value = Math.random(100);
    }

    printValue() {
        console.log(this.value);
    }

    static getInstance() {
        if (!instance) {
            instance = new Singleton();
        }

        return instance;
    }
}

module.exports = Singleton;