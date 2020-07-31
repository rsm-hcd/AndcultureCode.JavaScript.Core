import { CollectionUtils } from "../../utilities/collection-utils";
import { ObjectValidatorInterface } from "../../interfaces/object-validator";
import { ObjectValidationResult } from "../../types/object-validation-result";

// -----------------------------------------------------------------------------------------
// #region ObjectValidator class
// -----------------------------------------------------------------------------------------

abstract class ObjectValidator<T> implements ObjectValidatorInterface<T> {
    // -----------------------------------------------------------------------------------------
    // #region Static Methods
    // -----------------------------------------------------------------------------------------

    /**
     * Combines one or more validation result objects into a single result, concatenating error arrays
     * for each key that is found to have errors.
     *
     * @example
     * ObjectValidator.combineValidationResults(validationResult1, validationResult2);
     * // Returned object
     * {
     *      title: [
     *          "Title is required", // From validationResult1
     *          "Title can only contain letters, numbers, and spaces.", // From validationResult2
     *      ],
     *      endsOn: ["End Date and Time must be later than the Start Date and Time"] // From validationResult2
     * }
     *
     * @static
     * @template T
     * @param {...Array<ObjectValidationResult<T>>} validationResults
     * @returns {ObjectValidationResult<T>}
     * @memberof ObjectValidator
     */
    public static combineValidationResults<T>(
        ...validationResults: Array<ObjectValidationResult<T>>
    ): ObjectValidationResult<T> {
        const combinedValidationResults: ObjectValidationResult<T> = {};

        if (CollectionUtils.isEmpty(validationResults)) {
            return combinedValidationResults;
        }

        // Filter out any null/undefined validation results that may have been passed in, they will not have any errors to merge.
        validationResults = validationResults.filter(
            (objectValidationResult: ObjectValidationResult<T>) =>
                objectValidationResult != null
        );

        // Loop over each of the validation result objects, concatenating error string arrays where
        // elements in the combined validation result or simply copying over the array if the
        // error key has not been instantiated yet.
        validationResults.forEach(
            (objectValidationResult: ObjectValidationResult<T>) => {
                // If this validation object has no errors, we have no work to do in this loop. Continue.
                if (!ObjectValidator.hasErrors(objectValidationResult)) {
                    return;
                }

                const validationObjectKeys = Object.keys(
                    objectValidationResult
                );

                validationObjectKeys.forEach((k: string) => {
                    var key = k as keyof T;

                    // If the key is undefined, null, or has no entries, we have no work to do. Continue.
                    // We cannot use the static ObjectValidator.getErrorsFor() method as it is strongly
                    // typed to a key of the object, whereas we're accessing properties directly via the string representation.
                    if (CollectionUtils.isEmpty(objectValidationResult[key])) {
                        return;
                    }

                    // Check for existing errors in our merged validation result object.
                    // If we have existing errors, concatenate them from this individual result and continue.
                    if (
                        CollectionUtils.hasValues(
                            combinedValidationResults[key]
                        )
                    ) {
                        const validationErrors: string[] = combinedValidationResults[
                            key
                        ]!;
                        combinedValidationResults[
                            key
                        ] = validationErrors.concat(
                            objectValidationResult[key]!
                        );
                        return;
                    }

                    // Otherwise, this is the first time we're seeing this key and adding errors for it.
                    // Instantiate a new array and concatenate the errors array from this result.
                    // Not entirely sure it is necessary to do this, but creates a fresh reference for this errors array.
                    combinedValidationResults[key] =
                        objectValidationResult[key];
                });
            }
        );

        // Finally, return this merged object to the caller.
        return combinedValidationResults;
    }

    public static getConcatenatedErrorsFor<T>(
        key: keyof T,
        validationResult: ObjectValidationResult<T>
    ): string {
        if (
            CollectionUtils.isEmpty(Object.keys(validationResult)) ||
            CollectionUtils.isEmpty(validationResult[key])
        ) {
            return "";
        }
        return validationResult[key]!.join(",");
    }

    public static getErrorsFor<T>(
        key: keyof T,
        validationResult: ObjectValidationResult<T>
    ): string[] {
        if (
            CollectionUtils.isEmpty(Object.keys(validationResult)) ||
            CollectionUtils.isEmpty(validationResult[key])
        ) {
            return [];
        }
        return validationResult[key]!;
    }

    public static hasErrors<T>(
        validationResult: ObjectValidationResult<T>
    ): boolean {
        return CollectionUtils.hasValues(Object.keys(validationResult));
    }

    public static hasErrorsFor<T>(
        key: keyof T,
        validationResult: ObjectValidationResult<T>
    ): boolean {
        return (
            CollectionUtils.hasValues(Object.keys(validationResult)) &&
            CollectionUtils.hasValues(validationResult[key])
        );
    }

    // #endregion Static Methods

    // -----------------------------------------------------------------------------------------
    // #region Abstract methods
    // -----------------------------------------------------------------------------------------

    public abstract validate(
        object: T,
        ...args: any[]
    ): ObjectValidationResult<T>;

    // #endregion Abstract methods
}

// #endregion ObjectValidator class

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { ObjectValidator };

// #endregion Export
