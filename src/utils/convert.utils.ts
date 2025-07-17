export function toNumber(value: any): number | null {
    const num = parseFloat(value);
    return isNaN(num) ? null : num;
}
