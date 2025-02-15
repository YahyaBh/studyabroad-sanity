export default {
    name: 'home',
    type: 'document',
    title: 'Home Information',
    fields: [
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'universities',
            type: 'array',
            title: 'Universities',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'university'
                        }
                    ]
                }
            ]
        },
        {
            name: 'services',
            type: 'array',
            title: 'Services',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'service'
                        }
                    ]
                }
            ]
        },
        {
            name: 'students_guided',
            type: 'number',
            title: 'Students Guided',
            description: 'The number of students guided by the university.'
        },
        {
            name: 'scholarships_awarded',
            type: 'number',
            title: 'Scholarships Awarded',
            description: 'The number of scholarships awarded by the university.'
        },
        {
            name: 'collaborators',
            type: 'array',
            title: 'Collaborators',
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
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        }
                    ]
                }
            ]
        },
        {
            name: 'founders',
            type: 'array',
            title: 'Founders',
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
            name: 'why_us',
            type: 'array',
            title: 'Why Us',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ]
                }
            ]
        },
        {
            name : 'testimonials',
            type: 'array',
            title: 'Testimonials',
            of : [
                {
                    type: 'object',
                    fields : [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Name'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        }
                    ]
                }
            ]
        }
    ]
}