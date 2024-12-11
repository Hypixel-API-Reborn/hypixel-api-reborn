class ItemBytes {
  bytesBuffer: Buffer;
  constructor(data: Record<string, any>) {
    this.bytesBuffer = Buffer.from(JSON.stringify(data), 'base64');
  }

  base64(): string {
    return this.bytesBuffer.toString('base64');
  }
}

export default ItemBytes;
