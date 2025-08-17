const app = require("./server");

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get("port")}`);
});


