// import "reflect-metadata";
import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import indexRoutes from "./routes/index.route";
//dir_name es la carpeta donde estoy

//Initializations
const app = express();
import "./database";

//settings
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "views"));
//configuracion de motor de plantillas
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

//Middlewares

app.use(express.json()); //entiendo los datos como json
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/", indexRoutes); //apartir de /books leera las rutas

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
