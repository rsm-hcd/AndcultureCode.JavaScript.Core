import Humanize from "humanize-plus";
import _ from "lodash";
export declare const StringUtils: {
    camelCase: (string?: string | undefined) => string;
    capitalize: (string?: string | undefined) => string;
    filename: (value?: string | undefined) => string | undefined;
    hasValue: (value?: string | undefined) => boolean;
    isEmpty: (value?: string | undefined) => boolean;
    isValidEmail: (value?: string | undefined) => boolean;
    join: (values: string[], separator?: string) => string;
    lowerFirst: (string?: string | undefined) => string;
    pad: (string?: string | undefined, length?: number | undefined, chars?: string | undefined) => string;
    padEnd: (string?: string | undefined, length?: number | undefined, chars?: string | undefined) => string;
    padStart: (string?: string | undefined, length?: number | undefined, chars?: string | undefined) => string;
    pluralize: typeof Humanize.pluralize;
    repeat: (string?: string | undefined, n?: number | undefined) => string;
    snakeCase: (string?: string | undefined) => string;
    startCase: (string?: string | undefined) => string;
    template: (string?: string | undefined, options?: _.TemplateOptions | undefined) => _.TemplateExecutor;
    truncateRight: (value: string, truncateAtPos: number) => string;
    upperFirst: (string?: string | undefined) => string;
    words: {
        (string?: string | undefined, pattern?: string | RegExp | undefined): string[];
        (string: string, index: string | number, guard: object): string[];
    };
};
