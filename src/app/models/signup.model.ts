export class Signup {
    name: string;
    email: string;
    //username: string;
    password: string;
    verifypassword: string;
    constructor(
        name: string,
        email: string,
        //username: string,
        password: string,
        verifypassword: string
    ) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.verifypassword = verifypassword;

    }
}
