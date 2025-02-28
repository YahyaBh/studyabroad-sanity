export default {
    name: 'user',
    label: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'string'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'string'
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'string'
        },
        {
            name: 'token',
            label: 'Token',
            type: 'string'
        },
        {
            name: 'verified',
            label: 'Verified',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'image',
            label: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            default: 'https://cdn.sanity.io/images/5hlpazgd/production/5f7a9a5d-6c8b-4b9d-8a8a-5b8b5d8a8a8a-200x200.png?w=200&h=200&fit=crop'
        },
        {
            name: 'country_chosen',
            label: 'Country Chosen',
            type: 'reference',
            to: [{ type: 'country' }]
        },
        {
            name: 'level',
            label: 'Study Level',
            type: 'reference',
            to: [{ type: 'study_level' }]
        },
        {
            name: 'field',
            label: 'Study Field',
            type: 'string'
        },
        {
            name: 'grade',
            label: 'Grade',
            type: 'string'
        },
        {
            name: 'meetingType',
            label: 'Meeting Type',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Online', value: 'Online' },
                    { title: 'Offline', value: 'In Agency' }
                ]
            }
        },
        {
            name: 'meetingDate',
            label: 'Meeting Date',
            type: 'date'
        },
        {
            name: 'meetingTime',
            label: 'Meeting Time',
            type: 'string'
        },
        {
            name: 'meetingUrl',
            label: 'Meeting Link',
            type: 'string',
        },
        {
            name: 'payment_method',
            label: 'Payment Method',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Cash (In Agency)', value: 'cash' },
                    { title: 'Bank Transfer', value: 'bank' },
                    { title: 'Other', value: 'Other' }
                ]
            }
        }
    ]
}