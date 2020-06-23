/**
 * Localization culture information and related nested resources
 */
export interface Culture<TResources> {
    /**
     * RFC-4646 language code
     */
    code: string;

    /**
     * Key/value pairs of translations
     */
    resources: TResources;
}
