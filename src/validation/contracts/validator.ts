/**
 * This is the contract that every class which can be regarded as a
 * validator should conform to.
 *
 * @since 1.0.0
 */
import Message from "../message";

export default interface Validator {
    /**
     * Asserts whether the data under validation satisfies
     * the validation rules.
     *
     * @return Boolean
     */
    passes(): Boolean;

    /**
     * Performs validation of the data against the rules
     *
     * @return Validator
     */
    validate() : Validator;

    /**
     * Retrieves the messages as a result of validation
     *
     * @return Message[]
     */
    messages() : Message[]
}