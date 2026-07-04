# 🗂️ Papo Fácil

Um "fichário" de assuntos para ajudar a puxar e manter conversas — pensado para quem sente
dificuldade em interação social e quer ter, na mão, um ponto de partida simples antes de
puxar papo com alguém.

O app sorteia uma carta com um assunto (do dia a dia, cultura pop, viagens, trabalho, etc.)
e mostra, ao mesmo tempo:

- **Perguntas pra você puxar o assunto** — caso você queira começar a conversa.
- **Sugestões de continuação** — caso o assunto tenha sido trazido pela outra pessoa, e você
  não saiba muito bem como manter o papo fluindo.

Não é um roteiro pra decorar. É só um empurrãozinho para reduzir a "mente em branco" na hora
de interagir.

## ✨ Funcionalidades

- Sorteio aleatório sem repetir carta até o baralho (filtrado) se esgotar.
- 40 assuntos distribuídos em 10 categorias (cotidiano, cultura pop, viagens, comida,
  trabalho, hobbies, tecnologia, curiosidades, casa & pets, atualidades leves).
- Filtro por categoria, pra adaptar o sorteio ao contexto (ex.: só "trabalho" e "tecnologia"
  numa reunião; só "cotidiano" e "cultura pop" numa festa).
- Favoritar cartas que funcionaram bem, salvas localmente no navegador.
- Atalho de teclado (barra de espaço) para puxar a próxima carta rapidamente, durante uma
  conversa real.
- 100% estático, sem servidor, sem coleta de dados — tudo roda no navegador.
- Acessível: foco visível, `aria-live` na carta, respeita `prefers-reduced-motion`.

## 🗃️ Estrutura do projeto

```
papo-facil/
├── index.html          # página principal
├── css/
│   └── styles.css      # identidade visual (tema de fichário/carta-catálogo)
├── js/
│   ├── topics.js        # base de dados: categorias e assuntos
│   └── app.js            # lógica: sorteio, filtros, favoritos
├── assets/
│   └── favicon.svg
├── LICENSE
└── README.md
```

## ▶️ Como rodar localmente

Não precisa de instalação nem build. Basta abrir `index.html` no navegador, ou servir a
pasta com qualquer servidor estático:

```bash
# opção 1: abrir direto
open index.html          # macOS
start index.html         # Windows

# opção 2: servidor local simples
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## 🚀 Publicando no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos deste projeto:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do Papo Fácil"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/papo-facil.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde alguns minutos — o app ficará disponível em:
   `https://SEU-USUARIO.github.io/papo-facil/`

## 🛠️ Personalizando

- **Adicionar/editar assuntos:** edite o array `TOPICS` em `js/topics.js`. Cada assunto
  segue o formato:
  ```js
  {
    id: 41,
    category: "hobbies",
    title: "Nome do assunto",
    starters: ["Pergunta 1", "Pergunta 2", "Pergunta 3"],
    followups: ["Pergunta 1", "Pergunta 2", "Pergunta 3"],
  }
  ```
- **Adicionar categoria nova:** inclua uma entrada em `CATEGORIES` (também em
  `js/topics.js`) com `label`, `code` (sigla de 3-4 letras, estilo etiqueta de fichário) e
  `color` (hexadecimal).
- **Cores e tipografia:** tudo centralizado nas variáveis `:root` no topo de
  `css/styles.css`.

## 💾 Privacidade

O app não tem backend nem envia dados para nenhum servidor. A única informação salva é a
lista de cartas favoritadas, guardada no `localStorage` do próprio navegador do usuário.

## 📄 Licença

Distribuído sob a licença MIT — veja o arquivo [LICENSE](LICENSE).
