class CounterService {
    constructor() {

    }

    setItem(currentValue) {
        localStorage.setItem('counter-value', currentValue);
    }

    getItem() {
        return localStorage.getItem('counter-value');
    }
}