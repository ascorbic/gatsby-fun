export default function topLevel(req, res) {
  res.send(process.env.VARIABLE_NAME);
}
