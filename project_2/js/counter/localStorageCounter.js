class LocalStorageCounter {
    constructor() {

    }

    set(currentValue) {
        localStorage.setItem('counter-value', currentValue);
    }

    get() {
        return localStorage.getItem('counter-value');
    }
}