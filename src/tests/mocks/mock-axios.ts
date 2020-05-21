import { MockAxios as IMockAxios } from "./mock-axios";
import axios from "axios";
import { Record } from "immutable";

// ---------------------------------------------------------
// #region Interfaces & Types
// ---------------------------------------------------------

/**
 * MockAxios is merely a typed wrapper around the dynamically
 * mocked __mocks__/axios implementation.
 */

type AxiosJestMock = jest.Mock<Promise<{ data: {} }>, []>;

interface MockAxios {
    delete: AxiosJestMock;

    /**
     * Simple way to mock a successful axios delete request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    deleteSuccess: (record?: any, delay?: number) => void;

    get: AxiosJestMock;

    /**
     * Simple way to mock a successful axios get/find request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    getSuccess: (record: any, delay?: number) => void;

    /**
     * Simple way to mock a successful axios get/list request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    listSuccess: (records: any[], delay?: number) => void;

    post: AxiosJestMock;

    /**
     * Simple way to mock a successful axios post request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    postSuccess: (record: any, delay?: number) => void;

    put: AxiosJestMock;

    /**
     * Simple way to mock a successful axios put request
     * @param record value to return when resolved
     * @param delay milliseconds to delay before resolving the promise
     */
    putSuccess: (record: any, delay?: number) => void;
}

// #endregion Interfaces & Types

// ---------------------------------------------------------
// #region Public Functions
// ---------------------------------------------------------

const deleteSuccess = (record?: any, delay?: number) =>
    _mockSuccess(MockAxios.delete, record, delay);

const getSuccess = (record: any, delay?: number) =>
    _mockSuccess(MockAxios.get, record, delay);

const listSuccess = (records: any[], delay?: number) =>
    _mockSuccess(MockAxios.get, records, delay);

const postSuccess = (record: any, delay?: number) =>
    _mockSuccess(MockAxios.post, record, delay);

const putSuccess = (record: any, delay?: number) =>
    _mockSuccess(MockAxios.put, record, delay);

// #endregion Public Functions

// ---------------------------------------------------------
// #region Private Functions
// ---------------------------------------------------------

const _mockSuccess = (
    method: AxiosJestMock,
    resultObject: any | any[],
    delay?: number
) => {
    resultObject = _resultObjectToJS(resultObject);
    delay = delay != null ? delay : 0;
    const resolveResult = {
        data: {
            resultObject,
        },
    };

    // Result needs to match PagedResult<T> when an array
    if (resultObject != null && resultObject instanceof Array) {
        (resolveResult.data as any).rowCount = resultObject.length;
    }

    method.mockImplementationOnce(() => {
        return new Promise((resolve) =>
            window.setTimeout(() => resolve(resolveResult), delay)
        );
    });
};

const _resultObjectToJS = (resultObject: any | any[]): any | any[] => {
    if (resultObject == null) {
        return resultObject;
    }

    if (resultObject instanceof Array) {
        return resultObject.map((r) => r.toJS());
    }

    if (Record.isRecord(resultObject)) {
        return resultObject.toJS();
    }

    return resultObject;
};

// #endregion Private Functions

// ---------------------------------------------------------
// #region Exports
// ---------------------------------------------------------

const MockAxios: IMockAxios = {
    delete: axios.delete as AxiosJestMock,
    deleteSuccess,
    get: axios.get as AxiosJestMock,
    getSuccess,
    listSuccess,
    post: axios.post as AxiosJestMock,
    postSuccess,
    put: axios.put as AxiosJestMock,
    putSuccess,
};

export { MockAxios };

// #endregion Exports
