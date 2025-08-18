const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
});


