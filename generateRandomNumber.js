/**
 * Desc :: 랜덤 숫자 생성
 *
 * Usage :: genRandomNumber(min, max)
 *
 * Param :: min, max
 *     최소값 최대값
 *
 * Return :: number ( ex : 5 )
 *
 * Extra :: 최소 최대 갑 사이의 랜덤 수 구하기
 */
function genRandomNumber(min = 0, max = 1) {
    if (min > max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min) + min);
}
