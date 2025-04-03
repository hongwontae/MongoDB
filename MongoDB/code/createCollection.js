db.createCollection('posts', {
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required : ["title", "desc", "userId", "comment"],
            properties : {
                title : {
                    bsonType : "string",
                    description : "해당 필드는 string 타입입니다."
                },
                desc : {
                    bsonType : "string",
                    description : "해당 필드는 string 타입입니다."
                },
                userId : {
                    bsonType : "objectId",
                    description : "해당 필드는 objectId 타입입니다."
                },
                comment : {
                    bsonType : "array",
                    description : "해당 필드는 array 타입입니다.",
                    items : {
                        bsonType : "object",
                        required : ["userId", "text"],
                        properties : {
                            userId : {
                                bsonType : "objectId",
                                description : "해당 필드는 objectId입니다."
                            },
                            text : {
                                bsonType : "string",
                                description : "해당 필드는 string입니다."
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction : "error",
    validationLevel : "strict"
})