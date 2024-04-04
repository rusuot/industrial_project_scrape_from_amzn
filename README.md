# industrial_project_scrape_from_amzn

npm init
npm install axios cheerio
npm install twilio
npm install dotenv

*for twilio details: login and create an account
After, save from Account Info:
Account SID  &  Auth Token

* Create .env file with next:
TWILIO_ACCOUNT_SID=<Account SID retrieved above>
TWILIO_AUTH_TOKEN=<Auth Token retrieved above>

* How to run it:
run it with:
node scrape.js

* What you'll see in Terminal:
Comand run: node scrape.js
Output:
{
  name: '        HP Laptop PC 15s-fq5026sa | Intel Core i3-1215U Processor | 8GB RAM | 256GB SSD | Intel UHD Graphics | 15.6 inch Full HD 16:9 display | Windows 11 Home | Natural Silver       ',
  price: 329,
  link: 'https://www.amazon.co.uk/HP-15s-fq5026sa-i3-1215U-Processor-Graphics/dp/B0CFB9NY4H/ref=sr_1_5?crid=3TC2XI7CQXMZU&dib=eyJ2IjoiMSJ9.7b11LibWnogFSxzIucyVaQJEzEuPO9nDHI8EvGtuI9u4LphcLZQOtf2yF_WyoHk8KNfDZCZl8XGHFqabJDeMioHq5qr8KvT7kv60U-JL25Iec9yDe73xB-D5zGY31ixMCesyWotjyh0Ckhr3LG_13ewesTF3YinlJIq6s98ZAI_gwehUZfKpz4vyseccXsz0hna0lW9nlWHBX_mi53le-dbA9Y48xRouj51oPL_8hAI.NuXZJT0uuxAGEJ3cAUBZ3mTdJnrt9_51XI5HPDTz824&dib_tag=se&keywords=laptop&qid=1712247899&sprefix=laptop%2Caps%2C160&sr=8-5'
}
