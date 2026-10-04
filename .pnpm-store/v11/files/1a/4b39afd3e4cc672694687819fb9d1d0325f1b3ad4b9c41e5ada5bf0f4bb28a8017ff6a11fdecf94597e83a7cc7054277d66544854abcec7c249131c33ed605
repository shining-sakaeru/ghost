import { parseEmailAddress as upstreamParseEmailAddress } from 'parse-email-address';
import { domainToASCII } from 'node:url';
export const parseEmailAddress = (emailAddress) => {
    const upstreamParsed = upstreamParseEmailAddress(emailAddress);
    if (!upstreamParsed) {
        return null;
    }
    const { user: local, domain: rawDomain } = upstreamParsed;
    const domain = domainToASCII(rawDomain);
    if (!domain) {
        return null;
    }
    return { local, domain };
};
//# sourceMappingURL=index.js.map