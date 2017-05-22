import { MdError } from '../core/errors/error';
/** @docs-private */
export declare class MdInputContainerPlaceholderConflictError extends MdError {
    constructor();
}
/** @docs-private */
export declare class MdInputContainerUnsupportedTypeError extends MdError {
    constructor(type: string);
}
/** @docs-private */
export declare class MdInputContainerDuplicatedHintError extends MdError {
    constructor(align: string);
}
/** @docs-private */
export declare class MdInputContainerMissingMdInputError extends MdError {
    constructor();
}
