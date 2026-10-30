import fs from "fs";
import path from "path";

export default function handler(req: any, res: any) {
  try {
    // Attempt standard locations for Vercel lambdas
    const possiblePaths = [
      path.resolve(process.cwd(), "public/assets/Januario-Henrique-CV.pdf"),
      path.resolve(process.cwd(), "dist/assets/Januario-Henrique-CV.pdf"),
      path.resolve(__dirname, "../../public/assets/Januario-Henrique-CV.pdf"),
      path.resolve(__dirname, "../public/assets/Januario-Henrique-CV.pdf"),
    ];

    let foundPath = "";
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        foundPath = p;
        break;
      }
    }

    if (!foundPath) {
      // Fallback redirect to static asset URL
      res.writeHead(302, { Location: "/assets/Januario-Henrique-CV.pdf" });
      res.end();
      return;
    }

    const stat = fs.statSync(foundPath);
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Length": stat.size,
      "Content-Disposition": 'inline; filename="Januario-Henrique-CV.pdf"',
      "Cache-Control": "public, max-age=3600",
    });

    const readStream = fs.createReadStream(foundPath);
    readStream.pipe(res);
  } catch (error) {
    res.writeHead(302, { Location: "/assets/Januario-Henrique-CV.pdf" });
    res.end();
  }
}
