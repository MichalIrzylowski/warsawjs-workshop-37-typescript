const p1 = (a: Array<number> | null): string[] | string => {

    if (a) return [a.map((num) => `(${num})`).join(' ')];

    return `Object is a ${a}`;
}

console.log(p1([1, 20, 10]));
console.log(p1([1]));
console.log(p1(null));
