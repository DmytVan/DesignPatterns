export default class {
    constructor(inputContainers, requiredValue = 100) {
        this.inputContainers = inputContainers;
        this.requiredValue = requiredValue;
        this.init();
    }

    init() {
        this.associateInputsAndPercents();
        this.inputs = Array.from(this.inputsMap.keys());
        this.normalizeValue();
        this.setPercents();
    }

    associateInputsAndPercents() {
        this.inputsMap = new Map();
        this.inputContainers.forEach(container => {
            const input = container.querySelector('input');
            const label = container.querySelector(`label[for=${input.id}`);
            this.inputsMap.set(input, label)
        });
        console.log(this.inputsMap);
    }

    get sumValues() {
        return this.inputs.reduce((sum, input) => {
            return sum += +input.value;
        }, 0)
    }

    changeValue(target) {
        if (!this.validateSumValuesRange) return;
        this.normalizeValue(target);
        this.setPercents();
    }

    normalizeValue(target) {
        const sum = this.sumValues;
        const isSoBig = sum > this.requiredValue;
        let difference = isSoBig ? sum - this.requiredValue : this.requiredValue - sum;
        for (let i = this.inputs.length - 1; i >= 0; i--) {
            if (this.inputs[i] === target) continue;
            if (!isSoBig) {
                if (+this.inputs[i].value + difference > +this.inputs[i].requiredValue) {
                    difference -= +this.inputs[i].requiredValue - +this.inputs[i].value;
                    this.inputs[i].value = this.inputs[i].requiredValue;
                } else {
                    this.inputs[i].value = +this.inputs[i].value + difference;
                    break;
                }
            } else {
                if (+this.inputs[i].value - difference < +this.inputs[i].min) {
                    difference -= +this.inputs[i].value;
                    this.inputs[i].value = 0;
                } else {
                    this.inputs[i].value = +this.inputs[i].value - difference;
                    break;
                }
            }
        }
    }

    validateSumValuesRange() {
        return this.sumValues !== this.requiredValue;
    }

    setPercents() {
        this.inputs.forEach((input) => this.changePercent(input))
    }

    changePercent(input) {
        const percentLabel = this.inputsMap.get(input);
        if (percentLabel) {
            percentLabel.textContent = input.value + '%';
        }
    }
}