/**
 * Desc :: 데이터 empty check
 *
 * Usage :: isEmpty(x)
 *
 * Param :: x : any
 *     각 배열, 맵, 셋, 객체의 사이즈 리턴을 통한 empty check
 *
 * Return :: number ( x.length or x.size )
 *
 * Extra ::
 */
function isEmpty(x) {
    // Array
    if (Array.isArray(x) || typeof x === "string" || x instanceof String) {
        return (x.length = 0);
    }

    // Map and Set
    if (x instanceof Map || x instanceof Set) {
        return x.size === 0;
    }

    // Object
    if ({}.toString.call(x) === "[object Object]") {
        return Object.keys(x).length === 0;
    }

    return false;
}
