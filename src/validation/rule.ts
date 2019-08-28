/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class Rule {
    public name: String;
    public parameters: String[];

    /**
     * Default constructor
     *
     * @param name
     * @param parameters
     */
    constructor (name: String, parameters: String[]) {
        this.name = name;
        this.parameters = parameters;
    }

    /**
     * Create a validation rule object `Rule` from rule string and parameters
     *
     * @param rule
     * @param parameters
     */
    static from(rule: String, parameters: any[]) {
        return new Rule(rule, parameters);
    }
}