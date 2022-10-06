export const PostNotesBody = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        category: { type: 'string'},
        content: { type: 'string'},
    },
}

export const ResponseNotesSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        category: { type: 'string'},
        content: { type: 'string'},
    },
}

export const PutNotesBody = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        category: { type: 'string'},
        content: { type: 'string'},
        isActive: { type: 'boolean'},
    },
}    

export const createSchema = (bodySchema:any, responseSchema:any) =>{
    return {
        schema: {
            body: bodySchema,
            response: {
                200: responseSchema,
            }
        }}
}