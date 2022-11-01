class Example {
    constructor(nums=[]) {
        this._nums = nums;
    }
    set nums(line) {
        this._nums = line
            .trim()
            .split(" ")
            .map(x => Number(x));
    }
    get nums() {
        return this._nums;
    }
    get_sorted() {
        return this._nums.sort((a,b) => a>b? +1: -1);
    }
}

module.exports = {
    Example
}