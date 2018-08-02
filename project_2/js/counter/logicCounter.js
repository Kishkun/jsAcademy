class Counter {
    constructor() {
        this.counterWidgetEl = document.querySelector('[data-role="counterWidget"]');
        this.counterValueEl = null;
        this._localStorage = new LocalStorageCounter();
    }

    render() {
        this.counterWidgetEl.innerHTML = `
            <div>
                Click counter:
                <span class='counter' data-role='counter'>0</span>
            </div>`
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
        this._localStorage.set(currentValue);
        this.counterValueEl.innerHTML = currentValue;
    }

    // saved counter value
    savedCounterPrevValue() {
        this.counterValueEl = this.findValueEl();
        let savedCounterValue = this._localStorage.get();
        if (savedCounterValue != null) {
            this.counterValueEl.innerHTML = savedCounterValue;
        }
    }

}