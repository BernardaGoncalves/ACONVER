class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }
}

module.exports = Table