export default {
    name: 'country',
    title: 'Country',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'code',
            title: 'Code',
            type: 'string',
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ]
}