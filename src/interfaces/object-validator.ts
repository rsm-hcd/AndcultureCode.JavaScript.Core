import { ObjectValidationResult } from "../types/object-validation-result";
import { ObjectValidator } from "utilities/validation/object-validator";
interface ObjectValidatorInterface<T> {
    /**
     * Returns a validation object that will contain keys of the same name as the object being
     * validated if and ONLY if there are errors associated with that field.
     *
     * @example // Returned object for an invalid Alert
     * {
     *      title: ["Title is required"],
     *      endsOn: ["End Date and Time must be later than the Start Date and Time"]
     * }
     * @param {T} object The object to run validation on.
     * @param {...any[]} args An array of any addition arguments that might be needed for conditional validation
     * @returns {ObjectValidationResult<T>} An object containing matching key names &
     * an array of strings containing error messages for the field, if validation failed. (see example above)
     * @memberof ObjectValidatorInterface
     */
    validate(object: T, ...args: any[]): ObjectValidationResult<T>;
}

export { ObjectValidatorInterface };
