import fs from "fs"

const insurance = fs.readFile("../data/discount.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
});

export default insurance;
