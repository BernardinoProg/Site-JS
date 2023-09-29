function login() {


    var email = document.getElementById("frmemail").value
    var password = document.getElementById("frmpassword").value
    console.log(email)
    console.log(password)

    if (email == "saulo@gmail" && password == "1234") {
        alert("Login realizado com sucesso!")
    }
    else {
        alert("Login inválido")


    }
}

function subtrair() {

    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    //console.log(typeof(n1)) Essa função desenvolve o tipo de var

    console.log(typeof (n1))
    console.log(typeof (n2))
    var resultado = n1 - n2
    console.log(resultado)
    prompt(resultado)
}

function elevar() {
    var n1 = parseInt(prompt("Digite um numero para elevarmos"))
    var resultado = n1 * n1
    console.log(resultado)
    prompt(resultado)
}

function somar() {
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    var resultado = n1 + n2
    console.log(resultado)
    prompt(resultado)
}

function multiplicar() {
    var n1 = parseInt(prompt("Digite um numero"))
    var n2 = parseInt(prompt("Digite outro numero"))
    var resultado = n1 * n2
    console.log(resultado)
    prompt(resultado)
}

function dividir() {
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    var resultado = n1 / n2
    console.log(resultado)
    prompt(resultado)
}

function Raiz() {
    var n1 = parseInt(prompt("digite o número que deseja saber a raiz quadrada: "))
    var resultado = (Math.sqrt(n1))
    console.log(resultado)
    alert(resultado);
}

function addlist() {
    let addlist = document.getElementById("addlist").value
    let li = document.createElement("li")
    li.innerHTML = addlist
    document.getElementById("showlist").appendChild(li)
    console.log(product)
}

function addproduct() {
    const product = {
        name: document.getElementById("addprodname").value,
        marca: document.getElementById("addprodmark").value,
        preco: document.getElementById("addprodprice").value,
    }
    const prod_item = document.createElement("li")
    const prod_nome = document.createElement("h3")
    const prod_marca = document.createElement("h4")
    const prod_preco = document.createElement("p")
    prod_nome.innerHTML = product.name;
    prod_marca.innerHTML = product.marca;
    prod_preco.innerHTML = product.preco;
    prod_item.appendChild(prod_nome);
    prod_item.appendChild(prod_marca);
    prod_item.appendChild(prod_preco);
    document.getElementById("showproduct").appendChild(prod_item)
}
