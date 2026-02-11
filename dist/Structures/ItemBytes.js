class ItemBytes {
    bytesBuffer;
    constructor(data) {
        this.bytesBuffer = Buffer.from(JSON.stringify(data), 'base64');
    }
    base64() {
        return this.bytesBuffer.toString('base64');
    }
}
export default ItemBytes;
//# sourceMappingURL=ItemBytes.js.map