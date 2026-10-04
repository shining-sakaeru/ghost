/**
 * This is modified from a copy of
 * https://github.com/kach/nearley/blob/96f1da12acdb986e8279355d3d34cf5b139ab268/lib/nearley.js
 * which has the following license:
 *
 *     The MIT License (MIT)
 *
 *     Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019 Kartik Chandra, Tim Radvan
 *
 *     Permission is hereby granted, free of charge, to any person obtaining a copy
 *     of this software and associated documentation files (the "Software"), to deal
 *     in the Software without restriction, including without limitation the rights
 *     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *     copies of the Software, and to permit persons to whom the Software is
 *     furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 *     copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *     SOFTWARE.
 *
 * It has been modified to use proper ES6 classes and proper ESM exports.
 */
export class Rule {
    static highestId: number;
    constructor(name: any, symbols: any, postprocess: any);
    id: number;
    name: any;
    symbols: any;
    postprocess: any;
    toString(withCursorAt: any): string;
}
export class Grammar {
    static fromCompiled(rules: any, start: any): Grammar;
    constructor(rules: any, start: any);
    rules: any;
    start: any;
    byName: {};
}
export class Parser {
    static fail: {};
    constructor(rules: any, start: any, options: any);
    grammar: Grammar;
    options: {
        keepHistory: boolean;
        lexer: any;
    };
    lexer: any;
    lexerState: any;
    table: Column[];
    current: number;
    feed(chunk: any): this;
    results: any[] | undefined;
    reportLexerError(lexerError: any): string;
    reportError(token: any): string;
    reportErrorCommon(lexerMessage: any, tokenDisplay: any): string;
    displayStateStack(stateStack: any, lines: any): void;
    getSymbolDisplay(symbol: any): any;
    buildFirstStateStack(state: any, visited: any): any;
    save(): Column | undefined;
    restore(column: any): void;
    rewind(index: any): void;
    finish(): any[];
}
declare class Column {
    constructor(grammar: any, index: any);
    grammar: any;
    index: any;
    states: any[];
    wants: {};
    scannable: any[];
    completed: {};
    process(nextColumn: any): void;
    predict(exp: any): void;
    complete(left: any, right: any): void;
}
export {};
