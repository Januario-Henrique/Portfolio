# 🚀 Guia de Publicação Gratuita (Vercel, Netlify, GitHub Pages, Render)

Este portfólio foi totalmente preparado para ser publicado **gratuitamente** nas principais plataformas modernas de hospedagem em nuvem.

---

## ⚡ Opção 1: Vercel (Recomendado — 100% Gratuito)

A Vercel é a melhor plataforma para aplicações Vite/React:
- ✅ **Plano Hobby 100% gratuito** para projetos pessoais e portfólios
- ✅ **SSL/HTTPS automático**
- ✅ **Domínio próprio gratuito** (ou subdomínio `.vercel.app`)
- ✅ **Suporte nativo a Serverless Functions** (`/api/contact.ts` já incluído para o formulário de contato)
- ✅ **Deploy contínuo**: a cada `git push` no GitHub, a Vercel atualiza o site automaticamente

### Método A: Pelo site da Vercel (Mais Fácil — 2 Minutos)

1. Crie ou acerte seu repositório no GitHub com os arquivos deste projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: Januario Henrique portfolio"
   git branch -M main
   git remote add origin https://github.com/Januario-Henrique/portfolio.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do **GitHub**.
3. Clique em **"Add New..."** → **"Project"**.
4. Selecione o repositório `portfolio` na lista e clique em **"Import"**.
5. As configurações são detectadas automaticamente:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` ou `npm run build`
   - **Output Directory**: `dist`
6. *(Opcional)* Em **Environment Variables**, adicione:
   - `CONTACT_EMAIL`: `januarioinocenciohenriques@gmail.com`
   - `RESEND_API_KEY`: sua chave gratuita do [resend.com](https://resend.com) (se desejar envio direto de emails)
7. Clique em **"Deploy"**! Em menos de 40 segundos seu site estará no ar com uma URL como `https://januario-henrique.vercel.app`.

### Método B: Pela linha de comando (Vercel CLI)

Se tiver o Node.js e preferir publicar direto pelo terminal:
```bash
# 1. Instale a CLI da Vercel globalmente
npm i -g vercel

# 2. Faça o login
vercel login

# 3. Publique em produção
vercel --prod
```

---

## 🌐 Opção 2: Netlify (100% Gratuito)

O Netlify também oferece plano gratuito vitalício com CDN global ultrarrápida.

### Método A: Via GitHub
1. Acesse [netlify.com](https://www.netlify.com) e conecte com o GitHub.
2. Clique em **"Add new site"** → **"Import an existing project"**.
3. Escolha o repositório. O arquivo `netlify.toml` já configurado no projeto cuidará de tudo automaticamente.
4. Clique em **"Deploy site"**.

### Método B: Drag-and-Drop (Sem Git)
1. No seu computador, gere a pasta de produção:
   ```bash
   npm run build
   ```
2. Vá ao painel do Netlify em **"Sites"** e arraste a pasta `dist` para a área indicada.
3. Seu site estará online instantaneamente!

---

## 🐙 Opção 3: GitHub Pages (100% Gratuito)

Se você quiser hospedar diretamente no seu próprio perfil do GitHub (`https://januario-henrique.github.io`):
1. Instale o pacote `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Adicione ao `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Execute:
   ```bash
   npm run deploy
   ```

---

## 🖥️ Opção 4: Render / Railway (Para rodar o servidor Express Full-Stack)

Se você preferir rodar o servidor Node.js/Express (`server.ts`) 24/7 com suporte a SMTP/Nodemailer:
1. Acesse [render.com](https://render.com) e crie um **Web Service** gratuito.
2. Conecte o repositório do GitHub.
3. Defina:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. O Render disponibilizará uma URL gratuita com HTTPS (ex: `https://januario-portfolio.onrender.com`).

---

## 📬 Variáveis de Ambiente Recomendadas

| Variável | Valor Padrão | Descrição |
|---|---|---|
| `CONTACT_EMAIL` | `januarioinocenciohenriques@gmail.com` | Email onde você receberá as mensagens do portfólio |
| `RESEND_API_KEY` | *(Opcional)* | Chave de API gratuita do Resend para envio automático |
| `PORT` | `3000` | Porta local do servidor Express |

---

## 💡 Dica de Domínio Personalizado Grátis

Na Vercel e no Netlify, você pode conectar gratuitamente um domínio próprio (ex: `januariohenrique.dev`, `januario.tech` ou `.com`). Basta ir nas configurações do projeto em **Domains** e apontar os registros DNS fornecidos pela plataforma.
