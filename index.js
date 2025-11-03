import express from "express";
const host = "localhost";
const porta = 3000;
const app = express();

var listaProdutos = [];

app.listen(porta, host, () => {
    console.log(`Aplicação rodando em http://${host}:${porta}`)
});

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Atividade 02</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MENU</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cadastro</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/cdstrProduto">Cadastrar produto</a></li>
                        <li><a class="dropdown-item" href="/chcrProduto">Checar produtos</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `);
});

app.get("/cdstrProduto", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Atividade 02</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MENU</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cadastro</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/cdstrProduto">Cadastrar produto</a></li>
                        <li><a class="dropdown-item" href="/chcrProduto">Checar produtos</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <h1 class="text-center border m-3 p-3 bg-light">Cadastro de Produtos</h1>
            <form method="POST" action="/dncrProduto" class="row g-3 needs-validation m-3 p-3 bg-light" novalidate>
                <div class="col-md-4">
                    <label for="produto" class="form-label">Nome do produto</label>
                    <input type="text" class="form-control" id="produto" name="produto">
                </div>
                <div class="col-md-4">
                    <label for="descricao" class="form-label">Descrição do produto</label>
                    <input type="text" class="form-control" id="descricao" name="descricao">
                </div>
                <div class="col-md-4">
                    <label for="preco" class="form-label">Preço do produto</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">R$</span>
                    <input type="number" class="form-control" id="preco" name="preco" aria-describedby="inputGroupPrepend">
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="codigo" class="form-label">Código do produto</label>
                    <input type="number" class="form-control" id="codigo" name="codigo">
                </div>
                <div class="col-md-3">
                    <label for="categoria" class="form-label">Categoria do produto</label>
                    <select class="form-select" id="categoria" name="categoria">
                    <option selected disabled value="">Escolha</option>
                    <option>Medicamentos</option>
                    <option>Higiene Pessoal e Beleza</option>
                    <option>Dermocosméticos</option>
                    <option>Cuidados Infantis</option>
                    <option>Suplementos e Nutrição</option>
                    <option>Primeiros Socorros e Ortopedia</option>
                    <option>Higiene Bucal</option>
                    <option>Perfumaria</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="fornecedor" class="form-label">Fornecedor do produto</label>
                    <input type="text" class="form-control" id="fornecedor" name="fornecedor">
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </html>
    `);
});

app.post("/dcnrProduto", (req, res) => {
    const produto = req.body.produto;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const codigo = req.body.codigo;
    const categoria = req.body.categoria;
    const fornecedor = req.body.fornecedor;
    listaProdutos.push({produto, descricao, preco, codigo, categoria, fornecedor});
    res.redirect("/chcrProduto");
});

app.get("/chcrProduto", (req, res) => {
    let conteudo = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Atividade 02</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">MENU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cadastro</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/cdstrProduto">Cadastrar produto</a></li>
                    <li><a class="dropdown-item" href="/chcrProduto">Checar produtos</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <h1 class="text-center border m-3 p-3 bg-light">Lista de produtos</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Produto</th>
                <th scope="col">Descrição</th>
                <th scope="col">Preço</th>
                <th scope="col">Código</th>
                <th scope="col">Categoria</th>
                <th scope="col">Fornecedor</th>
                </tr>
            </thead>
            <tbody>`
        for(let i = 0; i < listaProdutos.length; i++){
            conteudo += `
                <tr>
                    <td>${listaProdutos[i].produto}</td>
                    <td>${listaProdutos[i].descricao}</td>
                    <td>${listaProdutos[i].preco}</td>
                    <td>${listaProdutos[i].codigo}</td>
                    <td>${listaProdutos[i].categoria}</td>
                    <td>${listaProdutos[i].fornecedor}</td>
                </tr>
            `;
        }
        conteudo += `
            </tbody>
            </table>
            </div>
            </body>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </html>
        `;

    res.send(conteudo);
});