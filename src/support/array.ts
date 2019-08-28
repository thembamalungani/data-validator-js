/**
 * @since 1.0.0
 * @author Themba Malungani <themba.clarence@gmail.com>
 * @licence MIT
 */
export default class Array {
    /**
     *  Gets the value of the key from `data` array
     *
     * @param data
     * @param key
     */
    static getValue(data: [], key) : any {
        if ( data[key] != undefined ) return data[key]
        return Array.getNestedValue(data, key)
    }

    /**
     * Gets a nested value from the data
     *
     * @param data
     * @param keys
     */
    static getNestedValue(data: [], keys) {
        let  value = null
        while ( keys.length > 0 && data != undefined ) {
            let key = keys[0]
            data = data[key]
            value = data
            keys.shift()
        }
    }
}