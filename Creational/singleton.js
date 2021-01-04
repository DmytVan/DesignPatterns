let instance = null;

class State {
    constructor(initialState) {
        if (instance) {
            instance.setState(Object.assign({...instance.getState(), ...initialState}));
            return instance;
        }
        instance = this;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = newState;
    }
}

const state1 = new State({products: [1,2,3]});
const state2 = new State({goods: [5,6,7]});
console.log('state1: ', state1.getState());
console.log('state2: ', state2.getState());


state1.setState({test: 1});
console.log('\nstate has been updated\n');

console.log('state1: ', state1.getState());
console.log('state2: ', state2.getState());