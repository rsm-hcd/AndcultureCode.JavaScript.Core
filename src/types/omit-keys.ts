// -----------------------------------------------------------------------------------------
// #region Types
// -----------------------------------------------------------------------------------------

/**
 * Omit all keys from `TSource` that intersect with `TExclusion`
 */
type OmitKeys<TSource, TExclusion> = Omit<TSource, keyof TExclusion>;

// #endregion Types

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { OmitKeys };

// #endregion Exports
