import { MdError } from '../core';
/**
 * Exception thrown when cols property is missing from grid-list
 * @docs-private
 */
export declare class MdGridListColsError extends MdError {
    constructor();
}
/**
 * Exception thrown when a tile's colspan is longer than the number of cols in list
 * @docs-private
 */
export declare class MdGridTileTooWideError extends MdError {
    constructor(cols: number, listLength: number);
}
/**
 * Exception thrown when an invalid ratio is passed in as a rowHeight
 * @docs-private
 */
export declare class MdGridListBadRatioError extends MdError {
    constructor(value: string);
}
