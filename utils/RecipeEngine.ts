export type Recipe = {
    title: string;
    description: string;
    time: string;
    ingredientsUsed: string[];
    missingIngredients: string[];
    steps: string[];
    imageUrl?: string;
};