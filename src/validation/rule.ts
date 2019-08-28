/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class Rule {
    public name: String;
    public parameters: String[];

    /**
     * @param name String
     * @param parameters String[]
     */
    constructor (name: String, parameters: String[]) {
        this.name = name;
        this.parameters = parameters;
    }

    /**
     * Create a validation rule object `Rule` from rule string and parameters
     *
     * @param rule String
     * @param parameters String[]
     */
    static from(rule: String, parameters: String[]) {
        return new Rule(rule, parameters);
    }
}