const NMS = require('node-media-server');

const config = {
    rtmp: {
        chunk_size: process.env.CHUNK_SIZE || 60000,
        port: 1935,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
    http: {
      port: 8000,
      mediaroot: './media',
      webroot: './www',
      allow_origin: '*',
      api: true
    },
    auth: {
        api: true,
        api_user: process.env.USER || "admin",
        api_pass: process.env.PASS || "admin",
    }
}

var nms = new NMS(config);
nms.run();