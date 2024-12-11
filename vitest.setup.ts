import { config } from 'dotenv';
config();
if (1 > (process.env.HYPIXEL_KEY || '').length) throw new Error('No API Key specified!');

export const defaultRequestData = {
  ok: true,
  status: 200,
  json: () => Promise.resolve({ success: true }),
  headers: new Headers(),
  redirected: false,
  statusText: '',
  type: 'basic',
  url: '',
  clone: function (): Response {
    throw new Error('Function not implemented.');
  },
  body: null,
  bodyUsed: false,
  arrayBuffer: function (): Promise<ArrayBuffer> {
    throw new Error('Function not implemented.');
  },
  blob: function (): Promise<Blob> {
    throw new Error('Function not implemented.');
  },
  formData: function (): Promise<FormData> {
    throw new Error('Function not implemented.');
  },
  text: function (): Promise<string> {
    throw new Error('Function not implemented.');
  }
};
