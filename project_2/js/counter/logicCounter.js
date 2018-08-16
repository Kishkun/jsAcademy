class Counter {
    constructor() {
        this.counterWidgetEl = document.querySelector('[data-role="counterWidget"]');
        this.counterValueEl = null;
    }

    render() {
        this.counterWidgetEl.innerHTML = `
            <div>
                Click counter:
                <span class='counter' data-role='counter'>0</span>
            </div>`
        counter.clickCounterListener();
        counter.savedCounterPrevValue();
    }

    findValueEl() {
        return document.querySelector('[data-role="counter"]');
    }

    clickCounterListener() {
        this.counterWidgetEl.addEventListener('click', this.onCounterListenerClick.bind(this));
    }

    onCounterListenerClick() {
        // increment counter and display new value
        this.counterValueEl = this.findValueEl();
        let currentValue = this.counterValueEl.innerHTML;
        currentValue++;
        this._localStorage = new CounterService();
        this._localStorage.setItem(currentValue);
        this.counterValueEl.innerHTML = currentValue;
    }

    // saved counter value
    savedCounterPrevValue() {
        this.counterValueEl = this.findValueEl();
        this._localStorage = new CounterService();
        let savedCounterValue = this._localStorage.getItem();
        if (savedCounterValue != null) {
            this.counterValueEl.innerHTML = savedCounterValue;
        }
    }

}