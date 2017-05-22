exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chef_recipes').del()
    .then(() => { return knex('recipe_dietaryRestrictions').del() })
    .then(() => { return knex('recipe_intolerances').del() })
    .then(() => { return knex('order_recipes').del() })
    .then(() => { return knex('orders').del() })
    .then(() => { return knex('recipe_ingredients').del() })
    .then(() => { return knex('recipe_equipments').del() })
      .then(() => { return knex('ingredients').del() })
      .then(() => { return knex('recipes').del() })
      .then(() => { return knex('chefs').del() })
      .then(() => { return knex('users').del() })
        .then(function () {
          return Promise.all([
            knex('users').insert([{ id: 1, firstName: 'John', lastName: 'Smith', email: 'johnsmith@gmail.com', password: 'johnsmith', imageUrl: 'www.imgUser1.com', address: "3439 Yonge Street, Toronto", phoneNumber: 3243233242}]),
            knex('users').insert([{ id: 2, firstName: 'Barry', lastName: 'White', email: 'barrywhite@gmail.com', password: 'barrywhite', imageUrl: 'www.imgUser2.com', address: "34 Bloor Street, Toronto", phoneNumber: 1231231234}]),

            knex('chefs').insert([{ id: 1, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', password: 'janedoe', imageUrl: 'www.imgChefs1.com', description: "I am a good Cook", phoneNumber: 0987654321, hourlyRateInCents: 5000,}]),
            knex('chefs').insert([{ id: 2, firstName: 'Katy', lastName: 'Perry', email: 'kateperry@gmail.com', password: 'katyperry', imageUrl: 'www.imgChefs2.com', description: "I am a good Cook", phoneNumber: 1234567899, hourlyRateInCents: 6500}]),

            knex('recipes').insert([{ id: 1, name: 'Spinach & chickpea curry', imageUrl: 'https://spoonacular.com/recipeImages/Spinach---chickpea-curry-217425.jpg', cookingTimeInMinutes: 15, cuisine: 'indian' }]),
            knex('recipes').insert([{ id: 2, name: 'Slow Cooker Mexican Beans and Rice with Pork', imageUrl: 'https://spoonacular.com/recipeImages/Slow-Cooker-Mexican-Beans-and-Rice-with-Pork-617250.jpg', cookingTimeInMinutes: 300, cuisine: 'mexican' }]),

            knex('ingredients').insert([{ id: 1, name: 'baby spinach'}]),
            knex('ingredients').insert([{ id: 2, name: 'basmati rice'}]),
            knex('ingredients').insert([{ id: 3, name: 'canned tomatoes'}]),
            knex('ingredients').insert([{ id: 4, name: 'chickpeas'}]),
            knex('ingredients').insert([{ id: 5, name: 'curry paste' }]),
            knex('ingredients').insert([{ id: 6, name: 'lemon juice' }]),
            knex('ingredients').insert([{ id: 7, name: 'onion' }]) ,
            knex('ingredients').insert([{ id: 8, name: 'brown rice'}]),
            knex('ingredients').insert([{ id: 9, name: 'chili beans'}]),
            knex('ingredients').insert([{ id: 10, name: 'pork shoulder'}]),
            knex('ingredients').insert([{ id: 11, name: 'salsa'}]),
            knex('ingredients').insert([{ id: 12, name: 'water'}]),

          ]);
        })
      .then(function () {
        // A promise then call to create tables with reference IDs
        return Promise.all([
            knex('chef_recipes').insert([{ chefID: 1, recipeID: 2 }]),
            knex('chef_recipes').insert([{ chefID: 2, recipeID: 1 }]),
            knex('chef_recipes').insert([{ chefID: 2, recipeID: 2 }]),

            knex('orders').insert([{ id: 1, beginningDateTime: "2017-05-21 12:00:00", endingDateTime: "2017-05-21 14:00:00", ratingOrder: 5, comment: "Delivered on time, great service, nice chef!", userID: 1, chefID: 1, orderTotal: 10000 }]),
            knex('orders').insert([{ id: 2, beginningDateTime: "2017-05-21 12:00:00", endingDateTime: "2017-05-21 14:00:00", ratingOrder: 3, comment: "Great service, nice guy!", userID: 2, chefID: 1, orderTotal: 10000 }]),
            knex('orders').insert([{ id: 3, beginningDateTime: "2017-05-21 12:00:00", endingDateTime: "2017-05-21 14:00:00", ratingOrder: 3, comment: "Delivered on time, great service, a bit pricey.", userID: 1, chefID: 2, orderTotal: 12000 }]),
            knex('orders').insert([{ id: 4, beginningDateTime: "2017-05-21 12:00:00", endingDateTime: "2017-05-21 14:00:00", ratingOrder: 4, comment: "Will definitely find him again!", userID: 2, chefID: 2, orderTotal: 12000 }]),

            knex('recipe_dietaryRestrictions').insert([{ recipeID: 1, dietaryRestriction: "vegetarian" }]),
            knex('recipe_dietaryRestrictions').insert([{ recipeID: 1, dietaryRestriction: "vegan" }]),

            knex('recipe_intolerances').insert([{ recipeID: 1, intolerance: "GlutenFree" }]),
            knex('recipe_intolerances').insert([{ recipeID: 1, intolerance: "DairyFree" }]),

            knex('recipe_equipments').insert([{ recipeID: 1, equipment: "frying pan" }]),
            knex('recipe_equipments').insert([{ recipeID: 2, equipment: "slow cooker" }]),

            knex('recipe_ingredients').insert([{ ingredientID: 1, recipeID: 1, amount: 250, measuringUnit: 'g' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 2, recipeID: 1, amount: 4, measuringUnit: 'servings' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 3, recipeID: 1, amount: 400, measuringUnit: 'g' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 4, recipeID: 1, amount: 2, measuringUnit: '' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 5, recipeID: 1, amount: 2, measuringUnit: 'tbsp' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 6, recipeID: 1, amount: 1, measuringUnit: 'tablespoon' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 7, recipeID: 1, amount: 1, measuringUnit: '' }]) ,
            knex('recipe_ingredients').insert([{ ingredientID: 8, recipeID: 2, amount: 1, measuringUnit: 'c' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 9, recipeID: 2, amount: 2, measuringUnit: 'cans' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 10, recipeID: 2, amount: 0.75, measuringUnit: 'lb' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 11, recipeID: 2, amount: 16, measuringUnit: 'oz' }]),
            knex('recipe_ingredients').insert([{ ingredientID: 12, recipeID: 2, amount: 2, measuringUnit: 'c' }])
        ]);
      })
      .then(function () {
        // Another promise then call to create order_recipe which reference order ID.
        return Promise.all([
            knex('order_recipes').insert([{ ratingRecipe: 4, comment: "a bit salty", orderID: 1, recipeID: 1}]),
            knex('order_recipes').insert([{ ratingRecipe: 3, comment: "Tasty stuffs!", orderID: 2, recipeID: 2}]),
            knex('order_recipes').insert([{ ratingRecipe: 5, comment: "Just so so.", orderID: 3, recipeID: 2}]),
            knex('order_recipes').insert([{ ratingRecipe: 2, comment: "Nice!", orderID: 4, recipeID: 2}]),
        ]);
      })
};