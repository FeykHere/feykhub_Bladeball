export default async function handler(req, res) {
  // Fetch the script from GitHub
  const response = await fetch("https://api.github.com/repos/FeykHere/feykhub_Bladeball/contents/feykhubbladeball.txt", {
    headers: {
      "Authorization": `token ${process.env.GH_TOKEN}`,  // Use the environment variable for the token
      "Accept": "application/vnd.github.v3.raw",
      "User-Agent": "FeykHub-Loader"
    }
  });

  // If fetching the script failed, return a 500 error
  if (!response.ok) {
    return res.status(500).send("Failed to load script.");
  }

  // Get the raw content of the script
  const script = await response.text();
  
  // Set the response header to 'text/plain' and send the script
  res.setHeader("Content-Type", "text/plain");
  res.send(script);
}
