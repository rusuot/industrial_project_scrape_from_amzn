//Packages
const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const url = "https://www.amazon.co.uk/HP-15s-fq5026sa-i3-1215U-Processor-Graphics/dp/B0CFB9NY4H/ref=sr_1_5?crid=3TC2XI7CQXMZU&dib=eyJ2IjoiMSJ9.7b11LibWnogFSxzIucyVaQJEzEuPO9nDHI8EvGtuI9u4LphcLZQOtf2yF_WyoHk8KNfDZCZl8XGHFqabJDeMioHq5qr8KvT7kv60U-JL25Iec9yDe73xB-D5zGY31ixMCesyWotjyh0Ckhr3LG_13ewesTF3YinlJIq6s98ZAI_gwehUZfKpz4vyseccXsz0hna0lW9nlWHBX_mi53le-dbA9Y48xRouj51oPL_8hAI.NuXZJT0uuxAGEJ3cAUBZ3mTdJnrt9_51XI5HPDTz824&dib_tag=se&keywords=laptop&qid=1712247899&sprefix=laptop%2Caps%2C160&sr=8-5";
  // "https://www.amazon.co.uk/Apple-2022-10-9-inch-iPad-Wi-Fi/dp/B0BJLH2N6F/ref=sr_1_6?crid=3E0JWASVBH5N0&dib=eyJ2IjoiMSJ9.ezpUoTk0sxuRcTlRJ6VVtBhdNUbWO-HiaCrj3YtTlo9tIHg5HoZrY1a9YaA7ekSiQ2_CAGt4yVj2pUd-ju5bzgGaFi5zf-shaxwO8dXPFPddp8FtQNbj8HZmG2xGHQO8jEGYNuGSVtYNflReOGi7b-BqpjFvKwqOsuF7RqPSPXKcMRaKypA-xxBI4sqKftS35JirGVQK6ArE7EHMJ1Q4PtPzD1goY8XB_iW6spjZ-Gk.BchkhK6M4pG-P1jsL9gIdbmMMEXTmE2OiUG117pxtIk&dib_tag=se&keywords=apple&qid=1712247336&sprefix=apple%2Caps%2C264&sr=8-6";

const product = { name: "", price: "", link: "" };

//Set interval
const handle = setInterval(scrape, 20000);

async function scrape() {
  //Fetch the data
  const { data } = await axios.get(url);
  //Load up the html
  const $ = cheerio.load(data);
  const item = $("div#dp-container");
  //Extract the data that we need
  product.name = $(item).find("h1 span#productTitle").text();
  product.link = url;
  const price = $(item)
    .find("span .a-price-whole")
    .first()
    .text()
    .replace(/[,.]/g, "");
  const priceNum = parseInt(price);
  product.price = priceNum;
  console.log(product);
  //Send an SMS
  if (priceNum < 1000) {
    client.messages
      .create({
        body: `The price of ${product.name} went below ${price}. Purchase it at ${product.link}`,
        from: "+19784876124",
        to: "+40234469",
      })
      .then((message) => {
        console.log(message);
        clearInterval(handle);
      });
  }
}

// var response = scrape();
// console.log("the response is:");
// console.log(response);

scrape();
