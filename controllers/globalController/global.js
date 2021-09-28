export const home = (req, res) => {
  res.render("index", { title: "webpack practice", message: "home" })
}
