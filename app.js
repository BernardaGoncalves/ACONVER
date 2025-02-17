var Reader = require("./Reader")
var Writer = require("./Writer")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var PDFwriter = require("./PDFwriter")

var leitor = new Reader()
var escritor = new Writer()

async function main(){
    var dados = await leitor.Read("./users.csv")
    var dadosProcessados =  Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    var html = await  HtmlParser.Parse(usuarios)

    //Gera um ficheiro aleatório
    escritor.Write(Date.now() + ".html", html)
    PDFwriter.Writer(Date.now() + ".PDF", html)
}

main()