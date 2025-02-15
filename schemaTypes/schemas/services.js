export default {
    name: 'services',
    type: 'document',
    title: 'Services',
    fields: [
        {
            name : 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}