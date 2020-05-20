export default {
    defaults: {
        headers: {
            post: {},
            put: {},
        },
    },
    delete: jest.fn(() => Promise.resolve({ data: {} })),
    get: jest.fn(() => Promise.resolve({ data: {} })),
    interceptors: {
        response: {
            use: jest.fn(),
        },
    },
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
};
