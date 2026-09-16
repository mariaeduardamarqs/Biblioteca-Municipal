# 📚 Sistema de Gestão de Biblioteca

Sistema em Node.js via linha de comando (CLI) para gerenciamento de cadastro de leitores, livros físicos e e-books, além de cálculo automático de multas por atraso de devolução.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (v18+)
* **JavaScript ES6 Modules** (`import` / `export`)
* **Módulo Nativo:** `node:readline/promises`

---

## 🏗️ Estrutura do Projeto

* `index.js` — Ponto de entrada da aplicação, fluxo CLI e interações com o usuário.
* `ItemBase.js` — Classe base abstrata contendo validações e contrato para itens da biblioteca.
* `TiposDeItens.js` — Subclasses `LivroFisico` e `Ebook` com regras específicas de multa e propriedades.
* `Leitor.js` — Classe com validação de idade mínima para cadastro de leitores.

---

## 📌 Funcionalidades e Regras de Negócio

* **Validação de Leitor:** Impedimento de cadastro direto para menores de 12 anos sem autorização prévia.
* **Classe Abstrata (`ItemBase`):** Não é possível instanciar um item genérico diretamente.
* **Validação de Ano:** O ano de publicação do livro deve estar obrigatoriamente entre **1000** e **2026**.
* **Polimorfismo de Multas:**
  * **Livro Físico:** Cobra taxa diária de R$ 2,50 por atraso.
  * **E-book:** Bloqueia o acesso digital do leitor sem aplicação de custo financeiro (R$ 0,00).

---

## 🚀 Como Executar

### Pré-requisitos
* Node.js instalado na versão 18 ou superior.
* `package.json` configurado com `"type": "module"`.

### Passo a Passo

1. Clone ou baixe o repositório.
2. Certifique-se de que o `package.json` possui a flag de módulos ES6:
```json
{
  "type": "module"
}