const newsRouter = require('./news');
const sideRouter = require('./site')

function route(app) {
  app.get('/', (req, res) => {
    // res.send(`
    //   <h1>Hello world!</h1>
    // `)
    res.render('home')
  })
  
  app.use("/news", newsRouter);
  app.use("/", sideRouter);

}

module.exports = route
