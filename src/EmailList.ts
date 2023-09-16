import Email from "./Email";

class EmailList {
    constructor(private mailEmail: Email[] = []) { }
    
    get all() : Email[] { return this.mailEmail; }

    getEmailSand(mailAdress: string): Email[] {
        return this.mailEmail.filter((mail) => mail.from === mailAdress);
    }

    getEmailSandTo(mailAdress: string): Email[] {
        return this.mailEmail.filter((mail) => mail.to === mailAdress);
    }

    getEmailSandSubject(mailAdress: string): Email[] {
        return this.mailEmail.filter((mail) => mail.subject.indexOf(mailAdress) !== -1);
    }

    addEmail(newEmail: Email): void { this.mailEmail.push(newEmail) };
    removeEmail(removeEmail: Email): void {
        this.mailEmail.filter((remove) => remove !== removeEmail);
    }
}

export default EmailList;