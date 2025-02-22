export default {
    name: 'user',
    label: 'User',
    type : 'document',
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
            name: 'payment_method',
            label: 'Payment Method',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Credit Card', value: 'Credit Card' },
                    { title: 'Bank Transfer', value: 'Bank Transfer' },
                    { title: 'Other', value: 'Other' }
                ]
            }
        }
    ]
}