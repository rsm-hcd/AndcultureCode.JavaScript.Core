import { StringUtils } from "./string-utils";

describe("StringUtils", () => {
    // -------------------------------------------------------------------------------------------------
    // #region filename
    // -------------------------------------------------------------------------------------------------

    describe("filename", (): void => {
        test.each`
            inputString                       | expected
            ${null}                           | ${undefined}
            ${undefined}                      | ${undefined}
            ${""}                             | ${""}
            ${"/"}                            | ${""}
            ${"path/no-extension"}            | ${"no-extension"}
            ${"path/f.extension"}             | ${"f.extension"}
            ${"multi/level/file.name"}        | ${"file.name"}
            ${"mult1/l3v3l/f1l3.nam3"}        | ${"f1l3.nam3"}
            ${"mult1/l3v3l/file with.spaces"} | ${"file with.spaces"}
        `(
            `when inputString is $inputString, returns $expected`,
            ({ inputString, expected }: any): void => {
                expect(StringUtils.filename(inputString)).toBe(expected);
            }
        );
    });

    // #endregion filename

    // -------------------------------------------------------------------------------------------------
    // #region hasValue
    // -------------------------------------------------------------------------------------------------

    describe("hasValue", (): void => {
        test.each`
            inputString                | returnValue
            ${null}                    | ${false}
            ${undefined}               | ${false}
            ${""}                      | ${false}
            ${" "}                     | ${false}
            ${123456789}               | ${true}
            ${"Something blue"}        | ${true}
            ${["Something blue"]}      | ${true}
            ${{ a: "Something blue" }} | ${true}
        `(
            `when inputString is $inputString, hasValue returns $returnValue`,
            ({ inputString, returnValue }: any): void => {
                // Arrange & Act
                const result: boolean = StringUtils.hasValue(inputString);

                // Assert
                expect(result).toBe(returnValue);
            }
        );
    });

    // #endregion stringHasValue

    // -------------------------------------------------------------------------------------------------
    // #region isEmpty
    // -------------------------------------------------------------------------------------------------

    describe("isEmpty", (): void => {
        test.each`
            inputString                | returnValue
            ${null}                    | ${true}
            ${undefined}               | ${true}
            ${""}                      | ${true}
            ${" "}                     | ${true}
            ${123456789}               | ${false}
            ${"Something blue"}        | ${false}
            ${["Something blue"]}      | ${false}
            ${{ a: "Something blue" }} | ${false}
        `(
            `when inputString is $inputString, isEmpty returns $returnValue`,
            ({ inputString, returnValue }: any): void => {
                // Arrange & Act
                const result: boolean = StringUtils.isEmpty(inputString);

                // Assert
                expect(result).toBe(returnValue);
            }
        );
    });

    // #endregion isEmpty

    // -----------------------------------------------------------------------------------------
    // #region isValidCultureCode
    // -----------------------------------------------------------------------------------------

    describe("isValidCultureCode", () => {
        test.each`
            cultureCode         | expected
            ${null}             | ${false}
            ${undefined}        | ${false}
            ${""}               | ${false}
            ${" "}              | ${false}
            ${"123"}            | ${false}
            ${"Something blue"} | ${false}
            ${"en"}             | ${true}
            ${"es-es"}          | ${true}
            ${"es-Es"}          | ${true}
            ${"es-ES"}          | ${true}
            ${"es-ES"}          | ${true}
            ${"eS-ES"}          | ${true}
            ${"ES-es"}          | ${true}
            ${"ES-ES"}          | ${true}
            ${"en_us"}          | ${true}
            ${"en_Us"}          | ${true}
            ${"en_US"}          | ${true}
            ${"en_US"}          | ${true}
            ${"eN_US"}          | ${true}
            ${"EN_Us"}          | ${true}
            ${"EN_US"}          | ${true}
        `(
            "when cultureCode is $cultureCode, returns $expected",
            ({ cultureCode, expected }) => {
                // Arrange & Act
                const result: boolean =
                    StringUtils.isValidCultureCode(cultureCode);

                // Assert
                expect(result).toBe(expected);
            }
        );
    });

    // #endregion isValidCultureCode

    // -------------------------------------------------------------------------------------------------
    // #region isValidEmail
    // -------------------------------------------------------------------------------------------------

    describe("isValidEmail", (): void => {
        test.each`
            inputString                                   | returnValue
            ${"prettyandsimple@example.com"}              | ${true}
            ${"x@example.com"}                            | ${true}
            ${"fully-qualified-domain@example.com"}       | ${true}
            ${'"very.unusual.@.unusual.com"@example.com'} | ${true}
            ${"/#!$%&'*+-/=?^_`{}|~@example.org"}         | ${true}
            ${"Abc.example.com"}                          | ${false}
            ${"A@b@c@example.com"}                        | ${false}
            ${["john..doe@example.com"]}                  | ${false}
        `(
            `when inputString is $inputString, isValidEmail returns $returnValue`,
            ({ inputString, returnValue }: any): void => {
                // Arrange & Act
                const result: boolean = StringUtils.isValidEmail(inputString);

                // Assert
                expect(result).toBe(returnValue);
            }
        );
    });

    // #endregion isValidEmail

    // -----------------------------------------------------------------------------------------
    // #region join()
    // -----------------------------------------------------------------------------------------

    describe("join()", () => {
        describe("with the default separator", () => {
            type JoinTestTypes = [string[], string];

            test.each<JoinTestTypes>([
                [[], ""],
                [["a"], "a"],
                [["a"], "a"],
                [["a", "b"], "a,b"],
            ])(
                "when values is %p,  returns %p",
                (values: string[], expected: string) => {
                    // Arrange & Act
                    const result: string = StringUtils.join(values);

                    // Assert
                    expect(result).toBe(expected);
                }
            );
        });

        describe("with a separator argument", () => {
            type JoinTestTypesWithSeparator = [string[], string, string];

            test.each<JoinTestTypesWithSeparator>([
                [[], "", ""],
                [["a"], "", "a"],
                [["a"], ",", "a"],
                [["a", "b"], "", "ab"],
                [["a", "b"], " ", "a b"],
            ])(
                "when values is %p and separator is %p, returns %p",
                (values: string[], separator: string, expected: string) => {
                    // Arrange & Act
                    const result: string = StringUtils.join(values, separator);

                    // Assert
                    expect(result).toBe(expected);
                }
            );
        });
    });

    // #endregion join

    // -----------------------------------------------------------------------------------------
    // #region pluralize
    // -----------------------------------------------------------------------------------------

    describe("pluralize()", () => {
        test.each`
            count        | singular     | plural         | returnValue
            ${0}         | ${"turtle"}  | ${"turtles"}   | ${"turtles"}
            ${1}         | ${"turtle"}  | ${"turtles"}   | ${"turtle"}
            ${2}         | ${"turtle"}  | ${"turtleses"} | ${"turtleses"}
            ${undefined} | ${"turtle"}  | ${"turtles"}   | ${null}
            ${1}         | ${undefined} | ${"turtles"}   | ${null}
            ${1}         | ${"turtle"}  | ${undefined}   | ${"turtle"}
            ${2}         | ${"turtle"}  | ${undefined}   | ${"turtles"}
        `(
            `when count is $count, singular is $singular, plural is $plural, pluralize returns $returnValue`,
            ({ count, singular, plural, returnValue }: any): void => {
                // Arrange & Act
                const result = StringUtils.pluralize(count, singular, plural);

                // Assert
                expect(result).toBe(returnValue);
            }
        );
    });

    // #endregion pluralize

    // -----------------------------------------------------------------------------------------
    // #region truncateRight()
    // -----------------------------------------------------------------------------------------

    describe("truncateRight()", () => {
        const ENGLISH_PANGRAM = "The quick brown fox jumps over the lazy dog.";
        test("when length of input string is less than truncateAtPos, it returns the input string", () => {
            // Arrange
            const inputString = "a".repeat(5);
            const truncateAtPos = 10;

            // Act
            const result = StringUtils.truncateRight(
                inputString,
                truncateAtPos
            );

            // Assert
            expect(result).toBe(inputString);
        });

        test("when length of input string is equal to truncateAtPos, it returns the input string", () => {
            // Arrange
            const inputString = "a".repeat(5);
            const truncateAtPos = 5;

            // Act
            const result = StringUtils.truncateRight(
                inputString,
                truncateAtPos
            );

            // Assert
            expect(result).toBe(inputString);
        });

        test("when the inputString is shorter than the truncateAtPos, it returns the unmodified string", () => {
            // Arrange & Act
            const result = StringUtils.truncateRight(
                ENGLISH_PANGRAM,
                ENGLISH_PANGRAM.length + 1
            );

            // Assert
            expect(result).toBe(ENGLISH_PANGRAM);
        });

        test("when the inputString is the same length as the truncateAtPos, it returns the unmodified string", () => {
            // Arrange & Act
            const result = StringUtils.truncateRight(
                ENGLISH_PANGRAM,
                ENGLISH_PANGRAM.length
            );

            // Assert
            expect(result).toBe(ENGLISH_PANGRAM);
        });

        test("when the inputString is longer than the truncateAtPos, it returns the string truncated with ellipses", () => {
            // Arrange & Act
            const result = StringUtils.truncateRight(
                ENGLISH_PANGRAM,
                ENGLISH_PANGRAM.length - 1
            );

            // Assert
            expect(result).toBe("The quick brown fox jumps over the lazy...");
        });

        test("when the inputString is longer than the truncateAtPos and the truncated string ends with a period, it returns a string without ending ellipses", () => {
            // Arrange
            const inputString = "A sentence. The";
            // Truncate 1 character, plus 3 for the potential ellipses. This method should trim the
            // result and see that the string already ends with a period, which it will not append
            // any additional characters.
            const truncateAtPos = inputString.length - 1;

            // Act
            const result = StringUtils.truncateRight(
                inputString,
                truncateAtPos
            );

            // Assert

            expect(result).toBe("A sentence.");
        });
    });

    // #endregion truncateRight()
});
