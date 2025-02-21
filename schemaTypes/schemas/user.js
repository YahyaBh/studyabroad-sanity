export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'verified',
            type: 'boolean',
            title: 'Verified',
            default: false,
        },
        {
            name: 'token',
            type: 'string',
            title: 'Token'
        },
        {
            name: 'country_chosen',
            type: 'string',
            title: 'Country Chosen',
            of: [{ type: 'reference', to: [{ type: 'countires' }] }],
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone'
        },
        {
            name: 'level',
            type: 'string',
            title: 'Level',
            of: [{ type: 'reference', to: [{ type: 'level' }] }],
        },
        {
            name: 'field',
            type: 'string',
            title: 'Field',
        },
        {
            name: 'grade',
            type: 'string',
            title: 'Grade',
        },
        {
            name: 'meetingLink',
            type: 'url',
            title: 'Meeting Link',
        },
        {
            name: 'meetingDate',
            type: 'datetime',
            title: 'Meeting Date',
        },
        {
            name: 'meetingTime',
            type: 'datetime',
            title: 'Meeting Time',
        },
        {
            name: 'meetingDuration',
            type: 'string',
            title: 'Meeting Duration',
            default: '30 minutes',
        },
        {
            name: 'meetingType',
            type: 'string',
            title: 'Meeting Type',
        },
        {
            name: 'payment_method',
            type: 'string',
            title: 'Payment Method',
            options: {
                list: [
                    { title: 'Credit Card', value: 'credit_card' },
                    { title: 'Bank Transfer', value: 'bank_transfer' },
                    { title: 'Cash', value: 'cash' },
                    { title: 'Other', value: 'other' },
                ],
            }
        }
    ]
}