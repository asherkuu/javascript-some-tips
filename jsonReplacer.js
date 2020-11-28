/**
 * Desc :: 데이터 empty check
 *
 * Usage :: stringify(obj, space)
 *
 * Param :: obj : json type Object, spaces : tap spaces
 *
 * Return :: json Object ( ex : {"name":"Johe Doe","family":[{"name":"foo bar"}],"method":"method() {\n        return 'I am Ignored'\n    }","symb":"Symbol(test)","map":[[1,4],[5,10]]} )
 *
 * Extra :: JSON.stringify는 new Set(), new Map(), function 등의 생성자나 함수등을 제외하고 변환한 반면
 *          해당 함수는 생성자와 함수등을 포함해서 json Object로 변환하여 준다.
 */
const stringify = (() => {
    const replacer = (key, val) => {
        if (typeof val === "symbol") {
            return val.toString();
        }

        if (val instanceof Set) {
            return Array.from(val);
        }

        if (val instanceof Map) {
            return Array.from(val.entries());
        }

        if (typeof val === "function") {
            return val.toString();
        }

        return val;
    };

    return (obj, spaces = 0) => JSON.stringify(obj, replacer, spaces);
})();
