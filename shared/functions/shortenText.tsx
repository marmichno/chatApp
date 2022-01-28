export const shortenText = ((length:number, text:string) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
})