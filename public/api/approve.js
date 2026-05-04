export default async function handler(req, res) {
  const { paymentId } = req.query;
  const API_KEY = '2tybt4fvkhcecdluhktnqa5rkj6iddetvto-jk439l86pnxmw2wny88ytq6mhabqz
'; // From Pi Dev Step 6
  
  await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
    method: 'POST',
    headers: { 'Authorization': `Key ${API_KEY}` }
  });
  
  res.status(200).json({ message: 'Approved' });
}
