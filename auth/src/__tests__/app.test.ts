import app from '../app';
import supertest from 'supertest';
import { Server } from 'http';

let server: Server;
let request;

describe('Test main application', () => {
	beforeAll(() => {
		server = app.listen();
		request = supertest(server);
	});

	afterAll(() => {
		server.close();
	});

	it('Hello world', async () => {
		const response = await request.get('/');

		expect(response.status).toBe(200);
		expect(response.text).toBe('success');
	});
});
