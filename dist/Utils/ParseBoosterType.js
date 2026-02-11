export default function ParseBoosterType(data) {
    if (data.stacked === true)
        return 'STACKED';
    if (!data.stacked)
        return 'QUEUED';
    return 'ACTIVE';
}
//# sourceMappingURL=ParseBoosterType.js.map