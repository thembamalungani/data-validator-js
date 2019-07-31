import Rule from "./rule";

export default class ValidationRuleParser {

    static parse(rule: String) : Rule {

        let parameters = [];

        if ( this.hasParameters(rule) ) {

            let [ruleString, parameter] = rule.split(':');
            
            rule = ruleString;
            parameters = this.parseParameters(parameter);
        }

        return Rule.from(rule, parameters);
    }

    static hasParameters(rule: String) : Boolean {
        return rule.indexOf(':') !== -1;
    }

    static parseParameters(parameter: string) {
        return parameter.split(',');
    }
}