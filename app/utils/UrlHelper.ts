const findQuery = (u: string, target: string) => {
    const url = new URL(u)
    return url.searchParams.get(target)
}

export {findQuery}