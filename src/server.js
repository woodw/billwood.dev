import sirv from 'sirv';
import polka from 'polka';
import WebSocket from 'ws';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err)
	});

	

const wss = new WebSocket.Server({ port: 8080 })
	
wss.on('connection', (ws) => {
	ws.on('message', (message) => {
	console.log(`Received message => ${message}`)
	})
	ws.send('ho!')
})
