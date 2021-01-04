class Builder {
    build() {
        this.addCPU();
        this.addRAM();
        this.addDisplay();
    }
}

class IPhoneBuilder extends Builder{
    addCPU() {
        console.log('Add CPU in Iphone')
    }

    addRAM() {
        console.log('Add RAM in Iphone')
    }

    addDisplay() {
        console.log('Add display in Iphone')
    }
}

class SumsungBuilder extends Builder{
    addCPU() {
        console.log('Add CPU in Sumsung')
    }

    addRAM() {
        console.log('Add RAM in Sumsung')
    }

    addDisplay() {
        console.log('Add display in Sumsung')
    }
}

const iphoneBuilder = new IPhoneBuilder();
const sumsungBuilder = new SumsungBuilder();

iphoneBuilder.build();
console.log('\n');
sumsungBuilder.build();