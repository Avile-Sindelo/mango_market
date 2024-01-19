module.exports = function (db) {

	async function createShop(shopName) {
		await db.none(`insert into shop (name) values($1)`, [shopName]);
	}

	async function listShops() {
		return await db.manyOrNone(`select * from shop`);		
	}

	async function dealsForShop(shopId) {
		return await db.manyOrNone(`select * from mango_deal where id=$1`, [shopId])
	}

	async function topFiveDeals() {
		return await db.manyOrNone(`select * from mango_deal
									join shop on mango_deal.shop_id=shop.id
									order by price asc limit 5`);
	}

	async function createDeal(qty, price, shopId) {
		await db.none(`insert into mango_deal (qty, price, shop_id) values ($1, $2, $3)`, [qty, price, shopId]);
	}

	async function recommendDeals(amount) {
		return await db.manyOrNone(`select * from mango_deal
									join shop on mango_deal.shop_id=shop.id
									where price <= $1`, [amount])
	}

	async function getShopId(shopName){
		return await db.one(`select id from shop where name=$1`, [shopName])
	}

	return {
		createDeal,
		createShop,
		listShops,
		dealsForShop,
		recommendDeals,
		topFiveDeals,
		getShopId
	}


}