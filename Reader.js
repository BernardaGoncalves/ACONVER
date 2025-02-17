const fs = require("fs")

class Reader{

    Read(filepath){

        fs.readFile(filepath, "utf-8", (erro, data) => {
            if(erro){
                console.log(erro)
            }else {
                console.log(data)
            }
        })

    }
}

module.exports = Reader