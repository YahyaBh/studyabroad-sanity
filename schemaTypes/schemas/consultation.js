export default {
    name: 'consultation',
    type: 'document',
    title: 'Consultation',
    fields: [
        {
            name: 'countries',
            type: 'array',
            title: 'Countries',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'country',
                            type: 'string',
                            title: 'Country'
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
            name: 'study_level',
            type: 'array',
            title: 'Study Level',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'level',
                            type: 'string',
                            title: 'Level'
                        }
                    ]
                }
            ]
        },
    ]
}