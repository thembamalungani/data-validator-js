import Validator from './contracts/validator'
import Message from "./message";
import RuleDefinition from "./rule_definition";
import AttributeRuleMessageDefinition from "./attribute_rule_message_definition";

/**
 * Validates attributes of passed data against rules
 */
export default class AttributeValidator implements Validator {

    protected messages: Message[];
    protected data: Object;
    protected rules: RuleDefinition[];
    protected customMessages: AttributeRuleMessageDefinition[];
    protected failedRules: {attribute: String, rule: String}[];

    messages(): Message[] {
        return this.messages;
    }

    passes(): Boolean {
        return false;
    }

    validate(): Validator {
        //TODO: add logic to valid
        return this;
    }

    validate_attribute(attribute: String, rule: String, data: Object) {

    }
}