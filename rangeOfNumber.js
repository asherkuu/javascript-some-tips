/**
 * Desc :: 일정 길이 내 숫자 불러오기
 *
 * Usage :: rangeOfNumber(maxOrStart, end, step);
 *
 * Param :: maxOrStart : 시작 또는 최대값, end? : 최대값, step? : 간격
 *
 * Return :: array ( ex : rangeOfNumber(5, 30, 5) >> [5, 10, 15, 20, 25] )
 *
 * Extra ::
 */
const rangeOfNumber = (maxOrStart, end = null, step = null) => {
    if (!end) {
        return Array.from({ length: maxOrStart }, (_, i) => i);
    }

    if (end <= maxOrStart) {
        return [];
    }

    if (step !== null) {
        return Array.from({ length: Math.ceil((end - maxOrStart) / step) }, (_, i) => i * step + maxOrStart);
    }

    return Array.from({ length: Math.ceil(end - maxOrStart) }, (_, i) => i + maxOrStart);
};
