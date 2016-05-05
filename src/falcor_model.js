// import { Model } from "falcor"
import falcor from "falcor"
import HttpDataSource from "falcor-http-datasource"

const model = new falcor.Model({
  source: new HttpDataSource("http://localhost:3000/model.json"),
  onChange() {
    if (typeof rootModel === "undefined") {
      return
    }
    console.log("Model changed")
  },
})

export default model;

// export default new Model({
//   cache: {
//     title: "test",
//     id: "Ad2",
//   },
// })
