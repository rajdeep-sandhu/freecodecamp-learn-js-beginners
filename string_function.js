// string function for import and export example

export const capitalizeString = str => str.toUpperCase()

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeFirst };

export const foo = "foo";
export const bar = "bar";