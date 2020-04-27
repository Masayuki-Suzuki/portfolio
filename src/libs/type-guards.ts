/**
 * Inspect an object having properties.
 * @param { Object } x
 * @param { String } property name. can receive multiple argument
 * @return { Boolean } if an object has "name" property, return true.
 * @example
 * // const obj = {name: 'hockey community', id: '1234567890' }
 * // return true
 * hasProperty (obj, 'name', 'id')
 */
export const hasProperty = <K extends string>(x: unknown, ...name: K[]): x is { [M in K]: unknown } => {
    return (
        x instanceof Object && name.every(prop => prop in x)
    )
}

/**
 * Return data is defined or not.
 * @param { Any } data
 * @return { Boolean } if data is defined, return true.
 */
export const isDefined = <T>(data: unknown): data is T => {
    return data !== null && typeof data !== 'undefined'
}

/**
 * Return data is defined or not.
 * @param { Any } data
 * @return { Boolean } if data is defined, return true.
 */
export const isWindow = (elm: unknown): elm is Window => {
    return elm === window && hasProperty(elm, 'pageXOffset')
}
