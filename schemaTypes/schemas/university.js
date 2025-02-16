export default {
    name: 'university',
    type: 'document',
    title: 'University Information',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'University Name',
            validation: Rule => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: { max: 96 },
            },
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'image' }],
        },
        {
            name: 'video',
            type: 'url',
            title: 'Video',
        },
        {
            name: 'logo',
            type: 'image',
            title: 'University Logo',
        },
        {
            name: 'website',
            type: 'url',
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country',
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'type',
            type: 'string',
            title: 'Type',
            options: {
                list: [
                    { title: 'Public', value: 'public' },
                    { title: 'Private', value: 'private' },
                ],
            },
        },
        {
            name: 'overview',
            type: 'text',
            title: 'Overview',
        },
        {
            name: 'admission_requirements',
            type: 'array',
            title: 'Admission Requirements',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                        },
                    ],
                },
            ],
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'why_univ',
            type: 'text',
            title: 'Why University'
        },
        {
            name: 'scholarship_link',
            type: 'url',
            title: 'Scholarship Link'
        },
        {
            name: 'top_graduates',
            type: 'array',
            title: 'Top Graduates',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name'
                        },
                        {
                            name: 'description',
                            type: 'string',
                            title: 'Description'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        }
                    ]
                }
            ]
        },
        {
            name: 'rankingLocal',
            type: 'number',
            title: 'Ranking Locally',
        },
        {
            name: 'rankingGlobal',
            type: 'number',
            title: 'Ranking Globally',
        },
        {
            name: 'courses',
            type: 'array',
            title: 'Courses Offered',
            of: [{
                type: 'object', fields: [
                    {
                        name: 'course',
                        type: 'string',
                        title: 'Course',
                    },
                    {
                        name: 'duration',
                        type: 'string',
                        title: 'Duration',
                    },

                ],
            }]
        },
        {
            name: 'tuition_fees',
            type: 'array',
            title: 'Tuition Fees and other expenses',
            description: 'The average tuition fees and other expenses for the university in USD per year.',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'fee_for',
                            type: 'string',
                            title: 'Fee Title',
                        },
                        {
                            name: 'fee',
                            type: 'number',
                            title: 'Fee',
                            validation: Rule => Rule.required().min(0),
                        },
                    ],
                },
            ]
        },
        {
            name: 'acceptance_rate',
            type: 'number',
            title: 'Acceptance Rate',
            description: 'The acceptance rate of the university in percentage.',
            validation: Rule => Rule.required().min(0).max(100),
        },
    ],
}