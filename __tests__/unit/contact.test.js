import App from '../../src/app.js';

const { express } = App;

describe('Contact', () => {
  it('should list all contacts', async () => {
    const response = await resquest(express).get('/contacts');

    expect(response.status).toBe(200);
  });
});
