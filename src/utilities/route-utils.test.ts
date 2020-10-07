import "jest-extended";
import { RouteUtils } from "./route-utils";

describe("RouteUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region appendQueryParams
    // -----------------------------------------------------------------------------------------

    describe("appendQueryParams", () => {
        test("when path is null, it returns an empty string", () => {
            // Arrange
            const path: any = null;
            const queryParams = {};

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe("");
        });

        test("when queryParams is null, it returns the unmodified path", () => {
            // Arrange
            const path = "path";
            const queryParams = null;

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe(path);
        });

        test("when queryParams is has a value, it returns the path", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                skip: 1,
                take: 2,
            };

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe("path?skip=1&take=2");
        });

        test("When queryParams has an array value, then array is serialized using array format by default", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                entityIds: [1, 2, 3],
            };

            // Act
            const result = RouteUtils.appendQueryParams(path, queryParams);

            // Assert
            expect(result).toBe(
                "path?entityIds[0]=1&entityIds[1]=2&entityIds[2]=3"
            );
        });

        test("When given arrayFormat='bracket', then serializes array using bracket format", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                entityIds: [1, 2, 3],
            };

            // Act
            const result = RouteUtils.appendQueryParams(
                path,
                queryParams,
                "bracket"
            );

            // Assert
            expect(result).toBe(
                "path?entityIds[]=1&entityIds[]=2&entityIds[]=3"
            );
        });

        test("When given arrayFormat='comma', then serializes array using comma format", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                entityIds: [1, 2, 3],
            };

            // Act
            const result = RouteUtils.appendQueryParams(
                path,
                queryParams,
                "comma"
            );

            // Assert
            expect(result).toBe("path?entityIds=1,2,3");
        });

        test("When given arrayFormat='separator', then serializes array using separator format", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                entityIds: [1, 2, 3],
            };

            // Act
            const result = RouteUtils.appendQueryParams(
                path,
                queryParams,
                "separator",
                "|"
            );

            // Assert
            expect(result).toBe("path?entityIds=1|2|3");
        });

        test("When given arrayFormat='none', then serializes array using duplicate key format", () => {
            // Arrange
            const path = "path";
            const queryParams = {
                entityIds: [1, 2, 3],
            };

            // Act
            const result = RouteUtils.appendQueryParams(
                path,
                queryParams,
                "none"
            );

            // Assert
            expect(result).toBe("path?entityIds=1&entityIds=2&entityIds=3");
        });
    });

    // #endregion appendQueryParams

    // -----------------------------------------------------------------------------------------
    // #region getUrl
    // -----------------------------------------------------------------------------------------

    describe("getUrl", () => {
        test("when given a path without replaceable params, it returns the unmodified path", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};

            // Act
            const result = RouteUtils.getUrl(path, pathParams);

            // Assert
            expect(result).toBe(path);
        });

        test("when given a path with replaceable params, it returns the path with replaced values", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                userId: 1,
                id: 1,
            };

            // Act
            const result = RouteUtils.getUrl(path, pathParams);

            // Assert
            expect(result).toBe("users/1/roles/1");
        });
    });

    // #endregion getUrl

    // -----------------------------------------------------------------------------------------
    // #region getUrlFromPath
    // -----------------------------------------------------------------------------------------

    describe("getUrlFromPath", () => {
        test("when given a path without replaceable params, it returns the unmodified path", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe(path);
        });

        test("when given a path with replaceable params, it returns the path with replaced values", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                id: 1,
                userId: 1,
            };
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe("users/1/roles/1");
        });

        test("when given a path with query params, it returns the path with appended values", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = {};
            const queryParams = {
                skip: 0,
                take: 10,
            };

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBe("some/nested/route?skip=0&take=10");
        });

        test("when given a null path, it returns null", () => {
            // Arrange
            const path: any = null;
            const pathParams = {};
            const queryParams = {};

            // Act
            const result = RouteUtils.getUrlFromPath(
                path,
                pathParams,
                queryParams
            );

            // Assert
            expect(result).toBeNull();
        });
    });

    // #endregion getUrlFromPath

    // -----------------------------------------------------------------------------------------
    // #region isAbsoluteUrl
    // -----------------------------------------------------------------------------------------

    describe("isAbsoluteUrl", () => {
        test("when given url of null, returns false", () => {
            expect(RouteUtils.isAbsoluteUrl(null)).toBeFalse();
        });

        test("when given url of undefined, returns false", () => {
            expect(RouteUtils.isAbsoluteUrl(undefined)).toBeFalse();
        });

        test("when given url of empty string, returns false", () => {
            expect(RouteUtils.isAbsoluteUrl("")).toBeFalse();
        });

        test("when given url of string with whitespace, returns false", () => {
            expect(RouteUtils.isAbsoluteUrl("  ")).toBeFalse();
        });

        test("when given url of relative path, returns false", () => {
            expect(RouteUtils.isAbsoluteUrl("/test/relative/path")).toBeFalse();
        });

        test("when given url without protocol, returns false", () => {
            expect(
                RouteUtils.isAbsoluteUrl("://test/relative/path")
            ).toBeFalse();
        });

        test("when given url only with protocol, returns true", () => {
            expect(RouteUtils.isAbsoluteUrl("http://")).toBeTrue();
        });

        test("when given url with protocol and path components, returns true", () => {
            expect(
                RouteUtils.isAbsoluteUrl("http://my.url/with/path")
            ).toBeTrue();
        });
    });

    // #endregion isAbsoluteUrl

    // -----------------------------------------------------------------------------------------
    // #region queryStringToObject
    // -----------------------------------------------------------------------------------------

    describe("queryStringToObject", () => {
        test.each`
            inputString
            ${null}
            ${undefined}
            ${""}
            ${" "}
        `(
            "given queryString is $inputString, returns empty object",
            ({ inputString }) => {
                // Arrange & Act
                const result = RouteUtils.queryStringToObject<any>(inputString);

                // Assert
                expect(result).toEqual({});
            }
        );

        test("given queryString contains matching properties, returns typed object", () => {
            // Arrange
            interface TestStub {
                testProp1: string;
                testProp2: string;
            }
            const expectedValue1 = "testValue1";
            const expectedValue2 = "testValue2";

            const queryString = `testProp1=${expectedValue1}&testProp2=${expectedValue2}`;

            // Act
            const result = RouteUtils.queryStringToObject<TestStub>(
                queryString
            );

            // Assert
            expect(result).not.toBeNull();
            expect(result.testProp1).toBe(expectedValue1);
            expect(result.testProp2).toBe(expectedValue2);
        });

        test("given queryString contains unmatching properties, returns typed object with unmatched properties", () => {
            // Arrange
            interface TestStub {
                testProp1: string;
            }
            const expectedTypedValue1 = "testValue1";
            const expectedUntypedProperty2 = "testProp2";
            const expectedUntypedValue2 = "testValue2";

            const queryString = `testProp1=${expectedTypedValue1}&${expectedUntypedProperty2}=${expectedUntypedValue2}`;

            // Act
            const result = RouteUtils.queryStringToObject<TestStub>(
                queryString
            );

            // Assert
            expect(result).not.toBeNull();
            expect(result.testProp1).toBe(expectedTypedValue1);
            expect(result[expectedUntypedProperty2]).toBe(
                expectedUntypedValue2
            );
        });
    });

    // #endregion queryStringToObject

    // -----------------------------------------------------------------------------------------
    // #region replacePathParams
    // -----------------------------------------------------------------------------------------

    describe("replacePathParams", () => {
        test("when path is null, it returns null", () => {
            // Arrange
            const path: any = null;
            const pathParams = {};

            // Act
            const result = RouteUtils.replacePathParams(path, pathParams);

            // Assert
            expect(result).toBeNull();
        });

        test("when path has a value but pathParams is null, it returns the unmodified path", () => {
            // Arrange
            const path = "some/nested/route";
            const pathParams = null;

            // Act
            const result = RouteUtils.replacePathParams(path, pathParams);

            // Assert
            expect(result).toBe(path);
        });

        test("when a path param is encountered that can't be mapped, it calls console.error", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                userId: 1,
            };
            const consoleErrorSpy = jest.spyOn(console, "error");

            // Act
            RouteUtils.replacePathParams(path, pathParams);

            // Assert
            expect(consoleErrorSpy).toHaveBeenCalled();
        });

        test("when given path with replaceable params, it returns path with replaced values", () => {
            // Arrange
            const path = "users/:userId/roles/:id";
            const pathParams = {
                id: 1,
                userId: 1,
            };

            // Act
            const result = RouteUtils.replacePathParams(path, pathParams);

            // Assert
            expect(result).toBe("users/1/roles/1");
        });
    });

    // #endregion replacePathParams
});
