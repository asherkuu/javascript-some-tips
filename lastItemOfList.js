/**
 * Desc :: 각 타입별 마지막 값 조회
 *
 * Usage :: lastItem(list)
 *
 * Param :: list : array, set, map
 *     배열, 맵, 셋. length 나 size를 가지는 타입
 *
 * Return :: string or {}
 *
 * Extra ::
 */
function lastItem(list) {
    if (Array.isArray(list)) {
        return list.slice(-1)[0];
    }

    if (list instanceof Set) {
        return Array.from(list).slice((-1)[0]);
    }

    if (list instanceof Map) {
        return Array.from(list.values()).slice(-1)[0];
    }

    /* 
      ex
         const arrItems = ["A", "B", "C"];
         >> "C"
         const mapItems = [{ color: 'red', wheels: 4 }, { color: 'yellow', wheels: 2 }]
         >> { color: 'yellow', wheels: 2 }
    */
}
