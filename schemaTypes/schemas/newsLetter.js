export default {
    name: 'newsLetter',
    type: 'document',
    title: 'News Letter',
    fields: [{
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: Rule => Rule.required().email().error('A valid email is required')
    },
    {
        name: 'subscribedAt',
        type: 'datetime',
        title: 'Subscribed At',
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm:ss'
        },
        initialValue: () => new Date().toISOString()
    },
    {
        name: 'isActive',
        type: 'boolean',
        title: 'Is Active',
        initialValue: true
    }
]

}