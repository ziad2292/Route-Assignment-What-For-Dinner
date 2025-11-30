const meals = [
  {
    name: "Grilled Lemon Herb Chicken",
    description:
      "Tender grilled chicken marinated in lemon, garlic, and herbs. A light and refreshing protein-packed meal.",
    ingredients: [
      "Chicken breasts",
      "Lemon juice",
      "Garlic",
      "Olive oil",
      "Rosemary",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Whisk together lemon juice, garlic, olive oil, and rosemary.",
      "Marinate chicken for at least 30 minutes.",
      "Preheat grill to medium heat.",
      "Cook chicken 6–7 minutes per side until fully done.",
      "Let it rest before slicing.",
    ],
    calories: 320,
    carbohydrates: 4,
    fiber: 0,
    protein: 42,
    fat: 14,
    sodium: 380,
    chefTips: [
      "Pound chicken to even thickness for consistent cooking.",
      "Add chili flakes to the marinade for heat.",
    ],
    cookTime: 15,
    prepTime: 10,
    servings: 2,
    review: 4.6,
    numberOfReviews: 128,
    imageUrl: "https://picsum.photos/seed/lemonchicken/600/400",
    tags: ["easy", "mediterranean"],
  },

  {
    name: "Creamy Garlic Pasta",
    description:
      "A rich and comforting pasta dish coated in creamy garlic sauce. Simple to make yet full of flavor.",
    ingredients: [
      "Pasta",
      "Butter",
      "Garlic",
      "Heavy cream",
      "Parmesan cheese",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Boil pasta until al dente.",
      "Melt butter in a pan and sauté garlic.",
      "Add cream and simmer 3–4 minutes.",
      "Stir in Parmesan until sauce thickens.",
      "Combine with pasta and season to taste.",
    ],
    calories: 610,
    carbohydrates: 62,
    fiber: 3,
    protein: 18,
    fat: 32,
    sodium: 450,
    chefTips: [
      "Use pasta water to adjust sauce thickness.",
      "Add grilled chicken or mushrooms for variety.",
    ],
    cookTime: 12,
    prepTime: 5,
    servings: 2,
    review: 4.2,
    numberOfReviews: 94,
    imageUrl: "https://picsum.photos/seed/garlicpasta/600/400",
    tags: ["easy", "italian"],
  },

  {
    name: "BBQ Pulled Beef Bowl",
    description:
      "Slow-cooked shredded beef tossed in smoky BBQ sauce and served over soft rice. A hearty and satisfying bowl.",
    ingredients: [
      "Beef chuck",
      "BBQ sauce",
      "Onion",
      "Garlic powder",
      "Paprika",
      "Salt",
      "White rice",
    ],
    instructions: [
      "Season beef with paprika, salt, and garlic powder.",
      "Slow-cook beef with onions for 6–8 hours.",
      "Shred the cooked beef with two forks.",
      "Mix in BBQ sauce until coated.",
      "Serve over warm cooked rice.",
    ],
    calories: 720,
    carbohydrates: 55,
    fiber: 2,
    protein: 38,
    fat: 38,
    sodium: 920,
    chefTips: [
      "Add coleslaw on top for crunch.",
      "Use smoked paprika for deeper flavor.",
    ],
    cookTime: 20,
    prepTime: 10,
    servings: 3,
    review: 4.7,
    numberOfReviews: 201,
    imageUrl: "https://picsum.photos/seed/bbqbeef/600/400",
    tags: ["intermediate", "american"],
  },

  {
    name: "Mediterranean Chickpea Salad",
    description:
      "A refreshing and colorful salad of chickpeas and fresh vegetables in a bright lemon dressing. Light but surprisingly filling.",
    ingredients: [
      "Chickpeas",
      "Cucumber",
      "Cherry tomatoes",
      "Red onion",
      "Parsley",
      "Olive oil",
      "Lemon",
      "Salt",
    ],
    instructions: [
      "Chop cucumber, tomatoes, and onion.",
      "Drain and rinse chickpeas.",
      "Whisk lemon juice, olive oil, and salt.",
      "Combine all ingredients in a bowl.",
      "Toss until evenly coated.",
    ],
    calories: 390,
    carbohydrates: 48,
    fiber: 9,
    protein: 14,
    fat: 14,
    sodium: 340,
    chefTips: [
      "Chill the salad for 20 minutes before serving.",
      "Add feta cheese for extra richness.",
    ],
    cookTime: 0,
    prepTime: 12,
    servings: 2,
    review: 4.5,
    numberOfReviews: 77,
    imageUrl: "https://picsum.photos/seed/chickpeas/600/400",
    tags: ["easy", "mediterranean"],
  },

  {
    name: "Honey Soy Glazed Salmon",
    description:
      "Oven-baked salmon with a sweet and savory honey soy glaze. Quick to prepare and incredibly flavorful.",
    ingredients: [
      "Salmon fillets",
      "Soy sauce",
      "Honey",
      "Garlic",
      "Ginger",
      "Sesame oil",
      "Green onions",
    ],
    instructions: [
      "Mix soy sauce, honey, garlic, and ginger.",
      "Marinate salmon for 15 minutes.",
      "Place salmon on a baking tray.",
      "Bake at 200°C (392°F) for 12–15 minutes.",
      "Garnish with green onions.",
    ],
    calories: 450,
    carbohydrates: 18,
    fiber: 0,
    protein: 36,
    fat: 24,
    sodium: 780,
    chefTips: [
      "Broil for the last 2 minutes to caramelize the glaze.",
      "Use low-sodium soy sauce to reduce salt.",
    ],
    cookTime: 15,
    prepTime: 10,
    servings: 2,
    review: 4.8,
    numberOfReviews: 164,
    imageUrl: "https://picsum.photos/seed/salmon/600/400",
    tags: ["easy", "asian"],
  },

  {
    name: "Beef and Vegetable Stir Fry",
    description:
      "A quick and colorful stir fry packed with tender beef and fresh vegetables. A balanced meal that's full of flavor.",
    ingredients: [
      "Beef strips",
      "Bell peppers",
      "Broccoli",
      "Soy sauce",
      "Garlic",
      "Ginger",
      "Sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a large pan.",
      "Sauté garlic and ginger until fragrant.",
      "Add beef strips and cook until browned.",
      "Add chopped vegetables and stir fry 5–7 minutes.",
      "Pour soy sauce and cook until everything is coated.",
    ],
    calories: 520,
    carbohydrates: 22,
    fiber: 4,
    protein: 42,
    fat: 29,
    sodium: 610,
    chefTips: [
      "Slice beef thinly against the grain for tenderness.",
      "Add chili oil for extra heat.",
    ],
    cookTime: 18,
    prepTime: 12,
    servings: 2,
    review: 4.4,
    numberOfReviews: 89,
    imageUrl: "https://picsum.photos/seed/stirfry/600/400",
    tags: ["easy", "asian"],
  },

  {
    name: "Slow Cooker Chicken Tikka Masala",
    description:
      "A rich and creamy curry slow-cooked to deepen the flavors. A comforting dish inspired by Indian cuisine.",
    ingredients: [
      "Chicken thighs",
      "Tomato puree",
      "Cream",
      "Garlic",
      "Garam masala",
      "Onion",
      "Ginger",
    ],
    instructions: [
      "Combine chicken, spices, tomato puree, garlic, and onion in a slow cooker.",
      "Cook on low for 6–7 hours.",
      "Stir in cream and cook an additional 10 minutes.",
      "Serve warm over rice.",
      "Garnish with fresh cilantro.",
    ],
    calories: 640,
    carbohydrates: 34,
    fiber: 4,
    protein: 40,
    fat: 38,
    sodium: 720,
    chefTips: [
      "Toast spices first for deeper flavor.",
      "Use coconut milk instead of cream for a lighter version.",
    ],
    cookTime: 420,
    prepTime: 20,
    servings: 4,
    review: 4.8,
    numberOfReviews: 310,
    imageUrl: "https://picsum.photos/seed/tikka/600/400",
    tags: ["intermediate", "indian"],
  },

  {
    name: "Baked Ziti with Mozzarella",
    description:
      "A hearty baked pasta layered with tomato sauce and gooey melted cheese. Classic Italian comfort food.",
    ingredients: [
      "Ziti pasta",
      "Tomato sauce",
      "Mozzarella",
      "Ricotta",
      "Garlic",
      "Olive oil",
      "Basil",
    ],
    instructions: [
      "Boil pasta until slightly undercooked.",
      "Mix pasta with tomato sauce and ricotta.",
      "Spread mixture in a baking dish.",
      "Top with mozzarella.",
      "Bake at 190°C (375°F) for 25–30 minutes.",
    ],
    calories: 780,
    carbohydrates: 85,
    fiber: 5,
    protein: 32,
    fat: 34,
    sodium: 830,
    chefTips: [
      "Broil for 2 minutes for a golden bubbly top.",
      "Use fresh basil for best flavor.",
    ],
    cookTime: 30,
    prepTime: 15,
    servings: 4,
    review: 4.3,
    numberOfReviews: 144,
    imageUrl: "https://picsum.photos/seed/ziti/600/400",
    tags: ["easy", "italian"],
  },

  {
    name: "Moroccan Lentil Stew",
    description:
      "A warm and aromatic stew filled with lentils and vegetables. Perfect for a cozy and nutritious meal.",
    ingredients: [
      "Lentils",
      "Carrots",
      "Onion",
      "Cumin",
      "Turmeric",
      "Tomato paste",
      "Vegetable broth",
    ],
    instructions: [
      "Sauté onions and carrots in a pot.",
      "Stir in spices and tomato paste.",
      "Add lentils and broth.",
      "Simmer 45–50 minutes until lentils are soft.",
      "Adjust seasoning before serving.",
    ],
    calories: 410,
    carbohydrates: 62,
    fiber: 14,
    protein: 19,
    fat: 6,
    sodium: 540,
    chefTips: [
      "Add a squeeze of lemon before serving.",
      "Serve with warm flatbread.",
    ],
    cookTime: 50,
    prepTime: 15,
    servings: 3,
    review: 4.6,
    numberOfReviews: 132,
    imageUrl: "https://picsum.photos/seed/lentilstew/600/400",
    tags: ["easy", "moroccan"],
  },

  {
    name: "Oven-Roasted Herb Turkey Breast",
    description:
      "A juicy turkey breast roasted with herbs and garlic for deep savory flavor. Ideal for a holiday-style meal.",
    ingredients: [
      "Turkey breast",
      "Garlic",
      "Butter",
      "Thyme",
      "Rosemary",
      "Salt",
      "Black pepper",
    ],
    instructions: [
      "Rub turkey breast with garlic herb butter.",
      "Preheat oven to 180°C (356°F).",
      "Roast turkey for 60–70 minutes.",
      "Let rest 10 minutes before slicing。",
      "Serve warm with sides.",
    ],
    calories: 520,
    carbohydrates: 3,
    fiber: 0,
    protein: 55,
    fat: 30,
    sodium: 480,
    chefTips: [
      "Use a meat thermometer for perfect doneness.",
      "Add vegetables to the roasting pan for extra flavor.",
    ],
    cookTime: 70,
    prepTime: 15,
    servings: 4,
    review: 4.7,
    numberOfReviews: 99,
    imageUrl: "https://picsum.photos/seed/turkey/600/400",
    tags: ["intermediate", "american"],
  },
];

function generateRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeRecipe() {
  var max = meals.length - 1;
  var min = 0;

  var index = generateRandomIndex(min, max);

  var meal = meals[index];

  document.getElementById("image").src = meal.imageUrl;
  document.getElementById("rating").innerHTML = meal.review;
  document.getElementById(
    "reviews"
  ).innerHTML = `(${meal.numberOfReviews}) reviews`;
  document.getElementById("prep-time").innerHTML = `${meal.prepTime} min`;
  document.getElementById("cook-time").innerHTML = `${meal.cookTime} min`;
  document.getElementById("servings").innerHTML = `${meal.servings} people`;
  document.getElementById("difficulty").innerHTML = meal.tags[0];
  document.getElementById("region").innerHTML = meal.tags[1];
  document.getElementById("name").innerHTML = meal.name;
  document.getElementById("description").innerHTML = meal.description;
  if (meal.cookTime + meal.prepTime < 45) {
    document.getElementById("limit").classList.add("d-none");
    document.getElementById("limit").classList.remove("d-block");
  } else {
    document.getElementById("limit").classList.remove("d-none");
    document.getElementById("limit").classList.add("d-block");
  }

  ingredientsList = "";
  for (var i = 0; i < meal.ingredients.length; i++) {
    ingredientsList += `<li class="d-flex gap-2 align-items-center my-2">
                    <span
                      class="orange-bg px-2 d-flex align-items-center border border-0 rounded-circle text-white"
                      >${i + 1}</span
                    ><span class="fs-5 fw-medium text-secondary"
                      >${meal.ingredients[i]}</span
                    >`;
  }

  document.getElementById("ingredients").innerHTML = ingredientsList;

  instructionsList = "";
  for (var i = 0; i < meal.instructions.length; i++) {
    instructionsList += `<li class="d-flex gap-3 align-items-center my-3">
                    <span
                      class="orange-bg py-1 px-3 fs-3 d-flex align-items-center border border-0 rounded-4 text-white"
                      >${i + 1}</span
                    ><span class="fs-5 fw-medium text-secondary"
                      >${meal.instructions[i]}</span
                    >
                  </li>`;
  }

  document.getElementById("instructions").innerHTML = instructionsList;

  document.getElementById("calories").innerHTML = `${meal.calories} kcal`;
  document.getElementById("protein").innerHTML = `${meal.protein} kcal`;
  document.getElementById("carbs").innerHTML = `${meal.carbohydrates} kcal`;
  document.getElementById("fat").innerHTML = `${meal.fat} kcal`;
  document.getElementById("fiber").innerHTML = `${meal.fiber} kcal`;
  document.getElementById("sodium").innerHTML = `${meal.sodium} kcal`;

  tipsList = "";
  for (var i = 0; i < meal.chefTips.length; i++) {
    tipsList += ` <li
                    class="my-3 h-auto border-start border-4 yellow-bg bg-opacity-25 yellow-border d-flex rounded-3 p-3 align-items-center gap-3"
                  >
                    <div
                      class="text-white h-auto border border-0 rounded-circle yellow-dark-bg"
                    >
                      <i class="fa-solid fa-check fs-7 m-1"></i>
                    </div>
                    <h3
                      class="text-secondary text-opacity-75 fw-medium fs-4 m-0"
                    >
                      ${meal.chefTips[i]}
                    </h3>
                  </li>`;
  }

  document.getElementById("tips").innerHTML = tipsList;
}
