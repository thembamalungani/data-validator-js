export default class Message {

    protected message: String;
    protected source: String;

    constructor(source: String, message: String){
        this.source = source;
        this.message = message;
    }
}