/**
 * This mixin is used to handle attribute level validation
 *
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class ValidatesAttributes {
    /**
     * Validates if the size of the attribute satisfies the configured size.
     *
     * @param attribute
     * @param value
     * @param parameters
     * @return Boolean
     */
    validateMax (attribute, value, parameters): Boolean {
        if (value == null) { return true; }
        return value <= this.parseInt(parameters[0])
    }

    /**
     * Validates if the parsed value is of type `number`
     *
     * @param attribute
     * @param value
     */
    validateNumber(attribute, value): Boolean {
        try {
            this.parseInt(value,0, true)
            return true
        } catch(e) {
            return false
        }
    }

    /**
     * Used to parse a value into a number, returns the default if
     * value cannot be parsed into an integer
     *
     * @param value
     * @param defaultValue
     * @return number
     */
    parseInt(value: any, defaultValue: number = 0, fail: Boolean = true): number {
        let parsedValue = parseInt(value)
        if ( !isNaN(parsedValue) && !fail) return parsedValue
        if ( fail ) throw new Error('Value: [' + value + '] Cannot be converted to number')
        return defaultValue
    }
};