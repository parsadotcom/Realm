import { successfulResponse, failedResponse } from "../responses/responses.js";

/// API_ROUTE
export const GET_HEALTH = (req, res) => {
  try {
    console.log("Request for /health");
    res.status(200).json(successfulResponse("Realm is alive🛡️"));
  } catch (healthError) {
    console.log(healthError.message);
    res.status(400).json(failedResponse("Request is not healthy", { name: healthError.name, reason: healthError.message }));
  }
}