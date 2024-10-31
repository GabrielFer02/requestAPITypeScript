export function countBy(array) {
    return array.reduce((previousValue, item) => {
        if (previousValue[item]) {
            previousValue[item] += 1;
        }
        else {
            previousValue[item] = 1;
        }
        return previousValue;
    }, {});
}
//# sourceMappingURL=countBy.js.map