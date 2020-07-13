import {Gender} from "./Gender";

export class User {

    private name: string;
    private birth: Date;
    private id: string;
    private password: string;
    private gender: Gender;
    private email: string;
    private phone: string;
    private interest: Array<string>;

    public constructor(name: string, birth: Date, id: string, password: string, gender: string, email: string, phone: string, interest: Array<string>) {
        this.name = name;
        this.birth = birth;
        this.id = id;
        this.password = password;
        this.gender = User.findGenderByName(gender);
        this.email = email;
        this.phone = phone;
        this.interest = interest;
    }

    private static findGenderByName(genderName: string) {
        if (Gender.MALE == genderName) {
            return Gender.MALE;
        }
        return Gender.FEMALE;
    }
}