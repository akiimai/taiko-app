function getCharValidation(item) {
    if (item && !item.touched) {return null}
    if (item && item.value.length === 0) {
        return "invalid"
    } else {
        return "valid"
    }
}

function getNumValidation(item) {
    if (item && !item.touched) {return null}
    function validateNumber() {
        var list = /^[1-9]\d*$/
        return list.test(String(item.value))
    }
    if (!validateNumber(item.value) || item.value.length === 0) {
        return "invalid"
    } else {
        return "valid"
    }
}

export { getCharValidation, getNumValidation }