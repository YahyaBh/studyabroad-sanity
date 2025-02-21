export default {
    name: 'countries',
    type: 'document',
    title: 'Countries',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'code',
            type: 'string',
            title: 'Code',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'universities',
            type: 'array',
            title: 'Universities',
            of: [{ type: 'reference', to: [{ type: 'university' }] }],
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
    ]
}