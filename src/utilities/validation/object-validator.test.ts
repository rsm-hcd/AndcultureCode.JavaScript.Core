import { ObjectValidator } from "./object-validator";
import { ObjectValidationResult } from "../../types/object-validation-result";
import { CollectionUtils } from "../../utilities/collection-utils";
import { StringUtils } from "../../utilities/string-utils";

interface TestObject {
    description?: string;
    id: number;
    name: string;
}

class TestValidator extends ObjectValidator<TestObject> {
    public static ERROR_DESCRIPTION_REQUIRED: string =
        "Description is a required field.";

    public static ERROR_ID_LESS_THAN_ZERO: string =
        "Id cannot be less than or equal to 0.";

    public static ERROR_NAME_REQUIRED: string = "Name is a required field.";

    public validate(
        object: TestObject,
        hasDescription: boolean = false
    ): ObjectValidationResult<TestObject> {
        const result: ObjectValidationResult<TestObject> = {};

        // Validate that the name has a value
        if (StringUtils.isEmpty(object.name)) {
            result.name = [TestValidator.ERROR_NAME_REQUIRED];
        }

        // Validate that the id is > 0
        if (object.id <= 0) {
            result.id = [TestValidator.ERROR_ID_LESS_THAN_ZERO];
        }

        // Optionally validate that the description is provided
        if (hasDescription && StringUtils.isEmpty(object.description)) {
            result.description = [TestValidator.ERROR_DESCRIPTION_REQUIRED];
        }

        return result;
    }
}

interface TestStub {
    description?: string;
    title?: string;
}

