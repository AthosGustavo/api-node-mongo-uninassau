import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

//mongoose.connect("mongodb+srv://athosgustavowf:<password>@athosfabricio.xwn7ltv.mongodb.net/?retryWrites=true&w=majority");

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
