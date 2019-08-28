/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class Message {
    protected message: String;
    protected source: String;

    /**
     * @param source String
     * @param message String
     */
    constructor(source: String, message: String){
        this.source = source;
        this.message = message;
    }
}