describe("ObjectValidator", () => {
    let sut: TestValidator;

    beforeEach((): void => {
        sut = new TestValidator();
    });

    // -------------------------------------------------------------------------------------------------
    // #region combineValidationResults()
    // -------------------------------------------------------------------------------------------------

    describe("combineValidationResults()", (): void => {
        test("when passed an empty array, it returns an empty validation result", (): void => {
            // Arrange & Act
            const result = ObjectValidator.combineValidationResults([]);

            // Assert
            expect(result).toStrictEqual({});
        });

        test("when passed multiple empty validation results, it returns an empty validation result", (): void => {
            // Arrange & Act
            const result = ObjectValidator.combineValidationResults({}, {});

            // Assert
            expect(result).toStrictEqual({});
        });

        test("when passed a validation result, it returns that validation result", (): void => {
            // Arrange
            const validationResult: ObjectValidationResult<TestStub> = {
                title: ["Test"],
            };

            // Act
            const result = ObjectValidator.combineValidationResults(
                validationResult
            );

            // Assert
            expect(result).toStrictEqual(validationResult);
        });

        test("when passed a validation result and one or more 'empty' results, it returns only the valid validation result", (): void => {
            // Arrange
            const validationResult: ObjectValidationResult<TestStub> = {
                title: ["Test"],
            };

            // Act
            const result = ObjectValidator.combineValidationResults(
                validationResult,
                {}
            );

            // Assert
            expect(result).toStrictEqual(validationResult);
        });

        test("when passed multiple validation results with the same key, it returns a valid validation result with concatenated errors", (): void => {
            // Arrange
            const validationResult1: ObjectValidationResult<TestStub> = {
                title: ["Test1"],
            };
            const validationResult2: ObjectValidationResult<TestStub> = {
                title: ["Test2"],
            };

            // Act
            const result = ObjectValidator.combineValidationResults(
                validationResult1,
                validationResult2
            );

            // Assert
            expect(result).toContainKey("title");
            expect(result.title).toHaveLength(2);
        });

        test("when passed multiple validation results with the various keys, it returns a valid validation result with merged and concatenated errors", (): void => {
            // Arrange
            const validationResult1: ObjectValidationResult<TestStub> = {
                title: ["Test1"],
            };
            const validationResult2: ObjectValidationResult<TestStub> = {
                description: ["There's an error here."],
                title: ["Test2"],
            };
            const expectedValidationResult: ObjectValidationResult<TestStub> = {
                description: [...validationResult2.description!],
                title: [
                    ...validationResult1.title!,
                    ...validationResult2.title!,
                ],
            };

            // Act
            const result = ObjectValidator.combineValidationResults(
                validationResult1,
                validationResult2
            );

            // Assert
            expect(result).toStrictEqual(expectedValidationResult);
        });
    });
    // #endregion combineValidationResults()

    // -------------------------------------------------------------------------------------------------
    // #region hasErrors()
    // -------------------------------------------------------------------------------------------------

    describe("hasErrors()", (): void => {
        test("when the validation result has errors, it returns true", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.hasErrors(validationResult);

            // Assert
            expect(result).toBeTrue();
        });

        test("when the validation result does not have errors, it returns false", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Name",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.hasErrors(validationResult);

            // Assert
            expect(result).toBeFalse();
        });
    });

    // #endregion hasErrors()

    // -------------------------------------------------------------------------------------------------
    // #region hasErrorsFor()
    // -------------------------------------------------------------------------------------------------

    describe("hasErrorsFor()", (): void => {
        test("when the validation result has errors for the given key, it returns true", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.hasErrorsFor("name", validationResult);

            // Assert
            expect(result).toBeTrue();
        });

        test("when the validation result does not have errors for the given key, it returns false", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Name",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.hasErrorsFor("name", validationResult);

            // Assert
            expect(result).toBeFalse();
        });
    });

    // #endregion hasErrorsFor()

    // -------------------------------------------------------------------------------------------------
    // #region getConcatenatedErrorsFor()
    // -------------------------------------------------------------------------------------------------

    describe("getConcatenatedErrorsFor()", (): void => {
        test("when the validation result has errors for the given key, it returns a string", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.getErrorsFor("name", validationResult);

            // Assert
            expect(result).not.toBeEmpty();
        });

        test("when the validation result does not have errors for the given key, it returns an empty string", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Name",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.getErrorsFor("name", validationResult);

            // Assert
            expect(result).toBeEmpty();
        });
    });

    // #endregion getConcatenatedErrorsFor()

    // -------------------------------------------------------------------------------------------------
    // #region getErrorsFor()
    // -------------------------------------------------------------------------------------------------

    describe("getErrorsFor()", (): void => {
        test("when the validation result has errors for the given key, it returns an array of strings", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.getErrorsFor("name", validationResult);

            // Assert
            expect(result).not.toBeEmpty();
        });

        test("when the validation result does not have errors for the given key, it returns an empty array", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Name",
            };

            // Act
            const validationResult = sut.validate(testObj);
            const result = TestValidator.getErrorsFor("name", validationResult);

            // Assert
            expect(result).toBeEmpty();
        });
    });

    // #endregion getErrorsFor()

    // -------------------------------------------------------------------------------------------------
    // #region validate()
    // -------------------------------------------------------------------------------------------------

    describe("validate()", (): void => {
        test("when a field fails validation, it returns an object with keys", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const result = sut.validate(testObj);

            // Assert
            expect(CollectionUtils.hasValues(Object.keys(result))).toBeTrue();
        });

        test("when a field fails validation, it returns an object with a key containing an array of error strings", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "",
            };

            // Act
            const result = sut.validate(testObj);

            // Assert
            expect(result.name).not.toBeNull();
            expect(result.name).not.toBeEmpty();
            expect(result.name).toContainValue(
                TestValidator.ERROR_NAME_REQUIRED
            );
        });

        test("when a field passes validation, it returns an object with without a key for the field", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Test",
            };

            // Act
            const result = sut.validate(testObj);

            // Assert
            expect(result.name).toBeUndefined();
        });

        test("when a param is given to toggle validation behavior, it conditionally validates the object and returns errors", (): void => {
            // Arrange
            const testObj: TestObject = {
                id: 1,
                name: "Test",
            };

            // Act
            const result = sut.validate(testObj, true);

            // Assert
            expect(result.description).not.toBeNull();
            expect(result.description).not.toBeEmpty();
            expect(result.description).toContainValue(
                TestValidator.ERROR_DESCRIPTION_REQUIRED
            );
        });
    });

    // #endregion validate()
});
