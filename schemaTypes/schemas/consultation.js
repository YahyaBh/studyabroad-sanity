export default {
    name: 'consultation',
    type: 'document',
    title: 'Consultation Information',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Your Agency Name'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'countries',
            type: 'array',
            title: 'Countries',
            of: [{ type: 'reference', to: [{ type: 'country' }] }]
        },
        {
            name: 'levels',
            type: 'array',
            title: 'Study Levels',
            of: [{ type: 'reference', to: [{ type: 'study_level' }] }]
        }
    ]
}