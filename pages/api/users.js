// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':
      res.json({ method: "POST", endpoint: 'http://localhost:8080/users/register' });
      break;
      default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
