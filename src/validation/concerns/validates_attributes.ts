/**
 * This mixin is used to handle attribute level validation
 */
export default class ValidatesAttributes {

    validateMax (attribute, value, parameters): Boolean {

        if (value == null) {
            return true;
        }

        let max = parameters[0];

        return value <= max
    }
};