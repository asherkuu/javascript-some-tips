/**
 * Desc :: 랜덤 guid 생성
 *
 * Usage :: genGuid()
 *
 * Param ::
 *
 * Return :: string ( ex : "c2181edf-041b-0a61-3651-79d671fa3db7" )
 *
 * Extra ::
 */
const genGuid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
};

/**
 * Desc :: 단순 고유 랜덤 아이디 생성하기
 *
 * Usage :: genUniqueId()
 *
 * Param ::
 *
 * Return :: string ( ex : "_bkim1bme3" )
 *
 * Extra ::
 */
const genUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
};

/**
 * Desc :: 특수기호가 포함되지 않은 랜덤 비밀번호 생성하기
 *
 * Usage :: genPassword(length)
 *
 * Param :: length
 *     랜덤비밀번호 글자수
 *
 * Return :: string ( ex : "Zj2aTgmC" )
 *
 * Extra ::
 */
const genPassword = (len) => {
    var length = len ? len : 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    return password;
};

/**
 * Desc :: 특수기호가 포함된 랜덤 비밀번호 생성하기
 *
 * Usage :: genPasswordSymbol(length)
 *
 * Param :: length
 *     랜덤비밀번호 글자수
 *
 * Return :: string ( ex : "J83}c|`bI62>" )
 *
 * Extra ::
 */
const genPasswordSymbol = (len) => {
    var length = len ? len : 10;
    var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
    var numeric = "0123456789";
    var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    var character = "";
    var crunch = true;

    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }

    password = password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");

    return password.substr(0, len);
};
