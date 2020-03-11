var pact = require('@pact-foundation/pact-node');
const path = require('path');

var server = pact.createStub({
    port: 9991,
    pactUrls: [__dirname + '/pacts/user-consumer-user-provider.json']
});

server.start();