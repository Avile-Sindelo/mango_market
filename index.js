const express = require('express');
const exphbs  = require('express-handlebars');
const pgp = require('pg-promise')();
const database = require('./mango-shopper');
const { invalid } = require('moment');

const app = express();
const PORT =  process.env.PORT || 3019;

let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

// TODO configure this to work.
const connectionString = process.env.DATABASE_URL || 'postgres://xxxmiqoj:kJ9WWETLdbVCaNDeMxFjUfgF_CZO90X9@snuffleupagus.db.elephantsql.com/xxxmiqoj?ssl=true';

const db = pgp(connectionString);
const Database = database(db);


// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

let counter = 0;
let messages = {
	error: '',
	success: ''
}

app.get('/', async function(req, res) {
	let topFiveDeals = await Database.topFiveDeals();

	res.render('index', {
		counter, topFiveDeals
	});
});

app.post('/addDeal', async function(req, res){
	let price = req.body.price;
	let qty = req.body.qty;
	let shop = req.body.shop_name;
	
	console.log('Selected price: ', price);
	console.log('Selected qty: ', qty); 
	console.log('Shop name: ', shop);

	if(price < 0 || price == ''){
		// invalid price 
		messages.error = 'Please make sure you enter a valid Mango price';
		messages.success = '';
	} else if(qty < 0 || qty == ''){
		// invalid qty 
		messages.error = 'Please make sure to enter the number of Mangos for this deal';
		messages.success = '';
	} else if(shop == undefined){
		//please select a shop
		messages.error = 'Please select a shop for which you are making the deal';
		messages.success = '';
	}
	

	let shops = await Database.listShops();

	res.render('addDeal', {shops})
});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`MangoApp started on port ${PORT}`)
});