export const toNumber = (value: any): number => {
    const num = parseFloat(value);
    if (isNaN(num)) {
        throw new Error(`Invalid number value: ${value}`);
    }
    return num;
};
