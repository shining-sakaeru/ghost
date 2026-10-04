/**
 * This is largely copied from
 * https://github.com/gene-hightower/smtp-address-parser/blob/75e0f93837cc302c122cfd3f9a6d9a49f9dd56a3/lib/index.ts
 * which has the following license:
 *
 *     MIT License
 *
 *     Copyright (c) 2021 Gene Hightower
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
 * It has been modified to have proper imports.
 */
import { type RequireExactlyOne } from 'type-fest';
export type ParseOutput = {
    domainPart: RequireExactlyOne<{
        AddressLiteral: string;
        DomainName: string;
    }>;
    localPart: RequireExactlyOne<{
        QuotedString: string;
        DotString: string;
    }>;
};
export declare function parse(address: string): ParseOutput;
/** Strip +something, strip '.'s, and map to lower case. */
export declare function normalize_dot_string(dot_string: string): string;
/** The G style address normalization. */
export declare function normalize(address: string): string;
export declare function canonicalize_quoted_string(quoted_string: string): string;
/** Apply a canonicalization consistent with standards to support comparison as a string. */
export declare function canonicalize(address: string): string;
