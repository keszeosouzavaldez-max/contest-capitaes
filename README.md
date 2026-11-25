# Contest dos Capitães — web app (GitHub Pages)

Pasta pronta para subir no GitHub e usar no celular como app.

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | O contest (versão offline/JSONP), ajustado para celular + PWA |
| `manifest.json` | Faz o celular instalar como app (ícone, tela cheia, tema escuro) |
| `sw.js` | Service worker: abre mesmo sem internet (última tela + dados salvos no aparelho) |
| `favicon.svg` | Ícone da aba do navegador — radar da Guerra Fria |
| `icon-192.png`, `icon-512.png` | Ícones do app — radar da Guerra Fria (Android/Chrome) |
| `icon-maskable-512.png` | Ícone adaptável — radar (Android) |
| `apple-touch-icon.png` | Ícone para iPhone/iPad |
| `og-image.jpg` | Card de compartilhamento — prévia do link no WhatsApp/Telegram (fotos dos dois capitães) |

## Publicar no GitHub
1. Crie um repositório (ex.: `contest-dos-capitaes`).
2. Suba **todos os arquivos desta pasta na raiz do repo** (o `index.html` precisa ficar na raiz).
3. Settings → Pages → Source: *Deploy from a branch* → branch `main`, pasta `/ (root)` → Save.
4. A URL fica: `https://SEUUSUARIO.github.io/contest-dos-capitaes/`

## Instalar no celular
- **Android (Chrome):** abra a URL → menu ⋮ → "Instalar aplicativo" / "Adicionar à tela inicial".
- **iPhone (Safari):** abra a URL → botão Compartilhar → "Adicionar à Tela de Início".

O app abre em tela cheia, com ícone próprio. Sem internet, ele mostra o último estado salvo no aparelho e avisa no rodapé.

## Prévia do link (WhatsApp, Telegram...)
Ao compartilhar a URL, a prévia mostra o título, a descrição e o card com os dois capitães (`og-image.jpg`). Se você já tinha compartilhado o link **antes** de subir essa imagem, o WhatsApp pode exibir a prévia antiga em cache — nesse caso, compartilhe uma vez com `?v=2` no fim da URL (ex.: `.../contest-capitaes/?v=2`) para forçar a atualização, e depois use o link normal.

## Importante — planilha (Google Apps Script)
O app lê/grava na planilha via Apps Script (JSONP). O deploy do Apps Script precisa estar com acesso **"Qualquer pessoa"** para funcionar no celular/GitHub.

**Placar 0 a 0:** só contam lançamentos a partir do início da temporada (25/11/2026). Lançamentos anteriores a essa data continuam na planilha, mas não pontuam no app.

O arquivo `contest-appsscript.html` (também atualizado neste pacote) é a versão que roda **dentro** do Apps Script, caso você queira manter as duas entradas.
