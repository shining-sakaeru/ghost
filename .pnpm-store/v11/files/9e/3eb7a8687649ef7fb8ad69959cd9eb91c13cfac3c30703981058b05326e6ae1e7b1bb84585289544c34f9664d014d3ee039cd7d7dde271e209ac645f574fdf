/**
 * Lowercases a string for comparison without ever turning a non-ASCII character into an ASCII one.
 *
 * U+212A KELVIN SIGN is the only code point in Unicode that `String.prototype.toLowerCase` folds
 * into pure ASCII (it becomes `k`), which would make `ban<KELVIN>.example.com` and
 * `bank.example.com` compare equal so either address could stand in for the other. Characters that
 * lowercase within their own script (`É` to `é`) are still lowercased.
 */
export declare function asciiSafeLowerCase(value: string): string;
