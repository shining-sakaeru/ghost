export declare const schemas: {
    readonly 'comment_bans-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            comment_bans: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    allOf: {
                        $ref: string;
                    }[];
                };
            };
        };
        required: string[];
    };
    readonly comment_bans: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            comment_ban: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    reason: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    expires_at: {
                        type: string[];
                        format: string;
                    };
                };
                required: string[];
            };
        };
    };
    readonly 'images-upload': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        $ref: string;
    };
    readonly images: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            image: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    purpose: {
                        type: string;
                        enum: string[];
                        default: string;
                    };
                    ref: {
                        type: string[];
                        maxLength: number;
                    };
                };
            };
        };
    };
    readonly 'labels-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            labels: {
                type: string;
                minItems: number;
                maxItems: number;
                additionalProperties: boolean;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'labels-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            labels: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    $ref: string;
                };
            };
        };
        required: string[];
    };
    readonly labels: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            label: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        pattern: string;
                    };
                    slug: {
                        type: string[];
                        maxLength: number;
                    };
                };
            };
        };
    };
    readonly 'media-upload': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        $ref: string;
    };
    readonly media: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            image: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    ref: {
                        type: string[];
                        maxLength: number;
                    };
                };
            };
        };
    };
    readonly 'members-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            members: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'members-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            members: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        name: {
                            type: string;
                            maxLength: number;
                            pattern: string;
                        };
                        email: {
                            type: string;
                            minLength: number;
                            maxLength: number;
                            pattern: string;
                        };
                        note: {
                            type: string;
                            minLength: number;
                            maxLength: number;
                        };
                        subscribed: {
                            type: string;
                        };
                        subscriptions: {
                            type: string;
                        };
                        comped: {
                            type: string;
                        };
                        products: {
                            $ref: string;
                        };
                        tiers: {
                            $ref: string;
                        };
                        newsletters: {
                            $ref: string;
                        };
                        labels: {
                            $ref: string;
                        };
                        can_comment: {
                            type: string;
                        };
                        metafields: {
                            description: string;
                            $comment: string;
                        };
                        comment_ban: {
                            oneOf: ({
                                type: string;
                                additionalProperties: boolean;
                                properties: {
                                    reason: {
                                        type: string;
                                        minLength: number;
                                        maxLength: number;
                                    };
                                    expires_at: {
                                        type: string[];
                                        format: string;
                                    };
                                };
                                required: string[];
                            } | {
                                additionalProperties?: undefined;
                                properties?: undefined;
                                required?: undefined;
                                type: string;
                            })[];
                        };
                    };
                };
            };
        };
        required: string[];
    };
    readonly 'members-upload': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        items: {
            type: string;
            additionalProperties: boolean;
            required: string[];
            properties: {
                name: {
                    type: string[];
                    maxLength: number;
                    pattern: string;
                };
                email: {
                    type: string;
                    minLength: number;
                    maxLength: number;
                    pattern: string;
                };
                note: {
                    type: string[];
                    minLength: number;
                    maxLength: number;
                };
                subscribed: {
                    type: string[];
                    enum: (string | null)[];
                };
                labels: {
                    type: string[];
                };
                created_at: {
                    type: string[];
                    format: string;
                };
                stripe_customer_id: {
                    type: string[];
                };
                complimentary_plan: {
                    type: string[];
                    enum: (string | null)[];
                };
            };
        };
    };
    readonly members: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            member: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                        pattern: string;
                    };
                    email: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        pattern: string;
                    };
                    note: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    subscribed: {
                        type: string;
                    };
                    comped: {
                        type: string;
                    };
                    stripe_customer_id: {
                        type: string;
                    };
                    subscriptions: {
                        type: string;
                    };
                    labels: {
                        $ref: string;
                    };
                    products: {
                        $ref: string;
                    };
                    tiers: {
                        $ref: string;
                    };
                    newsletters: {
                        $ref: string;
                    };
                    can_comment: {
                        type: string;
                    };
                    metafields: {
                        description: string;
                        $comment: string;
                    };
                    comment_ban: {
                        oneOf: ({
                            type: string;
                            additionalProperties: boolean;
                            properties: {
                                reason: {
                                    type: string;
                                    minLength: number;
                                    maxLength: number;
                                };
                                expires_at: {
                                    type: string[];
                                    format: string;
                                };
                            };
                            required: string[];
                        } | {
                            additionalProperties?: undefined;
                            properties?: undefined;
                            required?: undefined;
                            type: string;
                        })[];
                    };
                };
            };
            "member-products": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                        maxLength?: undefined;
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "member-newsletters": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "member-labels": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
        };
    };
    readonly 'pages-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            pages: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'pages-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            pages: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly pages: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            page: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    title: {
                        type: string;
                        maxLength: number;
                    };
                    slug: {
                        type: string;
                        maxLength: number;
                    };
                    mobiledoc: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    lexical: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    html: {
                        type: string[];
                        maxLength: number;
                    };
                    feature_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    feature_image_alt: {
                        type: string[];
                        maxLength: number;
                    };
                    feature_image_caption: {
                        type: string[];
                        maxLength: number;
                    };
                    featured: {
                        type: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                    locale: {
                        type: string[];
                        maxLength: number;
                    };
                    visibility: {
                        type: string[];
                    };
                    visibility_filter: {
                        type: string[];
                    };
                    tiers: {
                        $ref: string;
                    };
                    meta_title: {
                        type: string[];
                        maxLength: number;
                    };
                    meta_description: {
                        type: string[];
                        maxLength: number;
                    };
                    updated_at: {
                        type: string[];
                        format: string;
                    };
                    published_at: {
                        type: string[];
                        format: string;
                    };
                    custom_excerpt: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_head: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_foot: {
                        type: string[];
                        maxLength: number;
                    };
                    og_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    og_title: {
                        type: string[];
                        maxLength: number;
                    };
                    og_description: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    twitter_title: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_description: {
                        type: string[];
                        maxLength: number;
                    };
                    custom_template: {
                        type: string[];
                        maxLength: number;
                    };
                    canonical_url: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    show_title_and_feature_image: {
                        type: string;
                    };
                    authors: {
                        $ref: string;
                    };
                    tags: {
                        $ref: string;
                    };
                };
            };
            "page-products": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "page-authors": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string;
                                maxLength: number;
                            };
                            email: {
                                type: string;
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "page-tags": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
        };
    };
    readonly 'posts-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            posts: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'posts-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            posts: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly posts: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            post: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    title: {
                        type: string;
                        maxLength: number;
                    };
                    slug: {
                        type: string;
                        maxLength: number;
                    };
                    mobiledoc: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    lexical: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    html: {
                        type: string[];
                        maxLength: number;
                    };
                    feature_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    feature_image_alt: {
                        type: string[];
                        maxLength: number;
                    };
                    feature_image_caption: {
                        type: string[];
                        maxLength: number;
                    };
                    featured: {
                        type: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                    locale: {
                        type: string[];
                        maxLength: number;
                    };
                    visibility: {
                        type: string[];
                    };
                    visibility_filter: {
                        type: string[];
                    };
                    tiers: {
                        $ref: string;
                    };
                    meta_title: {
                        type: string[];
                        maxLength: number;
                    };
                    meta_description: {
                        type: string[];
                        maxLength: number;
                    };
                    updated_at: {
                        type: string[];
                        format: string;
                    };
                    published_at: {
                        type: string[];
                        format: string;
                    };
                    custom_excerpt: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_head: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_foot: {
                        type: string[];
                        maxLength: number;
                    };
                    og_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    og_title: {
                        type: string[];
                        maxLength: number;
                    };
                    og_description: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    twitter_title: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_description: {
                        type: string[];
                        maxLength: number;
                    };
                    email_subject: {
                        type: string[];
                        maxLength: number;
                    };
                    custom_template: {
                        type: string[];
                        maxLength: number;
                    };
                    canonical_url: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    email_only: {
                        type: string;
                    };
                    authors: {
                        $ref: string;
                    };
                    tags: {
                        $ref: string;
                    };
                    collections: {
                        $ref: string;
                    };
                };
            };
            "post-products": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "post-authors": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string;
                                maxLength: number;
                            };
                            email: {
                                type: string;
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "post-tags": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                            name: {
                                type: string;
                                maxLength: number;
                            };
                            slug: {
                                type: string[];
                                maxLength: number;
                            };
                        };
                        anyOf: {
                            required: string[];
                        }[];
                    } | {
                        properties?: undefined;
                        anyOf?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
            "post-collections": {
                description: string;
                type: string;
                items: {
                    anyOf: ({
                        maxLength?: undefined;
                        type: string;
                        properties: {
                            id: {
                                type: string;
                                maxLength: number;
                            };
                        };
                        required: string[];
                    } | {
                        properties?: undefined;
                        required?: undefined;
                        type: string;
                        maxLength: number;
                    })[];
                };
            };
        };
    };
    readonly 'products-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            products: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                };
            };
        };
        required: string[];
    };
    readonly 'products-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            products: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                };
            };
        };
        required: string[];
    };
    readonly products: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            product: {
                description: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                    };
                    slug: {
                        type: string[];
                        maxLength: number;
                    };
                    welcome_page_url: {
                        type: string[];
                        maxLength: number;
                    };
                    active: {
                        type: string;
                    };
                    stripe_prices: {
                        type: string[];
                        items: {
                            type: string;
                        };
                    };
                    benefits: {
                        type: string[];
                        items: {
                            type: string;
                        };
                    };
                };
            };
            stripe_price: {
                description: string;
                type: string;
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    stripe_product_id: {
                        type: string[];
                        maxLength: number;
                    };
                    stripe_price_id: {
                        type: string;
                        maxLength: number;
                    };
                    nickname: {
                        type: string;
                        maxLength: number;
                    };
                    currency: {
                        type: string;
                        maxLength: number;
                    };
                    amount: {
                        type: string;
                    };
                    active: {
                        type: string;
                        default: boolean;
                    };
                    type: {
                        type: string;
                        enum: string[];
                    };
                    interval: {
                        type: string[];
                        enum: string[];
                    };
                };
            };
            "product-benefit": {
                description: string;
                type: string;
                properties: {
                    id: {
                        type: string;
                        maxLength: number;
                    };
                    name: {
                        type: string;
                        maxLength: number;
                    };
                    slug: {
                        type: string;
                        maxLength: number;
                    };
                };
                anyOf: {
                    required: string[];
                }[];
            };
        };
    };
    readonly 'snippets-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            snippets: {
                type: string;
                minItems: number;
                maxItems: number;
                additionalProperties: boolean;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'snippets-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            snippets: {
                type: string;
                minItems: number;
                maxItems: number;
                additionalProperties: boolean;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly snippets: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            snippet: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                    };
                    mobiledoc: {
                        type: string;
                        format: string;
                        maxLength: number;
                    };
                    lexical: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                };
            };
        };
    };
    readonly 'tags-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            tags: {
                type: string;
                minItems: number;
                maxItems: number;
                additionalProperties: boolean;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'tags-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            tags: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    $ref: string;
                };
            };
        };
        required: string[];
    };
    readonly tags: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            tag: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        maxLength: number;
                        pattern: string;
                    };
                    slug: {
                        type: string[];
                        maxLength: number;
                    };
                    description: {
                        type: string[];
                        maxLength: number;
                    };
                    feature_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    visibility: {
                        type: string;
                        enum: string[];
                    };
                    meta_title: {
                        type: string[];
                        maxLength: number;
                    };
                    meta_description: {
                        type: string[];
                        maxLength: number;
                    };
                    og_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    og_title: {
                        type: string[];
                        maxLength: number;
                    };
                    og_description: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_image: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    twitter_title: {
                        type: string[];
                        maxLength: number;
                    };
                    twitter_description: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_head: {
                        type: string[];
                        maxLength: number;
                    };
                    codeinjection_foot: {
                        type: string[];
                        maxLength: number;
                    };
                    canonical_url: {
                        type: string[];
                        format: string;
                        maxLength: number;
                    };
                    accent_color: {
                        type: string[];
                        maxLength: number;
                    };
                };
            };
        };
    };
    readonly 'tiers-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            tiers: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                };
            };
        };
        required: string[];
    };
    readonly 'tiers-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            tiers: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                };
            };
        };
        required: string[];
    };
    readonly tiers: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            tier: {
                description: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    name: {
                        type: string;
                        maxLength: number;
                    };
                    description: {
                        type: string[];
                        maxLength: number;
                    };
                    slug: {
                        type: string[];
                        maxLength: number;
                    };
                    welcome_page_url: {
                        type: string[];
                        maxLength: number;
                    };
                    active: {
                        type: string;
                    };
                    visibility: {
                        type: string;
                        enum: string[];
                    };
                    currency: {
                        type: string[];
                    };
                    monthly_price: {
                        type: string[];
                    };
                    yearly_price: {
                        type: string[];
                    };
                    trial_days: {
                        type: string[];
                    };
                    benefits: {
                        type: string[];
                        items: {
                            type: string;
                        };
                    };
                };
            };
        };
    };
    readonly 'webhooks-add': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            webhooks: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    allOf: {
                        $ref: string;
                    }[];
                    required: string[];
                };
            };
        };
        required: string[];
    };
    readonly 'webhooks-edit': {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        additionalProperties: boolean;
        properties: {
            webhooks: {
                type: string;
                minItems: number;
                maxItems: number;
                items: {
                    type: string;
                    additionalProperties: boolean;
                    properties: {
                        event: {
                            type: string;
                            maxLength: number;
                            isLowercase: boolean;
                        };
                        target_url: {
                            type: string;
                            format: string;
                            maxLength: number;
                        };
                        name: {
                            type: string[];
                            maxLength: number;
                        };
                        secret: {
                            type: string[];
                            maxLength: number;
                        };
                        api_version: {
                            type: string[];
                            maxLength: number;
                        };
                    };
                };
            };
        };
        required: string[];
    };
    readonly webhooks: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        definitions: {
            webhook: {
                type: string;
                additionalProperties: boolean;
                properties: {
                    event: {
                        type: string;
                        maxLength: number;
                        isLowercase: boolean;
                    };
                    target_url: {
                        type: string;
                        format: string;
                        maxLength: number;
                    };
                    name: {
                        type: string[];
                        maxLength: number;
                    };
                    secret: {
                        type: string[];
                        maxLength: number;
                    };
                    api_version: {
                        type: string[];
                        maxLength: number;
                    };
                    integration_id: {
                        type: string[];
                        maxLength: number;
                    };
                };
            };
        };
    };
};
export type SchemaName = keyof typeof schemas;
export declare const actionSchemaNames: readonly ["comment_bans-add", "images-upload", "media-upload", "labels-add", "labels-edit", "members-add", "members-edit", "members-upload", "pages-add", "pages-edit", "posts-add", "posts-edit", "products-add", "products-edit", "tiers-add", "tiers-edit", "snippets-add", "snippets-edit", "tags-add", "tags-edit", "webhooks-add", "webhooks-edit"];
//# sourceMappingURL=index.d.ts.map