export default class Rule {
    public name: String;
    public parameters: String[];

    constructor (name: String, parameters: String[]) {
        this.name = name;
        this.parameters = parameters;
    }

    static from(rule: String, parameters: any[]) {
        return new Rule(rule, parameters);
    }
}