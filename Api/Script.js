export default function handler(req, res) {
  // Set the content type as plain text
  res.setHeader("Content-Type", "text/plain");

  // Send the Lua loadstring for your private script
  res.send(`loadstring("https://raw.githubusercontent.com/FeykHere/feykhub_Bladeball/main/feykhubbladeball.txt")()`);
}
