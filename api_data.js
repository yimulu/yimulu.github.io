define({ "api": [
  {
    "type": "post",
    "url": "/collection",
    "title": "Create Collection",
    "name": "CreateCollection",
    "description": "<p>Create a collection for further face registration.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ExternalId",
            "description": "<p>The id you want to associate with the upcoming collection.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Description",
            "description": "<p>The description you want to associate with the upcoming collection.</p>"
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
            "field": "CollectionId",
            "description": "<p>The id of created collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t \"CollectionId\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "delete",
    "url": "/collection/{id}",
    "title": "Delete Collection",
    "name": "DeleteCollection",
    "description": "<p>Delete the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
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
            "field": "Result",
            "description": "<p>Result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection/{id}",
    "title": "Get Collection",
    "name": "GetCollection",
    "description": "<p>Get the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
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
            "type": "json",
            "optional": false,
            "field": "Collection",
            "description": "<p>The Collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"CollectionId\":1,\n  \"ExternalId\":\"TSBG\",\n  \"Description\":\"XXX處,XXX部,XXX課\",\n  \"Time\":\"2019-06-12 07:46:48\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection",
    "title": "Get Collection List",
    "name": "GetCollectionList",
    "description": "<p>Get the list of collections.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
            "description": "<p>The max number of collection infos. 0 means unlimited, Default is 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextToken",
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
            "field": "Collections",
            "description": "<p>The Collection infomation list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "Remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of collection.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Collections\":[\n    {\"CollectionId\":1,\n     \"ExternalId\":\"TSBG\",\n     \"Description\":\"XXX處,XXX部,XXX課\",\n     \"Time\":\"2019-06-12 07:46:48\"},\n    {\"CollectionId\":2,\n     \"ExternalId\":\"CNSBG\",\n     \"Description\":\"YYY處,YYY部,YYY課\",\n     \"Time\":\"2019-06-12 07:46:49\"}],\n  \"Remainings\":30,\n  \"NextToken\":\"MGYZLAHX1T5aYRF8aXcIus987wHrEpQ1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/collection/range",
    "title": "Get Collection List",
    "name": "GetCollectionListRange",
    "description": "<p>Get the list of collections.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "StartIndex",
            "description": "<p>The start index of collection infos. Default is 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
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
            "field": "Collections",
            "description": "<p>The responsed collection list.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "Total",
            "description": "<p>The total number of all collections.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Collections\":[\n    {\"CollectionId\":1,\n     \"ExternalId\":\"TSBG\",\n     \"Description\":\"XXX處,XXX部,XXX課\",\n     \"Time\":\"2019-06-12 07:46:48\"},\n    {\"CollectionId\":2,\n     \"ExternalId\":\"CNSBG\",\n     \"Description\":\"YYY處,YYY部,YYY課\",\n     \"Time\":\"2019-06-12 07:46:49\"}],\n  \"Total\":32\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "put",
    "url": "/collection/{id}",
    "title": "Update Collection",
    "name": "UpdateCollection",
    "description": "<p>Update the specific collection.</p>",
    "group": "Collection",
    "permission": [
      {
        "name": "ADMIN"
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
            "field": "ExternalId",
            "description": "<p>The id associated with collection you want to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Description",
            "description": "<p>The description associated with collection you want to update.</p>"
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
            "field": "Result",
            "description": "<p>Result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/collection.js",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/face/compare",
    "title": "Comapre Face",
    "name": "CompareFace",
    "description": "<p>Compare faces between 2 images.</p>",
    "group": "Comparison",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "ImageSource",
            "description": "<p>The source image file.</p>"
          },
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "ImageTarget",
            "description": "<p>The target image file.</p>"
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
            "field": "FaceInfoComparisons",
            "description": "<p>List of face info comparisons were detected.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"FaceInfoComparisons\":[\n    {\n      \"SourceInfo\": {\n        \"Confidence\": 0.996530,\n        \"BoundingBox\": [128, 204, 49, 76]\n      },\n      \"TargetMatches\": [\n        {\n          \"Confidence\": 0.966301,\n          \"BoundingBox\": [88, 104, 60, 81],\n          \"Similarity\":0.965112\n        }\n      ]\n    },\n    {\n      \"SourceInfo\": {\n        \"Confidence\": 0.996530,\n        \"BoundingBox\": [228, 192, 72, 110]\n      },\n      \"TargetMatches\": []\n    }\n  ],\n  \"TargetMismatches\":[\n    {\n        \"Confidence\": 0.9165021,\n        \"BoundingBox\": [152, 100, 65, 83]\n    },\n    {\n        \"Confidence\": 0.958837,\n        \"BoundingBox\": [302, 152, 70, 108]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/comparison.js",
    "groupTitle": "Comparison"
  },
  {
    "type": "post",
    "url": "/face/detect",
    "title": "Detect Face",
    "name": "DetectFace",
    "description": "<p>Detect does any face on the image</p>",
    "group": "Detection",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "Image",
            "description": "<p>An image file.</p>"
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
            "field": "FaceInfos",
            "description": "<p>List of face infos was detected.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "Confidence",
            "description": "<p>Confidence of face was detected [0..1.0].</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "BoundingBox",
            "description": "<p>Bounding box of face was detected, [x, y, w, h].</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"FaceInfos\"[\n    {\n     \"Confidence\": 0.996530,\n     \"BoundingBox\": [128, 204, 49, 76]\n    },\n    {\n     \"Confidence\": 0.876612,\n     \"BoundingBox\": [330, 771, 82, 121]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/detection.js",
    "groupTitle": "Detection"
  },
  {
    "type": "post",
    "url": "/face/",
    "title": "Create Face",
    "name": "CreateFace",
    "description": "<p>Create a face into the designated collection.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "CollectionId",
            "description": "<p>The id of collection you want the face to be registered in.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExternalId",
            "description": "<p>The id you want to associate with the face detect in the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "Image",
            "description": "<p>An image file.</p>"
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
            "field": "FaceId",
            "description": "<p>The id of registered face.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"FaceId\":1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "delete",
    "url": "/face/{id}",
    "title": "Delete Face",
    "name": "DeleteFace",
    "description": "<p>Delete an exist face from service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
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
            "field": "result",
            "description": "<p>Result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/face/{id}",
    "title": "Get Face",
    "name": "GetFace",
    "description": "<p>Get info of specific face on service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
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
            "type": "json",
            "optional": false,
            "field": "Face",
            "description": "<p>The info of face.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"FaceId\":1,\n    \"CollectionId\":1,\n    \"ExternalId\":\"860001\",\n    \"Image\":\"https://db.face.com/8837382.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/faces",
    "title": "Get Face List",
    "name": "GetFaceList",
    "description": "<p>Get list of all faces on service.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "CollectionIds",
            "description": "<p>The ids of collection you want to fetch faces.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextToken",
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
            "type": "json",
            "optional": false,
            "field": "Faces",
            "description": "<p>The list of face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "Remainings",
            "description": "<p>The number of remainings are not listed in this response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of faces.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Faces\":[\n     {\n         \"FaceId\": 1,\n         \"CollectionId\": 1,\n         \"ExternalId\": \"860001\",\n         \"Image\": \"https://db.face.com/8837382.jpg\"\n     }],\n  \"Remainings\":32\n  \"NextToken\":\"MGYZLAHX1T5a\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "get",
    "url": "/face/range",
    "title": "Get Face List",
    "name": "GetFaceListEx",
    "description": "<p>Get list of all faces on service.</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "CollectionIds",
            "description": "<p>The ids of collection you want to fetch faces.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "StartIndex",
            "description": "<p>The start index of result.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
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
            "field": "Faces",
            "description": "<p>The list of faces.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "Total",
            "description": "<p>The total number of all faces.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Faces\":[\n     {\n         \"FaceId\": 1,\n         \"CollectionId\": 1,\n         \"ExternalId\": \"860001\",\n         \"Image\": \"https://db.face.com/8837382.jpg\"\n     },\n     {\n         \"FaceId\": 2,\n         \"CollectionId\": 1,\n         \"ExternalId\": \"860002\",\n         \"Image\": \"https://db.face.com/83650263.jpg\"\n     }],\n  \"Total\":31\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "put",
    "url": "/face/{id}",
    "title": "Update Face",
    "name": "UpdateFace",
    "description": "<p>Update info for an exist user on service</p>",
    "group": "Face",
    "permission": [
      {
        "name": "ADMIN"
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
            "field": "CollectionId",
            "description": "<p>The id of registered collection you want the face to be changed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ExternalId",
            "description": "<p>The external ID you want to update.</p>"
          },
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": true,
            "field": "Image",
            "description": "<p>The image file you want to update.</p>"
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
            "field": "result",
            "description": "<p>result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/face.js",
    "groupTitle": "Face"
  },
  {
    "type": "post",
    "url": "/face/recognition",
    "title": "Recognize by Image",
    "name": "RecognizeImage",
    "description": "<p>Detect each face in the image and then find out the face among the collections.</p>",
    "group": "Recognition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multipart/Image",
            "optional": false,
            "field": "Image",
            "description": "<p>An image file.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "CollectionIds",
            "description": "<p>The ids of collections used for face recognition.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Source",
            "description": "<p>The input image source description for the further record information.</p>"
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
            "field": "FaceComparisons",
            "description": "<p>The list of comparison result.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Score",
            "description": "<p>confidence of face was detect.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "BoundingBox",
            "description": "<p>Bounding box of face was detect, [x, y, w, h].</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "FaceId",
            "description": "<p>The id of the face.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "CollectionId",
            "description": "<p>The id of collection includes the face.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"FaceComparisons\":[\n    {\n      \"FaceInfo\":{\n        \"Confidence\": 0.996530,\n        \"BoundingBox\": [128, 204, 49, 76]\n      },\n      \"FaceMatches\":[\n        {\n          \"Face\":{\n            \"FaceId\": 1,\n            \"CollectionId\": 1,\n            \"ExternalId\": \"860001\",\n            \"Image\": \"https://db.face.com/8837382.jpg\"\n          },\n          \"Similarity\":0.965112\n        }\n      ]\n    },\n    {\n      \"FaceInfo\":{\n        \"Confidence\": 0.876612,\n        \"BoundingBox\": [330, 771, 82, 121]\n      },\n      \"FaceMatches\":[]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "get",
    "url": "/face/recognition",
    "title": "Get Record",
    "name": "RecognizeRecord",
    "description": "<p>Get a list of recognition result from previously</p>",
    "group": "Recognition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "Start",
            "description": "<p>The Start date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "End",
            "description": "<p>The End date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextToken",
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
            "field": "Recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextToken",
            "description": "<p>Pagination token for the subsequent request to fetch the next set of records.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Recognitions\":[\n    {\n      \"FaceId\":1\n      \"CollectionId\":1\n      \"ExternalId\": \"860001\",\n      \"Image\": \"https://db.face.com/face_1.jpg\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471461645.jpg\"\n      \"Source\":\"#12323#E5 South 2nd Gate\"\n      \"Time\":\"2019-06-14 08:17:41\"\n    },\n    {\n      \"FaceId\":2\n      \"CollectionId\":1\n      \"ExternalId\": \"860002\",\n      \"Image\": \"https://db.face.com/face_2.jpg\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471461645_1.jpg\"\n      \"Source\":\"#12323#E5 South 2nd Gate\"\n      \"Time\":\"2019-06-14 08:17:41\"\n    },\n    {\n      \"FaceId\":-1\n      \"CollectionId\":-1\n      \"ExternalId\": \"\",\n      \"Image\": \"\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471463251.jpg\"\n      \"Source\":\"#12322#E5 South 1st Gate\"\n      \"Time\":\"2019-06-14 08:17:43\"\n    },\n  ],\n  \"NextToken\":\"XAFsdgE347kdfryjbcaq133iGhJ9ScF3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "get",
    "url": "/face/recognition/{FaceId}",
    "title": "Get Record of Face",
    "name": "RecognizeRecordByFaceId",
    "description": "<p>Get a list of recognition result about specific user from previously</p>",
    "group": "Recognition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "FaceId",
            "description": "<p>The id of face. (-1 means to fetch the fail records)</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "Start",
            "description": "<p>The Start date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": true,
            "field": "End",
            "description": "<p>The End date time to fetch records.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextToken",
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
            "field": "Recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextToken",
            "description": "<p>Pagination token for the subsequent request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Recognitions\":[\n    {\n      \"FaceId\":1\n      \"CollectionId\":1\n      \"ExternalId\": \"860001\",\n      \"Image\": \"https://db.face.com/face_1.jpg\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471461645.jpg\"\n      \"Source\":\"#12323#E5 South 2nd Gate\"\n      \"Time\":\"2019-06-14 08:17:41\"\n    },\n    {\n      \"FaceId\":1\n      \"CollectionId\":1\n      \"ExternalId\": \"860001\",\n      \"Image\": \"https://db.face.com/face_1.jpg\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471462613.jpg\"\n      \"Source\":\"#12323#E5 South 2nd Gate\"\n      \"Time\":\"2019-06-14 08:17:42\"\n    }\n  ],\n  \"NextToken\":\"XAFsdgE347kdfryjbcaq133iGhJ9ScF3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/recognition.js",
    "groupTitle": "Recognition"
  },
  {
    "type": "post",
    "url": "/face/stream",
    "title": "Create Stream",
    "name": "CreateStream",
    "description": "<p>Register an exist RTSP stream for recognition</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RtspUrl",
            "description": "<p>The RTSP stream Url for real-time recognition.</p>"
          },
          {
            "group": "Parameter",
            "type": "Int[]",
            "optional": false,
            "field": "CollectionIds",
            "description": "<p>The ids of collections used for face recognition.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "Source",
            "description": "<p>The input stream source description for the further record information. The default value will be RtspUrl.</p>"
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
            "field": "StreamId",
            "description": "<p>The id of registered stream.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"StreamId\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "delete",
    "url": "/face/stream/{id}",
    "title": "Delete Stream",
    "name": "DeleteStream",
    "description": "<p>Unregister an RTSP stream from service</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
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
            "type": "Int",
            "optional": false,
            "field": "result",
            "description": "<p>result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/face/stream/result/{StreamId}",
    "title": "Get Result",
    "name": "GetResults",
    "description": "<p>Polling the list of recognition result from stream if no subscription.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "StreamId",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextIterator",
            "description": "<p>The retrieval point return by the previous response.</p>"
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
            "field": "Recognitions",
            "description": "<p>The list of recognition records.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextIterator",
            "description": "<p>The retrieval point for the next polling.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Recognitions\":[\n    {\n      \"FaceId\":1\n      \"CollectionId\":1\n      \"ExternalId\": \"860001\",\n      \"Image\": \"https://db.face.com/face_1.jpg\",\n      \"CaptureImage\":\"http://db.face.com/cap_1560471461597.jpg\"\n      \"Source\":\"rtsp://10.167.218.79:554/live\"\n      \"Time\":\"2019-06-14 08:17:41.597\"\n    },\n    {\n      \"FaceId\":2\n      \"CollectionId\":1\n      \"ExternalId\": \"860002\",\n      \"Image\": \"https://db.face.com/face_2.jpg\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471461645.jpg\"\n      \"Source\":\"rtsp://10.167.218.79:554/live\"\n      \"Time\":\"2019-06-14 08:17:41.645\"\n    },\n    {\n      \"FaceId\":-1\n      \"CollectionId\":-1\n      \"ExternalId\": \"\",\n      \"Image\": \"\"\n      \"CaptureImage\":\"http://db.face.com/cap_1560471463251.jpg\"\n      \"Source\":\"rtsp://10.167.218.79:554/live\"\n      \"Time\":\"2019-06-14 08:17:43.251\"\n    }\n  ],\n  \"NextIterator\":\"xxEREdf5556fdsFDGeQHJUI87hEfGjNV\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/face/stream/{id}",
    "title": "Get Stream",
    "name": "GetStream",
    "description": "<p>Get the registered stream information</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Stream",
            "description": "<p>The stream info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"StreamId\": 1,\n  \"RtspUrl\": \"rtsp://usbcam_002.com\",\n  \"CollectionIds\":[1],\n  \"Sourece\": \"#12345#LH-C1-2F\",\n  \"PostUrls\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "get",
    "url": "/face/stream/",
    "title": "Get Stream List",
    "name": "GetStreamList",
    "description": "<p>Get a list of registered stream sources on service</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "MaxNum",
            "description": "<p>The max number of results to fetch.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "NextToken",
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
            "field": "Streams",
            "description": "<p>The list of streams.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "NextToken",
            "description": "<p>Pagination token for the subsequent request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Streams\":\n  [\n    {\n      \"StreamId\": 1,\n      \"RtspUrl\": \"rtsp://usbcam_002.com\",\n      \"CollectionIds\":[1,2,3],\n      \"Source\": \"#12345#LH-C1-2F\",\n      \"PostUrls\": []\n    },\n    {\n      \"StreamId\": 2,\n      \"RtspUrl\": \"rtsp://usbcam_003.com\",\n      \"CollectionIds\":[1],\n      \"Source\": \"#12346#LH-C1-3F\",\n      \"PostUrls\": [\"https://10.167.218.76:80/rtsp/result\"]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "post",
    "url": "/face/stream/subscription",
    "title": "Subscribe Stream",
    "name": "SubStreamResult",
    "description": "<p>Subscribe a stream for result callbacks.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "StreamId",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PostUrl",
            "description": "<p>The url of recognition result to POST.</p>"
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
            "field": "result",
            "description": "<p>result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  },
  {
    "type": "delete",
    "url": "/face/stream/subscription",
    "title": "Unsubscribe Stream",
    "name": "UnsubStreamResult",
    "description": "<p>Unsubscribe a stream for result callbacks.</p>",
    "group": "Stream",
    "permission": [
      {
        "name": "ADMIN"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "StreamId",
            "description": "<p>The id of stream.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PostUrl",
            "description": "<p>The url of recognition result to POST.</p>"
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
            "field": "result",
            "description": "<p>result code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "faceapidoc/stream.js",
    "groupTitle": "Stream"
  }
] });
