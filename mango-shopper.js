module.exports = function (db) {

	async function createShop(shopName) {
		await db.none(`insert into shop (name) values($1)`, [shopName]);
	}

	async function listShops() {
		await db.manyOrNone(`select * from shop`);		
	}

	async function dealsForShop(shopId) {
		await db.manyOrNone(`select * from mango_deal where id=$1`, [shopId])
	}

	async function topFiveDeals() {
		
	}

	async function createDeal(qty, price, shopId) {
		await db.none(`insert into mango_deal (qty, price, shop_id) values ($1, $2, $3)`, [qty, price, shopId]);
	}

	async function recommendDeals(amount) {
		await db.manyOrNone(`select * from mango_deal where price <= $1`, [amount])
	}

	return {
		createDeal,
		createShop,
		listShops,
		dealsForShop,
		recommendDeals,
		topFiveDeals
	}


}