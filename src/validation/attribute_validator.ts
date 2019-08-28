import Validator from './contracts/validator'
import Message from "./message";
import RuleDefinition from "./rule_definition";
import AttributeRuleMessageDefinition from "./attribute_rule_message_definition";
import ValidatesAttributes from "./concerns/validates_attributes";

/**
 * Validates attributes of passed data against rules
 *
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class AttributeValidator extends ValidatesAttributes implements Validator {
    protected data: Object;
    protected rules: RuleDefinition[];
    protected customMessages: AttributeRuleMessageDefinition[];
    protected failedRules: {attribute: String, rule: String}[];

    /**
     * Default constructor
     *
     * @param data
     * @param rules
     * @param customMessages
     */
    constructor(data: Object, rules: RuleDefinition[], customMessages: AttributeRuleMessageDefinition[]) {
        super()
        this.data = data
        this.rules = rules
        this.customMessages = customMessages
    }

    /**
     * Returns the validation error messages if any
     *
     * @returns Message[]
     */
    messages(): Message[] {
        return [];
    }

    /**
     * Returns a boolean true if the validation passes, false otherwise
     *
     * @returns Boolean
     */
    passes(): Boolean {
        return false;
    }

    /**
     * Fluent method which performs validation and returns an instance of
     * Validator
     *
     * @returns Validator
     */
    validate(): Validator {
        return this;
    }

    /**
     * Performs validation
     *
     * @param attribute
     * @param rule
     * @param data
     * @returns Boolean
     */
    private validateAttribute(attribute: String, rule: String) : Boolean{
        return true
    }

    /**
     *
     * @param attribute
     * @param data
     */
    private getValue(attribute, data = null): any {
        return
    }
}