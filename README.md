# Contest dos Capitães — web app (GitHub Pages)

Pasta pronta para subir no GitHub e usar no celular como app.

## Arquivos
| Arquivo | O que é |
|---|---|
| `index.html` | O contest (versão offline/JSONP), ajustado para celular + PWA |
| `manifest.json` | Faz o celular instalar como app (ícone, tela cheia, tema escuro) |
| `sw.js` | Service worker: abre mesmo sem internet (última tela + dados salvos no aparelho) |
| `icon-192.png`, `icon-512.png` | Ícones do app (Android/Chrome) |
| `icon-maskable-512.png` | Ícone adaptável (Android) |
| `apple-touch-icon.png` | Ícone para iPhone/iPad |

## Publicar no GitHub
1. Crie um repositório (ex.: `contest-dos-capitaes`).
2. Suba **todos os arquivos desta pasta na raiz do repo** (o `index.html` precisa ficar na raiz).
3. Settings → Pages → Source: *Deploy from a branch* → branch `main`, pasta `/ (root)` → Save.
4. A URL fica: `https://SEUUSUARIO.github.io/contest-dos-capitaes/`

## Instalar no celular
- **Android (Chrome):** abra a URL → menu ⋮ → "Instalar aplicativo" / "Adicionar à tela inicial".
- **iPhone (Safari):** abra a URL → botão Compartilhar → "Adicionar à Tela de Início".

O app abre em tela cheia, com ícone próprio. Sem internet, ele mostra o último estado salvo no aparelho e avisa no rodapé.

## Importante — planilha (Google Apps Script)
O app lê/grava na planilha via Apps Script (JSONP). O deploy do Apps Script precisa estar com acesso **"Qualquer pessoa"** para funcionar no celular/GitHub.

O arquivo `contest-appsscript.html` (também atualizado neste pacote) é a versão que roda **dentro** do Apps Script, caso você queira manter as duas entradas.
