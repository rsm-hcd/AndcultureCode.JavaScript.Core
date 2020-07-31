export type ObjectValidationResult<T> = {
    [key in keyof T]?: string[];
};
