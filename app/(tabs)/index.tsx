import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Recipe = {
  title: string;
  description: string;
  time: string;
  ingredientsUsed: string[];
  missingIngredients: string[];
  steps: string[];
};

const normalize = (value: string) => value.trim().toLowerCase();

const hasAny = (pantry: string[], keywords: string[]) => {
  return pantry.some((item) =>
    keywords.some((keyword) => item.includes(keyword))
  );
};

const findUsedIngredients = (ingredients: string[], keywords: string[]) => {
  return ingredients.filter((item) =>
    keywords.some((keyword) => normalize(item).includes(keyword))
  );
};

const removeDuplicates = (items: string[]) => {
  return Array.from(new Set(items));
};

const removeItemsAlreadyInPantry = (pantry: string[], items: string[]) => {
  return items.filter(
    (item) => !pantry.some((pantryItem) => pantryItem.includes(normalize(item)))
  );
};

const getMealIdeas = (ingredients: string[]): Recipe[] => {
  const pantry = ingredients.map(normalize);
  const recipes: Recipe[] = [];

  const hasRice = hasAny(pantry, ["rice"]);
  const hasEggs = hasAny(pantry, ["egg", "eggs"]);
  const hasPasta = hasAny(pantry, ["pasta", "spaghetti", "noodle", "macaroni"]);
  const hasChicken = hasAny(pantry, ["chicken"]);
  const hasSausage = hasAny(pantry, ["sausage", "italian sausage"]);
  const hasMeatballs = hasAny(pantry, ["meatball", "meatballs"]);
  const hasCheese = hasAny(pantry, ["cheese", "mozzarella", "cheddar"]);
  const hasBeans = hasAny(pantry, ["beans", "black beans", "pinto beans"]);
  const hasTuna = hasAny(pantry, ["tuna"]);
  const hasBread = hasAny(pantry, ["bread", "tortilla", "wrap"]);
  const hasPotatoes = hasAny(pantry, ["potato", "potatoes"]);
  const hasVegetables = hasAny(pantry, [
    "onion",
    "pepper",
    "bell pepper",
    "carrot",
    "broccoli",
    "spinach",
    "tomato",
    "vegetable",
    "veggies",
  ]);

  const hasSpices = hasAny(pantry, [
    "garlic",
    "garlic powder",
    "paprika",
    "cumin",
    "parsley",
    "pepper",
    "salt",
    "adobo",
    "oregano",
  ]);

  if (ingredients.length === 0) {
    return [];
  }

  if (hasRice && hasEggs) {
    recipes.push({
      title: "Quick Egg Fried Rice",
      description:
        "A fast pantry meal using rice, eggs, and simple seasoning.",
      time: "15–20 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "rice",
        "egg",
        "eggs",
        "garlic",
        "paprika",
        "parsley",
        "pepper",
        "salt",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Soy sauce",
        "Green onion",
        "Cooking oil",
      ]),
      steps: [
        "Heat a little oil in a pan.",
        "Scramble the eggs and set them aside.",
        "Add rice to the pan and season it with your spices.",
        "Mix the eggs back into the rice.",
        "Taste and adjust seasoning before serving.",
      ],
    });
  }

  if (hasPasta && (hasSausage || hasMeatballs || hasCheese)) {
    recipes.push({
      title: "Easy Loaded Pasta",
      description:
        "A simple pasta dish using meat, cheese, or pantry seasonings.",
      time: "25–30 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "pasta",
        "spaghetti",
        "noodle",
        "macaroni",
        "sausage",
        "meatball",
        "cheese",
        "garlic",
        "paprika",
        "parsley",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Pasta sauce",
        "Onion",
        "Parmesan cheese",
      ]),
      steps: [
        "Boil the pasta until tender.",
        "Cook the sausage or meatballs in a pan.",
        "Add sauce or seasoning to the meat.",
        "Mix the pasta with the meat and sauce.",
        "Top with cheese if available.",
      ],
    });
  }

  if (hasRice && hasSausage) {
    recipes.push({
      title: "Sausage Rice Bowl",
      description:
        "A filling rice bowl with sausage and pantry spices.",
      time: "20–25 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "rice",
        "sausage",
        "garlic",
        "paprika",
        "cumin",
        "parsley",
        "pepper",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Onion",
        "Bell pepper",
        "Cooking oil",
      ]),
      steps: [
        "Cook or reheat the rice.",
        "Slice and brown the sausage in a pan.",
        "Add spices and a splash of water if needed.",
        "Serve the sausage over rice.",
        "Add vegetables if you have them.",
      ],
    });
  }

  if (hasChicken && hasRice) {
    recipes.push({
      title: "Simple Chicken Rice Plate",
      description:
        "A basic chicken and rice meal that can be seasoned many ways.",
      time: "30 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "chicken",
        "rice",
        "garlic",
        "paprika",
        "cumin",
        "parsley",
        "pepper",
        "salt",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Onion",
        "Lime",
        "Vegetables",
      ]),
      steps: [
        "Season the chicken with your available spices.",
        "Cook the chicken in a pan until fully cooked.",
        "Cook or reheat the rice.",
        "Serve chicken over rice.",
        "Add vegetables or sauce if available.",
      ],
    });
  }

  if (hasBeans && hasRice) {
    recipes.push({
      title: "Rice and Beans Bowl",
      description:
        "A cheap, filling, and simple meal using pantry basics.",
      time: "20 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "rice",
        "beans",
        "garlic",
        "cumin",
        "paprika",
        "parsley",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Onion",
        "Tomato",
        "Hot sauce",
      ]),
      steps: [
        "Warm the beans in a small pot.",
        "Season the beans with garlic, cumin, or paprika.",
        "Serve over cooked rice.",
        "Top with tomato, onion, or hot sauce if available.",
      ],
    });
  }

  if (hasBread && (hasEggs || hasCheese)) {
    recipes.push({
      title: "Breakfast Toast Melt",
      description:
        "A quick toast-based meal with eggs, cheese, or both.",
      time: "10–15 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "bread",
        "tortilla",
        "wrap",
        "egg",
        "eggs",
        "cheese",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Butter",
        "Black pepper",
        "Tomato",
      ]),
      steps: [
        "Toast the bread or warm the tortilla.",
        "Cook the egg or melt the cheese.",
        "Add the egg and cheese to the bread.",
        "Season with pepper or spices.",
        "Serve warm.",
      ],
    });
  }

  if (hasPotatoes && (hasEggs || hasCheese || hasSausage)) {
    recipes.push({
      title: "Potato Skillet",
      description:
        "A hearty skillet meal using potatoes and whatever protein you have.",
      time: "25–35 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "potato",
        "potatoes",
        "egg",
        "eggs",
        "cheese",
        "sausage",
        "garlic",
        "paprika",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Onion",
        "Cooking oil",
        "Bell pepper",
      ]),
      steps: [
        "Dice the potatoes into small pieces.",
        "Cook them in a pan with oil until soft and crispy.",
        "Add sausage, eggs, or cheese if available.",
        "Season with your pantry spices.",
        "Serve as a breakfast or dinner skillet.",
      ],
    });
  }

  if (hasVegetables && hasEggs) {
    recipes.push({
      title: "Vegetable Egg Scramble",
      description:
        "A quick meal using eggs and any vegetables you have.",
      time: "10–15 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "egg",
        "eggs",
        "onion",
        "pepper",
        "tomato",
        "spinach",
        "broccoli",
        "vegetable",
        "veggies",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Cheese",
        "Black pepper",
      ]),
      steps: [
        "Chop the vegetables into small pieces.",
        "Cook the vegetables in a pan until soft.",
        "Add beaten eggs to the pan.",
        "Stir until the eggs are cooked.",
        "Add cheese or seasoning if available.",
      ],
    });
  }

  if (hasTuna && (hasBread || hasPasta)) {
    recipes.push({
      title: "Quick Tuna Meal",
      description:
        "A simple tuna meal that can become a sandwich, wrap, or pasta bowl.",
      time: "10–20 minutes",
      ingredientsUsed: findUsedIngredients(ingredients, [
        "tuna",
        "bread",
        "tortilla",
        "wrap",
        "pasta",
        "noodle",
      ]),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Mayo",
        "Lemon",
        "Celery",
      ]),
      steps: [
        "Drain the tuna.",
        "Mix it with mayo or a small amount of oil.",
        "Season with pepper, lemon, or spices.",
        "Serve it with bread, tortilla, or pasta.",
      ],
    });
  }

  if (recipes.length === 0) {
    recipes.push({
      title: "Pantry Mix-Up Bowl",
      description:
        "A flexible meal idea using whatever ingredients you already added.",
      time: "15–25 minutes",
      ingredientsUsed: ingredients.slice(0, 6),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Cooking oil",
        "Onion",
        "Garlic",
        "Sauce",
      ]),
      steps: [
        "Choose one main ingredient from your pantry.",
        "Cook it in a pan with a little oil.",
        "Add spices or seasonings you already have.",
        "Serve it as a bowl, wrap, toast, or pasta topping.",
      ],
    });
  }

  if (hasSpices && recipes.length < 3) {
    recipes.push({
      title: "Seasoned Pantry Skillet",
      description:
        "A flexible skillet meal that uses your spices to make basic ingredients taste better.",
      time: "20 minutes",
      ingredientsUsed: ingredients.slice(0, 6),
      missingIngredients: removeItemsAlreadyInPantry(pantry, [
        "Cooking oil",
        "Onion",
        "Bell pepper",
      ]),
      steps: [
        "Pick your main ingredient, such as rice, pasta, potatoes, or protein.",
        "Heat it in a pan with a little oil.",
        "Add your available spices.",
        "Cook until everything is warm and flavorful.",
        "Serve hot.",
      ],
    });
  }

  return recipes.slice(0, 4);
};

