export default {
  async fetch(request) {
    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EMVIA AI STUDIO</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #ffffff, #dcefff);
            color: #173b5e;
            text-align: center;
            padding: 50px 20px;
          }
          .container {
            max-width: 650px;
            margin: auto;
            background: white;
            padding: 35px 20px;
            border-radius: 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          }
          h1 {
            font-size: 30px;
            color: #0878c9;
          }
          p {
            line-height: 1.7;
          }
          .status {
            display: inline-block;
            background: #e4f7ed;
            color: #16834b;
            padding: 10px 18px;
            border-radius: 30px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>EMVIA AI STUDIO</h1>
          <p><strong>Créer, innover et impacter.</strong></p>
          <p>Bienvenue dans votre futur studio intelligent de création publicitaire.</p>
          <p>Affiches, vidéos, motion design et production automatisée.</p>
          <div class="status">Studio en construction</div>
        </div>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=UTF-8"
      }
    });
  }
};
