define({
  "name": "Face Service",
  "version": "1.0.0",
  "description": "Face service api documentation",
  "title": "Face Service",
  "url": "http://103.252.196.197:31001/v1",
  "header": {
    "title": "Overview",
    "content": "<h2>Overview</h2>\n<p>Face Service is designed for face recognition use cases.</p>\n<h2>Function Requirements</h2>\n<p>To support face recognition user cases, the Face Service needs to support the following features:</p>\n<ul>\n<li>A user can input a image for face detection.</li>\n<li>A user can register a face image for further recognition.</li>\n<li>A user can input a image for face recognition.</li>\n<li>A user can connect a RTSP stream for recognition all the time.</li>\n</ul>\n<h2>Changelog</h2>\n<ul>\n<li>\n<p>Jun 24, 2019</p>\n<ul>\n<li>Refactor the Face Service API -0.1.0- by Jarret.YM.Lu</li>\n</ul>\n</li>\n<li>\n<p>Jun 13, 2019</p>\n<ul>\n<li>Initialize the Face Service API -0.0.0- by Alvin.CY.Shih</li>\n</ul>\n</li>\n</ul>\n<h2>High Level Design</h2>\n<h3>Collection</h3>\n<h4>Create Collection</h4>\n<p>在新增人脸之前，必须先有Collection，因此若没有Collection时必须先建立一个以供使用，相当一个人脸库，可根据需要创建tag与description，用于关联外部资料或辅助描述该库。</p>\n<p><img src=\"img/CreateCollection.png\" alt=\"\"></p>\n<h4>Delete Collection</h4>\n<p>当一个Collection不再需要时，可以进行删除，惟注册于该Collection之人脸资料，也将一并删除。</p>\n<h3>Face</h3>\n<h4>Create Face</h4>\n<p>新增一张人脸影像到Collection，并根据需要创建tag，用于关联外部人员资料库。\n<img src=\"img/CreateFace.png\" alt=\"\"></p>\n<h4>Get Face</h4>\n<pre><code>{\n     &quot;faceId&quot;: 2,\n     &quot;collectionId&quot;: 1,\n     &quot;tag&quot;: &quot;860002&quot;,\n     &quot;image&quot;: &quot;https://db.face.com/2.jpg&quot;,\n     &quot;time&quot;:&quot;2019-06-13 10:41:09&quot;\n}\n</code></pre>\n<p>faceId为Face Service中unique identifier。</p>\n<h3>Recognition</h3>\n<h4>Recognize by Image</h4>\n<p><img src=\"img/Recognize.png\" alt=\"\"></p>\n<p>用户可输入一张包含一个或多个人脸的照片，用以比对出相关Collections中的人脸资料，辨认的结果输出为一faceComparisons阵列，数量为输入照片侦测的人脸数，每个元素包含FaceInfo与faceMatches。\nfaceInfo: 输入照片中该人脸的资讯\nfaceMatches: 从Collections中比对到的人脸资料，若没比对到则为空。</p>\n<pre><code>{\n  &quot;faceComparisons&quot;:[\n    {\n      &quot;faceInfo&quot;:{\n        &quot;confidence&quot;: 0.996530,\n        &quot;boundingBox&quot;: [128, 204, 49, 76]\n      },\n      &quot;faceMatches&quot;:[\n        {\n          &quot;face&quot;:{\n            &quot;faceId&quot;: 1,\n            &quot;collectionId&quot;: 1,\n            &quot;tag&quot;: &quot;860001&quot;,\n            &quot;image&quot;: &quot;https://db.face.com/8837382.jpg&quot;\n          },\n          &quot;similarity&quot;:0.965112\n        }\n      ]\n    },\n    {\n      &quot;faceInfo&quot;:{\n        &quot;confidence&quot;: 0.876612,\n        &quot;boundingBox&quot;: [330, 771, 82, 121]\n      },\n      &quot;faceMatches&quot;:[]\n    }\n  ]\n}\n</code></pre>\n<h3>Stream</h3>\n<h4>Create Stream</h4>\n<p>用户可将一监视摄影机之RTSP Stream，导入此Face Service用以时时比对人脸库</p>\n<h4>Get Results</h4>\n<p><img src=\"img/StreamPolling.png\" alt=\"Stream Polling\"></p>\n<p>用户可以间隔一段时间Polling某一个活动中Stream的辨认结果，由于辨认结果会随着时间而增加，用户可以藉由输入NextIterator避免polling重复的辨认信息。</p>\n<pre><code>{\n  &quot;recognitions&quot;:[\n    {\n      &quot;faceId&quot;:1\n      &quot;collectionId&quot;:1\n      &quot;tag&quot;: &quot;860001&quot;,\n      &quot;image&quot;: &quot;https://db.face.com/face_1.jpg&quot;,\n      &quot;captureImage&quot;:&quot;http://db.face.com/cap_1560471461597.jpg&quot;\n      &quot;source&quot;:&quot;rtsp://10.167.218.79:554/live&quot;\n      &quot;time&quot;:&quot;2019-06-14 08:17:41.597&quot;\n    },\n    {\n      &quot;faceId&quot;:2\n      &quot;collectionId&quot;:1\n      &quot;tag&quot;: &quot;860002&quot;,\n      &quot;image&quot;: &quot;https://db.face.com/face_2.jpg&quot;\n      &quot;captureImage&quot;:&quot;http://db.face.com/cap_1560471461645.jpg&quot;\n      &quot;source&quot;:&quot;rtsp://10.167.218.79:554/live&quot;\n      &quot;time&quot;:&quot;2019-06-14 08:17:41.645&quot;\n    },\n    {\n      &quot;faceId&quot;:0\n      &quot;collectionId&quot;:0\n      &quot;tag&quot;: &quot;&quot;,\n      &quot;image&quot;: &quot;&quot;\n      &quot;captureImage&quot;:&quot;http://db.face.com/cap_1560471463251.jpg&quot;\n      &quot;source&quot;:&quot;rtsp://10.167.218.79:554/live&quot;\n      &quot;time&quot;:&quot;2019-06-14 08:17:43.251&quot;\n    }\n  ],\n  &quot;nextIterator&quot;:&quot;xxEREdf5556fdsFDGeQHJUI87hEfGjNV&quot;\n}\n</code></pre>\n<h4>Subscribe Stream</h4>\n<p><img src=\"img/StreamSubscription.png\" alt=\"\"></p>\n<p>用户可以订阅Stream，订阅后，该Stream会将辨认结果透过订阅之PostUrl callback.</p>\n<pre><code>[\n    {\n      &quot;faceId&quot;:1\n      &quot;collectionId&quot;:1\n      &quot;tag&quot;: &quot;860001&quot;,\n      &quot;image&quot;: &quot;https://db.face.com/face_1.jpg&quot;,\n      &quot;captureImage&quot;:&quot;http://db.face.com/cap_1560471461597.jpg&quot;\n      &quot;source&quot;:&quot;rtsp://10.167.218.79:554/live&quot;\n      &quot;time&quot;:&quot;2019-06-14 08:17:41.597&quot;\n    },\n    {\n      &quot;faceId&quot;:2\n      &quot;collectionId&quot;:1\n      &quot;tag&quot;: &quot;860002&quot;,\n      &quot;image&quot;: &quot;https://db.face.com/face_2.jpg&quot;\n      &quot;captureImage&quot;:&quot;http://db.face.com/cap_1560471461645.jpg&quot;\n      &quot;source&quot;:&quot;rtsp://10.167.218.79:554/live&quot;\n      &quot;time&quot;:&quot;2019-06-14 08:17:41.645&quot;\n    }\n]\n</code></pre>\n"
  },
  "order": [
    "Collection",
    "Face",
    "Recognition",
    "Stream",
    "RecognizeImage",
    "RecognizeRecord",
    "RecognizeRecordByFaceId",
    "DeleteRecord",
    "DeleteRecordByFaceId",
    "CreateStream",
    "DeleteStream",
    "SubStreamResult",
    "UnsubStreamResult",
    "GetResults",
    "GetStreamList",
    "GetStream"
  ],
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-07-26T01:09:09.462Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
