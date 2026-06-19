/// API_ROUTE
export const GET_HEALTH = (req, res) => {
  console.log("Request for /health");
  res.json({ status: "Realm is alive! 🛡️", statusCode: 200 });
}