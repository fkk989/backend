const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `server running on http://ec2-3-110-173-232.ap-south-1.compute.amazonaws.com:3000`
  );
});
