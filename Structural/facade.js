const fetch = require('node-fetch');
class Validator {
    static password(password) {
        if (!password || password.length < 4) {
            throw new Error('password is not valid');
        }
        return true;
    }

    static login(login) {
        if (!login || login.length < 4 || /^\d/.test(login)) {
            throw new Error('login is not valid');
        }
        return true;
    }
}

class User {
    constructor(login, password) {
        this._login = login;
        this._password = password;
    }

    get password() {
        return this._password;
    }

    get login() {
        return this._login;
    }

    saveToken(token) {
        this.token = token;
    }
}

class UserApi {
    constructor(user) {
        this.user = user;
    }

    authorization() {
        return fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.user.login,
                password: this.user.password
            })})
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Connect has failed')
                }
                return res.json();
            })
            .then(res => {
                if (res.err) {
                    console.log(err);
                    return false;
                }
                this.user.saveToken(res.token);
                return true;
            })
            .catch(err => console.log(err));
    }
}

class Facade {
    authorization(login, password) {
        if (!Validator.login(login) || !Validator.password(password)) {
            return false;
        }
        const user = new User(login, password);
        const userApi = new UserApi(user);
        userApi.authorization()
            .then(res => {
                if (res === true) {
                    console.log(`user was logged in. Token: ${user.token}` )
                }
            })
    }
}



const facade = new Facade();
facade.authorization('usere1', 'password1');
