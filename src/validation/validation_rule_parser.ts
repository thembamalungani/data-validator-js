import Rule from "./rule";

/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class ValidationRuleParser {
    /**
     * Parses the rule string returns a `Rule` object
     *
     * @param rule String
     * @returns Rule
     */
    parse(rule: String) : Rule {
        const __ret = this.extractParameters(rule);
        return Rule.from(__ret.rule, __ret.parameters);
    }

    /**
     * Determines whether the passed validation rule string has parameters
     *
     * @param rule String
     * @returns Boolean
     */
    private hasParameters(rule: String) : Boolean {
        return rule.indexOf(':') !== -1;
    }

    /**
     * Converts the rule parameters csv into an array
     *
     * @param parameter String
     * @returns []
     */
    private parseParameters(parameter: String) {
        return parameter.split(',');
    }

    /**
     * Extracts parameters from validation rule string
     *
     * @param rule String
     */
    private extractParameters(rule: String) : any {
        let parameters: String[];
        if (this.hasParameters(rule)) {
            let [ruleString, parameter] = rule.split(':');
            rule = ruleString;
            parameters = this.parseParameters(parameter);
        }
        return {rule, parameters};
    }
}