import 'dotenv/config';

if ((process.env.HYPIXEL_KEY || '').length < 1) throw new Error('No API Key specified!');

export const defaultRequestData = {
  ok: true,
  status: 200,
  json: () => Promise.resolve({ success: true }),
  headers: new Headers(),
  redirected: false,
  statusText: '',
  type: 'basic',
  url: '',
  clone: (): Response => {
    throw new Error('Function not implemented.');
  },
  body: null,
  bodyUsed: false,
  arrayBuffer: (): Promise<ArrayBuffer> => {
    throw new Error('Function not implemented.');
  },
  blob: (): Promise<Blob> => {
    throw new Error('Function not implemented.');
  },
  formData: (): Promise<FormData> => {
    throw new Error('Function not implemented.');
  },
  text: (): Promise<string> => {
    throw new Error('Function not implemented.');
  }
};