export default function PantryScreen() {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([
    "Rice",
    "Eggs",
    "Garlic powder",
  ]);

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addIngredient = () => {
    const cleanIngredient = ingredient.trim();

    if (!cleanIngredient) return;

    const alreadyExists = ingredients.some(
      (item) => normalize(item) === normalize(cleanIngredient)
    );

    if (alreadyExists) {
      setIngredient("");
      return;
    }

    setIngredients((currentIngredients) => [
      ...currentIngredients,
      cleanIngredient,
    ]);

    setIngredient("");
  };

  const removeIngredient = (itemToRemove: string) => {
    setIngredients((currentIngredients) =>
      currentIngredients.filter((item) => item !== itemToRemove)
    );

    setRecipes([]);
  };

  const generateMealIdeas = () => {
    const generatedRecipes = getMealIdeas(ingredients);
    setRecipes(generatedRecipes);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.appName}>PantryNexa</Text>
      <Text style={styles.tagline}>Cook smarter. Waste less.</Text>

      <Text style={styles.sectionTitle}>My Pantry</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add ingredient..."
          value={ingredient}
          onChangeText={setIngredient}
          onSubmitEditing={addIngredient}
          returnKeyType="done"
        />

        <Pressable style={styles.addButton} onPress={addIngredient}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      {ingredients.map((item, index) => (
        <View key={`${item}-${index}`} style={styles.ingredientCard}>
          <Text style={styles.ingredientText}>{item}</Text>

          <Pressable onPress={() => removeIngredient(item)}>
            <Text style={styles.removeText}>Remove</Text>
          </Pressable>
        </View>
      ))}

      <Pressable style={styles.generateButton} onPress={generateMealIdeas}>
        <Text style={styles.generateButtonText}>Generate Meal Ideas</Text>
      </Pressable>

      {recipes.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Meal Ideas</Text>

          {recipes.map((recipe, index) => (
            <View key={`${recipe.title}-${index}`} style={styles.recipeCard}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeDescription}>{recipe.description}</Text>
              <Text style={styles.recipeTime}>Time: {recipe.time}</Text>

              <Text style={styles.recipeLabel}>You have:</Text>
              <Text style={styles.recipeText}>
                {removeDuplicates(recipe.ingredientsUsed).join(", ")}
              </Text>

              <Text style={styles.recipeLabel}>You may need:</Text>
              <Text style={styles.recipeText}>
                {recipe.missingIngredients.length > 0
                  ? recipe.missingIngredients.join(", ")
                  : "Nothing extra"}
              </Text>

              <Text style={styles.recipeLabel}>Steps:</Text>
              {recipe.steps.map((step, stepIndex) => (
                <Text key={stepIndex} style={styles.recipeText}>
                  {stepIndex + 1}. {step}
                </Text>
              ))}
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8EF",
  },
  content: {
    padding: 24,
    paddingTop: 70,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 34,
    fontWeight: "800",
    color: "#2B2118",
  },
  tagline: {
    fontSize: 16,
    marginTop: 4,
    color: "#6B5A4A",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 16,
    color: "#2B2118",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5D6C7",
  },
  addButton: {
    backgroundColor: "#E86A33",
    borderRadius: 14,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  ingredientCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5D6C7",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 17,
    color: "#2B2118",
    fontWeight: "600",
  },
  removeText: {
    color: "#B4442B",
    fontWeight: "600",
  },
  generateButton: {
    backgroundColor: "#2F6B4F",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  generateButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },
  recipeCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5D6C7",
    marginBottom: 16,
  },
  recipeTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#2B2118",
  },
  recipeDescription: {
    fontSize: 15,
    color: "#6B5A4A",
    marginTop: 6,
  },
  recipeTime: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2F6B4F",
    marginTop: 10,
  },
  recipeLabel: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2B2118",
    marginTop: 14,
  },
  recipeText: {
    fontSize: 15,
    color: "#4B3A2B",
    marginTop: 4,
    lineHeight: 21,
  },
});