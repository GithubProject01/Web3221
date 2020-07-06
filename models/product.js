const product = 
{
    fakedb : [],

    initDB()
    {
        this.fakedb.push({
            img: "thali.jpg",
            title: "Thali",
            price: "15",
            foodcategory: "Punjabi Style",
            NoOfMeals: "6",
            Synosis: "Round platter served with different varieties of Indian food",            
            TopPackage: false            
        })

        this.fakedb.push({
            img: "breakfast.jpg",
            title: "Breakfast Meal",
            price: "4",
            foodcategory: "Light Meal",
            NoOfMeals: "4",
            Synosis: "Pancake varities are available for vegetarian along with egg dishes",
            TopPackage: true
        })

        this.fakedb.push({
            img: "southindian.jpg",
            title: "South Indian Special",
            price: "16",
            foodcategory: "South Idian Style",
            NoOfMeals: "12",
            Synosis: "With every kind of ish from south specially serverd on Banana leaf",
            TopPackage: true
            
        })

        this.fakedb.push({
            img: "italiancuisine.jpg",
            title: "Italian Cuisine",
            price: "8",
            foodcategory: "Italian Style",
            NoOfMeals: "4",
            Synosis: "New Special Dish made with Indian tadka",
            TopPackage: false
        })
    },

    getAllProducts()
    {
        return this.fakedb;
    },

    getFeaturedProducts()
    {

    }
}

const topmeal = 
{
    top : [],

    initTM()
    {
        this.top.push({
            img: "pasta.jpg",
            title: "Pasta",
            price: "10"         
        })

        this.top.push({
            img: "burger.jpg",
            title: "Breakfast Meal",
            price: "4"
        })

        this.top.push({
            img: "wrap.jpg",
            title: "South Indian Special",
            price: "16"          
        })

        this.top.push({
            img: "tootyfruity.jpg",
            title: "Italian Cuisine",
            price: "8",
        })
    },

    getAllMeals()
    {
        return this.top;
    },

    getFeaturedMeals()
    {

    }
}
product.initDB();
topmeal.initTM();
exports.product = product;
exports.topmeal = topmeal;
