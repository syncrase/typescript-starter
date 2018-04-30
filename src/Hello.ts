export class HelloTypescript {
    constructor(private greetingMessage = "TS says hello, default message :)") {
    }

    sayHello() {
        console.log(this.greetingMessage);
    }
}
