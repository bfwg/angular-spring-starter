import { MdError } from '../core';
/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 * @docs-private
 */
export declare class MdMenuMissingError extends MdError {
    constructor();
}
/**
 * Exception thrown when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
export declare class MdMenuInvalidPositionX extends MdError {
    constructor();
}
/**
 * Exception thrown when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export declare class MdMenuInvalidPositionY extends MdError {
    constructor();
}
