import BaseModel from "./BaseModel.js";

class User extends BaseModel {
    validate() {
        return this.name && this.email && this._password ? true : false;
    }

    static #currentId = 1;

    static userTypes = {
        STUDENT: 'student',
        TEACHER: 'teacher',
        DEFAULT: 'user'
    }

    static passwordStrength = Object.freeze({
        WEAK: 'weak',
        MEDIUM: 'medium',
        STRONG: 'strong',
    })

    static passwordValidations = {
        [User.passwordStrength.WEAK]: (value) => {
            // add regexp
            return value.length >= 6;
        },
        [User.passwordStrength.MEDIUM]: (value) => {
            const mediumPattern = /^(?=.*\d).{8,}$/;
            return mediumPattern.test(value);
        },
        [User.passwordStrength.STRONG]: (value) => {
            const strongPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}$/;
            return strongPattern.test(value);
        },
    }

    constructor({name, email, type}) {
        super();
        this.name = name;
        this.email = email;
        this.#id = User.#currentId;

        if (Object.values(User.userTypes).includes(type)) {
            this.#type = type;
        }

        User.#currentId += 1;
    }

    #id = 0;
    #pass = null;
    #type = User.userTypes.default;
    #email = null;

    name = null;

    set email(value) {
        if (value.includes('@')) {
            this.#email = value;
        } else {
            throw new Error('Email is invalid')
        }
    }

    get email() {
        return this.#email
    }

    get type() {
        return this.#type;
    }

    get id() {
        return this.#id
    }

    get info() {
        return JSON.stringify({
            name: this.name,
            id: this.id,
            email: this.email
        })
    }

    set #password(newPassword) {
        this.#pass = atob(newPassword);
    }

    changePassword(
        newPassword,
        strength = User.passwordStrength.WEAK
    ) {
        if (typeof newPassword !== 'string') return;

        if (!Object.values(User.passwordStrength).includes(strength)) {
            throw new Error('Pass strength in incorrect')
        }

        if (!User.passwordValidations[strength](newPassword)) {
            throw new Error('Password is too weak for ' + strength);
        }

        this.#password = newPassword;
    }
}

export default User;
