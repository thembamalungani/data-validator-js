/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class Integer {
    /**
     * Used to parse a value into a number, returns the default if
     * value cannot be parsed into an integer
     *
     * @param value
     * @param defaultValue
     * @return number
     */
    static parseInt(value: any, defaultValue: number = 0, fail: Boolean = true): number {
        let parsedValue = parseInt(value)
        if ( !isNaN(parsedValue) && !fail) return parsedValue
        if ( fail ) throw new Error('Value: [' + value + '] Cannot be converted to number')
        return defaultValue
    }
}