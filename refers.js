/**
 * Desc :: Set 타입 ( Set.proptotype Constructor )
 *
 * Usage :: const foo = new Set([iterable]);
 *
 * Param :: iterable
 *     반복 가능한 객체가 전달된 경우, 그 요소는 모두 새로운 Set에 추가됩니다.
 *     만약 매개변수를 명시하지 않거나 null을 전달하면, 새로운 Set은 비어 있는 상태가 됩니다.
 *
 * Return :: new Set Object
 *
 * Extra :: Set 내의 값은 유일해야하기 때문에 값이 같은지 검사를 수핸한다.
 *    또한 기존 +0 === -0 은 true 였지만 Set에서는 +0 === -0 은 false 로 다른 값을 의미한다.
 */
function referSetProto() {
    const set1 = new Set([1, 2, 3, 4, 5]);

    console.log(set1.has(1));
    // >> expected output: true

    console.log(set1.has(5));
    // >> expected output: true

    console.log(set1.has(6));
    // >> expected output: false

    set1.add(6);
    console.log(set1.has(6));
    // >> expected output: true
}

const whatTheFuckIsThis = (() => {
    return () => {};
})();
