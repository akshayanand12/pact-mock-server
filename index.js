var pact = require('@pact-foundation/pact-node');
const path = require('path');

var server = pact.createStub({
    port: 8080,
    host: '0.0.0.0',
    pactUrls: [__dirname + '/pacts/user-consumer-user-provider.json']
});

server.start();
