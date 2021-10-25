const { syncAndSeed } = require("./db");
const app = require("./app");

const init = async () => {
  await syncAndSeed();
  process.env.JWT = "Tomato";
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
