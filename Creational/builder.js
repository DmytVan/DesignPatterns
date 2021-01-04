const path = require('path');

class Package {
    constructor(name, version, description, main, scripts, author) {
        this.name = path.basename(path.resolve(process.cwd())).toLowerCase();
        this.version = '1.0.0';
        this.description = '';
        this.main = 'index.js';
        this.scripts = {
            "test": "echo \"Error: no test specified\" && exit 1"
        };
        this.author = '';
    }
}

class PackageBuilder {
    constructor() {
        this.package = new Package();
        return this;
    }

    addName(name) {
        this.package.name = name;
        return this;
    }

    addVersion(version) {
        this.package.version = version;
        return this;
    }

    addDescription(description) {
        this.package.description = description;
        return this;
    }

    addMain(main) {
        this.package.main = main;
        return this;
    }

    addScripts(script) {
        this.package.scripts = script;
        return this;
    }

    addAuthor(author) {
        this.package.author = author;
        return this;
    }

    addLicense(license) {
        this.package.licence = license;
        return this;
    }
}

const package = new PackageBuilder()
                        .addAuthor('Dima')
                        .addLicense('ISC')
                        .addDescription('test');

console.log(package);