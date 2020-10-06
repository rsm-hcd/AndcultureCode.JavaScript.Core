interface PagedQuery {
    /**
     * Number of records to skip before retrieving rows.
     */
    skip?: number;
    /**
     * Number of records to take in the request. (_Up_ to this number of records will be returned,
     * if available)
     */
    take?: number;
}
export { PagedQuery };
