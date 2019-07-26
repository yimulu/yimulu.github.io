define({ "api": [
  {
    "type": "post",
    "url": "/collection",
    "title": "Create Collection",
    "version": "1.0.0",
    "name": "CreateCollection",
    "description": "<p>Create a collection for further face registration.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST /v1/collection\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"tag\": \"TSBG\",\n  \"description\": \"FII\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>The tag you want to associate with the upcoming collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description you want to associate with the upcoming collection.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Int",
            "optional": false,
            "field": "collectionId",
            "description": "<p>The id of created collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n\t \"collectionId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "delete",
    "url": "/collection/{id}",
    "title": "Delete Collection",
    "version": "1.0.0",
    "name": "DeleteCollection",
    "description": "<p>Delete the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/collection/3",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of collection.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection/{id}",
    "title": "Get Collection",
    "version": "1.0.0",
    "name": "GetCollection",
    "description": "<p>Get the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/collection/2",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of collection.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collectionId",
            "description": "<p>The Collection id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The Collection tag infomation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faceCount",
            "description": "<p>The face count in this Collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The Collection description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>The creation time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"collectionId\":1,\n  \"tag\":\"TSBG\",\n  \"faceCount\":283,\n  \"description\":\"XXX處,XXX部,XXX課\",\n  \"time\":\"2019-06-12T07:46:48.000\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection",
    "title": "Get Collection List",
    "version": "1.0.0",
    "name": "GetCollectionList",
    "description": "<p>Get the list of collections.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/collection\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"maxNum\": 10,\n  \"nextToken\": \"aMc9u3LBGvQhT1cnB6Vwok5QMc=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of collection infos. 0 means unlimited, Default is 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token from the previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "collections",
            "description": "<p>The Collection infomation list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collections.collectionId",
            "description": "<p>The Collection id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.tag",
            "description": "<p>The Collection tag infomation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collections.faceCount",
            "description": "<p>The face count in this Collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.description",
            "description": "<p>The Collection description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.time",
            "description": "<p>The creation time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"collections\":[\n    {\"collectionId\":1,\n     \"tag\":\"TSBG\",\n     \"faceCount\":283,\n     \"description\":\"XXX處,XXX部,XXX課\",\n     \"time\":\"2019-06-12T07:46:48.000\"},\n    {\"collectionId\":2,\n     \"tag\":\"CNSBG\",\n     \"faceCount\":267,\n     \"description\":\"YYY處,YYY部,YYY課\",\n     \"time\":\"2019-06-12T07:46:49.000\"}],\n  \"remainings\":30,\n  \"nextToken\":\"MGYZLAHX1T5aYRF8aXcIus987wHrEpQ1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection/range",
    "title": "Get Collection List Rang",
    "version": "1.0.0",
    "name": "GetCollectionListRange",
    "description": "<p>Get the list of collections.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/collection/range\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"startIndex\": 3,\n  \"maxNum\": 10\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "startIndex",
            "description": "<p>The start index of collection infos. Default is 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of collection infos from StartIndex. 0 means unlimited, Default is 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "collections",
            "description": "<p>The responsed collection list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collections.collectionId",
            "description": "<p>The Collection id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.tag",
            "description": "<p>The Collection tag infomation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collections.faceCount",
            "description": "<p>The face count in this Collection.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.description",
            "description": "<p>The Collection description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "collections.time",
            "description": "<p>The creation time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "total",
            "description": "<p>The total number of all collections.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"collections\":[\n    {\"collectionId\":1,\n     \"tag\":\"TSBG\",\n     \"faceCount\":283,\n     \"description\":\"XXX處,XXX部,XXX課\",\n     \"time\":\"2019-06-12T07:46:48.000\"},\n    {\"collectionId\":2,\n     \"tag\":\"CNSBG\",\n     \"faceCount\":267,\n     \"description\":\"YYY處,YYY部,YYY課\",\n     \"time\":\"2019-06-12T07:46:49.000\"}],\n  \"total\":32\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "put",
    "url": "/collection/{id}",
    "title": "Update Collection",
    "version": "1.0.0",
    "name": "UpdateCollection",
    "description": "<p>Update the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "PUT /v1/collection/3\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"tag\": \"CNSBG\",\n  \"description\": \"Foxconn\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>The tag associated with collection you want to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description associated with collection you want to update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/face",
    "title": "Create Face",
    "version": "1.0.0",
    "name": "CreateFace",
    "description": "<p>Create a face into the designated collection.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST /v1/face\nContent-Type: multipart/form-data\n\ncollectionId: 1\ntag: 860001\nimage: face_860001.png (Content-type: image/png)",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "collectionId",
            "description": "<p>The id of collection you want the face to be registered in.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag you want to associate with the face detect in the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "image",
            "description": "<p>An image file.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Int",
            "optional": false,
            "field": "faceId",
            "description": "<p>The id of registered face.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"faceId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "delete",
    "url": "/face/{id}",
    "title": "Delete Face",
    "version": "1.0.0",
    "name": "DeleteFace",
    "description": "<p>Delete an exist face from service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/face/1",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of face.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/face/{id}",
    "title": "Get Face",
    "version": "1.0.0",
    "name": "GetFace",
    "description": "<p>Get info of specific face on service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/2751",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of face.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faceId",
            "description": "<p>The face id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "collectionId",
            "description": "<p>The collection id owns the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The face tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>The registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>The creation time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"faceId\":1,\n    \"collectionId\":1,\n    \"tag\":\"860001\",\n    \"image\":\"https://db.face.com/1.jpg\",\n    \"time\":\"2019-06-13T09:46:49.000\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/face",
    "title": "Get Face List",
    "version": "1.0.0",
    "name": "GetFaceList",
    "description": "<p>Get list of all faces on service.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"collectionIds\": [1,2,3],\n  \"maxNum\": 10\n}",
        "type": "http"
      },
      {
        "title": "Example usage:",
        "content": "GET /v1/face\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"maxNum\": 10,\n  \"nextToken\": \"y6Hlbk95alNnWILHetgOob3eMas=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "collectionIds",
            "description": "<p>The ids of collection you want to fetch faces. Empty means all collections.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token from the previous response. The input may cause collectionIds to be non-functional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "faces",
            "description": "<p>The list of face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faces.faceId",
            "description": "<p>The face id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faces.collectionId",
            "description": "<p>The collection id owns the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.tag",
            "description": "<p>The face tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.image",
            "description": "<p>The registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.time",
            "description": "<p>The creation time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of faces.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"faces\":[\n     {\n         \"faceId\": 1,\n         \"collectionId\": 1,\n         \"tag\": \"860001\",\n         \"image\": \"https://db.face.com/1.jpg\",\n         \"time\":\"2019-06-13T09:46:49.000\"\n     }],\n  \"remainings\":32\n  \"nextToken\":\"MGYZLAHX1T5a\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/face/range",
    "title": "Get Face List Range",
    "version": "1.0.0",
    "name": "GetFaceListEx",
    "description": "<p>Get list of all faces on service.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/range\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"collectionIds\": [1,2,3],\n  \"startIndex\": 0,\n  \"maxNum\": 10\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "collectionIds",
            "description": "<p>The ids of collection you want to fetch faces. Empty means all collections.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "startIndex",
            "description": "<p>The start index of result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "faces",
            "description": "<p>The list of faces.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faces.faceId",
            "description": "<p>The face id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faces.collectionId",
            "description": "<p>The collection id owns the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.tag",
            "description": "<p>The face tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.image",
            "description": "<p>The registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faces.time",
            "description": "<p>The creation time.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "total",
            "description": "<p>The total number of all faces.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"faces\":[\n     {\n         \"faceId\": 1,\n         \"collectionId\": 1,\n         \"tag\": \"860001\",\n         \"image\": \"https://db.face.com/2.jpg\",\n         \"time\":\"2019-06-13T09:46:49.000\"\n     },\n     {\n         \"faceId\": 2,\n         \"collectionId\": 1,\n         \"tag\": \"860002\",\n         \"image\": \"https://db.face.com/2.jpg\",\n         \"time\":\"2019-06-13T10:41:09.000\"\n     }],\n  \"total\":31\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "put",
    "url": "/face/{id}",
    "title": "Update Face",
    "version": "1.0.0",
    "name": "UpdateFace",
    "description": "<p>Update info for an exist user on service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "PUT /v1/face/1\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"collectionId\": 2,\n  \"tag\": \"860002\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of face.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "collectionId",
            "description": "<p>The id of registered collection you want the face to be changed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>The tag you want to update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "delete",
    "url": "/face/recognition",
    "title": "Delete Records",
    "version": "1.0.0",
    "name": "DeleteRecord",
    "description": "<p>Get a list of recognition result about specific user from previously</p>",
    "group": "Recognition",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/face/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"start\": \"1970-01-01T00:00:00.000\",\n  \"end\": \"2019-06-01T00:00:00.000\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "start",
            "description": "<p>The start date time to delete records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "end",
            "description": "<p>The end date time to delete records.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "delete",
    "url": "/face/{id}/recognition",
    "title": "Delete Records of Face",
    "version": "1.0.0",
    "name": "DeleteRecordByFaceId",
    "description": "<p>Get a list of recognition result about specific user from previously</p>",
    "group": "Recognition",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/face/1/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"start\": \"1970-01-01T00:00:00.000\",\n  \"end\": \"2019-06-01T00:00:00.000\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of face. (0 means to delete the fail records)</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "start",
            "description": "<p>The start date time to delete records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "end",
            "description": "<p>The end date time to delete records.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "post",
    "url": "/face/recognition",
    "title": "Recognize by Image",
    "version": "1.0.0",
    "name": "RecognizeImage",
    "description": "<p>Detect each face in the image and then find out the face among the collections.</p>",
    "group": "Recognition",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST /v1/face/recgnition\nContent-Type: multipart/form-data\n\nimage: 201907191032.jpg (Content-type: image/jpg)",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "image",
            "description": "<p>An image file.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "collectionIds",
            "description": "<p>The ids of collections used for face recognition. Empty means all collections.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "faceComparisons",
            "description": "<p>The list of comparison result.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "faceComparisons.faceInfo",
            "description": "<p>The Face area info.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "faceComparisons.faceInfo.boundingBox",
            "description": "<p>Bounding box of face was detect, [x, y, w, h].</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "faceComparisons.faceMatches",
            "description": "<p>The Face matches info.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "faceComparisons.faceMatches.face",
            "description": "<p>The matched face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faceComparisons.faceMatches.face.faceId",
            "description": "<p>The id of the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "faceComparisons.faceMatches.face.collectionId",
            "description": "<p>The collectionId owns the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faceComparisons.faceMatches.face.tag",
            "description": "<p>The face tag information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faceComparisons.faceMatches.face.image",
            "description": "<p>The face image url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "faceComparisons.faceMatches.face.time",
            "description": "<p>The face creation time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"faceComparisons\":[\n    {\n      \"faceInfo\":{\n        \"boundingBox\": [128, 204, 49, 76]\n      },\n      \"faceMatches\":[\n        {\n          \"face\":{\n            \"faceId\": 1,\n            \"collectionId\": 1,\n            \"tag\": \"860001\",\n            \"image\": \"https://db.face.com/8837382.jpg\",\n            \"time\":\"2019-06-13T09:46:49.000\"\n          }\n        }\n      ]\n    },\n    {\n      \"faceInfo\":{\n        \"boundingBox\": [330, 771, 82, 121]\n      },\n      \"faceMatches\":[]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "get",
    "url": "/face/recognition",
    "title": "Get Records",
    "version": "1.0.0",
    "name": "RecognizeRecord",
    "description": "<p>Get a list of recognition result from previously</p>",
    "group": "Recognition",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"start\": \"1970-01-01T00:00:00.000\",\n  \"end\": \"2019-07-19T10:34:00.000\",\n  \"maxNum\": 50\n}",
        "type": "http"
      },
      {
        "title": "Example usage:",
        "content": "GET /v1/face/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"maxNum\": 50,\n  \"nextToken\": \"y6Hlbk95alNnWILHetgOob3eMas=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "start",
            "description": "<p>The Start date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "end",
            "description": "<p>The End date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token from the previous response. The input may cause start/end to be non-functional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.faceId",
            "description": "<p>The id of registered face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.collectionId",
            "description": "<p>The id of collection you want the face to be registered in..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.tag",
            "description": "<p>The id you want to associate with the face detect in the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.image",
            "description": "<p>The url of registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.captureImage",
            "description": "<p>The url of captured image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.source",
            "description": "<p>The input image source description for the further record information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.time",
            "description": "<p>The creation time when the record was generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of records.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"recognitions\":[\n    {\n      \"faceId\":1,\n      \"collectionId\":1,\n      \"tag\": \"860001\",\n      \"image\": \"https://db.face.com/face_1.jpg\",\n      \"captureImage\":\"http://db.face.com/cap_1560471461645.jpg\",\n      \"source\":\"Local Camera\",\n      \"time\":\"2019-06-14T08:17:41.000\"\n    },\n    {\n      \"faceId\":2,\n      \"collectionId\":1,\n      \"tag\": \"860002\",\n      \"image\": \"https://db.face.com/face_2.jpg\",\n      \"captureImage\":\"http://db.face.com/cap_1560471461645_1.jpg\",\n      \"source\":\"Local Camera\",\n      \"time\":\"2019-06-14T08:17:41.000\"\n    },\n    {\n      \"faceId\":0,\n      \"collectionId\":0,\n      \"tag\": \"\",\n      \"image\": \"\",\n      \"captureImage\":\"http://db.face.com/cap_1560471463251.jpg\",\n      \"source\":\"rtsp://10.167.218.72:554/live\",\n      \"time\":\"2019-06-14T08:17:43.000\"\n    },\n  ],\n  \"nextToken\":\"XAFsdgE347kdfryjbcaq133iGhJ9ScF3\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "get",
    "url": "/face/{id}/recognition",
    "title": "Get Records of Face",
    "version": "1.0.0",
    "name": "RecognizeRecordByFaceId",
    "description": "<p>Get a list of recognition result about specific user from previously</p>",
    "group": "Recognition",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/0/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"start\": \"1970-01-01T00:00:00.000\",\n  \"end\": \"2019-07-19T10:34:00.000\",\n  \"maxNum\": 50\n}",
        "type": "http"
      },
      {
        "title": "Example usage:",
        "content": "GET /v1/face/0/recgnition\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"maxNum\": 50,\n  \"nextToken\": \"y6Hlbk95alNnWILHetgOob3eMas=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of face. (0 means to fetch the fail records)</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "start",
            "description": "<p>The start date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "end",
            "description": "<p>The end date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token from the previous response. The input may cause start/end to be non-functional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.faceId",
            "description": "<p>The id of registered face..</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.collectionId",
            "description": "<p>The id of collection you want the face to be registered in..</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.tag",
            "description": "<p>The id you want to associate with the face detect in the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.image",
            "description": "<p>The url of registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.captureImage",
            "description": "<p>The url of captured image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.source",
            "description": "<p>The input image source description for the further record information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.time",
            "description": "<p>The creation time when the record was generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token for the subsequent request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"recognitions\":[\n    {\n      \"faceId\":1\n      \"collectionId\":1\n      \"tag\": \"860001\",\n      \"image\": \"https://db.face.com/face_1.jpg\"\n      \"captureImage\":\"http://db.face.com/cap_1560471461645.jpg\"\n      \"source\":\"Local Camera\"\n      \"time\":\"2019-06-14T08:17:41.000\"\n    },\n    {\n      \"faceId\":1\n      \"collectionId\":1\n      \"tag\": \"860001\",\n      \"image\": \"https://db.face.com/face_1.jpg\"\n      \"captureImage\":\"http://db.face.com/cap_1560471462613.jpg\"\n      \"source\":\"Local Camera\"\n      \"time\":\"2019-06-14T08:17:42.000\"\n    }\n  ],\n  \"nextToken\":\"XAFsdgE347kdfryjbcaq133iGhJ9ScF3\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "post",
    "url": "/face/stream",
    "title": "Create Stream",
    "version": "1.0.0",
    "name": "CreateStream",
    "description": "<p>Register an exist RTSP stream for recognition</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST /v1/face/stream\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"rtspUrl\": \"rtsp://10.167.218.79:554/live\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rtspUrl",
            "description": "<p>The RTSP stream Url for real-time recognition.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": true,
            "field": "collectionIds",
            "description": "<p>The ids of collections used for face recognition. Empty means all collections.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Int",
            "optional": false,
            "field": "streamId",
            "description": "<p>The id of registered stream.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"streamId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "delete",
    "url": "/face/stream/{id}",
    "title": "Delete Stream",
    "version": "1.0.0",
    "name": "DeleteStream",
    "description": "<p>Unregister an RTSP stream from service</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/face/stream/1",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of stream.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/face/stream/{id}/result",
    "title": "Get Results",
    "version": "1.0.0",
    "name": "GetResults",
    "description": "<p>Polling the list of recognition result from stream if no subscription.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/stream/1/result\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"start\": \"2019-07-19T10:00:00.000\",\n  \"maxNum\": 20\n}",
        "type": "http"
      },
      {
        "title": "Example usage:",
        "content": "GET /v1/face/stream/1/result\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"nextIterator\": \"OQc50OIfS528DVUUGs22K6KQWus=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "start",
            "description": "<p>The start date time of results to begin fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextIterator",
            "description": "<p>The retrieval point return by the previous response. The input may cause start to be non-functional.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.faceId",
            "description": "<p>The id of registered face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "recognitions.collectionId",
            "description": "<p>The id of collection you want the face to be registered in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.tag",
            "description": "<p>The id you want to associate with the face detect in the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.image",
            "description": "<p>The url of registered face image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.captureImage",
            "description": "<p>The url of captured image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.source",
            "description": "<p>The input image source description for the further record information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recognitions.time",
            "description": "<p>The creation time when the record was generated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nextIterator",
            "description": "<p>The retrieval point for the next polling.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"recognitions\":[\n    {\n      \"faceId\":1,\n      \"collectionId\":1,\n      \"tag\": \"860001\",\n      \"image\": \"https://db.face.com/face_1.jpg\",\n      \"captureImage\":\"http://db.face.com/cap_1560471461597.jpg\",\n      \"source\":\"rtsp://10.167.218.79:554/live\",\n      \"time\":\"2019-06-14T08:17:41.597\"\n    },\n    {\n      \"faceId\":2,\n      \"collectionId\":1,\n      \"tag\": \"860002\",\n      \"image\": \"https://db.face.com/face_2.jpg\",\n      \"captureImage\":\"http://db.face.com/cap_1560471461645.jpg\",\n      \"source\":\"rtsp://10.167.218.79:554/live\",\n      \"time\":\"2019-06-14T08:17:41.645\"\n    },\n    {\n      \"faceId\":0,\n      \"collectionId\":0,\n      \"tag\": \"\",\n      \"image\": \"\",\n      \"captureImage\":\"http://db.face.com/cap_1560471463251.jpg\",\n      \"source\":\"rtsp://10.167.218.79:554/live\",\n      \"time\":\"2019-06-14T08:17:43.251\"\n    }\n  ],\n  \"nextIterator\":\"xxEREdf5556fdsFDGeQHJUI87hEfGjNV\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/face/stream/{id}",
    "title": "Get Stream",
    "version": "1.0.0",
    "name": "GetStream",
    "description": "<p>Get the registered stream information</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/stream/1",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of stream.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.streamId",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.rtspUrl",
            "description": "<p>The RTSP URL of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.collectionIds",
            "description": "<p>The faces in these collections to be recognized. Empty means all collections.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.time",
            "description": "<p>The creation time of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.postUrls",
            "description": "<p>The POST URLs for runtime recognition callbacks.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"streamId\": 1,\n  \"rtspUrl\": \"rtsp://usbcam_002.com\",\n  \"collectionIds\":[1],\n  \"time\":\"2019-06-24T10:41:09.000\"\n  \"postUrls\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/v1/face/stream/",
    "title": "Get Stream List",
    "version": "1.0.0",
    "name": "GetStreamList",
    "description": "<p>Get a list of registered stream sources on service</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "GET /v1/face/stream/\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"maxNum\": 10,\n  \"nextToken\": \"BOMZgVtRYci6oNP643UwGRXRYWw=\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "maxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token from the previous response.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams",
            "description": "<p>The list of streams.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.streamId",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.rtspUrl",
            "description": "<p>The RTSP URL of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.collectionIds",
            "description": "<p>The faces in these collections to be recognized.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.time",
            "description": "<p>The creation time of stream.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "streams.postUrls",
            "description": "<p>The POST URLs for runtime recognition callbacks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nextToken",
            "description": "<p>Pagination token for the subsequent request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"streams\":\n  [\n    {\n      \"streamId\": 1,\n      \"rtspUrl\": \"rtsp://usbcam_002.com\",\n      \"collectionIds\":[1,2,3],\n      \"time\":\"2019-06-24T10:41:09.000\"\n      \"postUrls\": []\n    },\n    {\n      \"streamId\": 2,\n      \"rtspUrl\": \"rtsp://usbcam_003.com\",\n      \"collectionIds\":[1],\n      \"time\":\"2019-06-24T11:41:09.000\"\n      \"postUrls\": [\"https://10.167.218.76:80/rtsp/result\"]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "post",
    "url": "/face/stream/{id}/subscription",
    "title": "Subscribe Stream",
    "version": "1.0.0",
    "name": "SubStreamResult",
    "description": "<p>Subscribe a stream for result callbacks.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "POST /v1/face/stream/1/subscription\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"postUrl\": \"http://1.2.3.4:6789/post\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postUrl",
            "description": "<p>The url of recognition result to POST.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        },
        {
          "title": "Recognitions Callback:",
          "content": "POST http://1.2.3.4:6789/post\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"recogntions\": \n    [{\n        \"faceId\":1,\n        \"collectionId\":1,\n        \"tag\": \"860001\",\n        \"image\": \"https://db.face.com/face_1.jpg\",\n        \"captureImage\":\"http://db.face.com/cap_1560471461597.jpg\",\n        \"source\":\"rtsp://10.167.218.79:554/live\",\n        \"time\":\"2019-06-14T08:17:41.597\"\n     }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "delete",
    "url": "/face/stream/{id}/subscription",
    "title": "Unsubscribe Stream",
    "version": "1.0.0",
    "name": "UnsubStreamResult",
    "description": "<p>Unsubscribe a stream for result callbacks.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "NONE"
      }
    ],
    "examples": [
      {
        "title": "Example usage:",
        "content": "DELETE /v1/face/stream/1/subscription\nContent-Type: application/json;charset=UTF-8\n\n{\n  \"postUrl\": \"http://1.2.3.4:6789/post\"\n}",
        "type": "http"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postUrl",
            "description": "<p>The url of recognition result to POST.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>If successful, this method returns an empty response body.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK",
          "type": "json"
        }
      ]
    },
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  }
] });
