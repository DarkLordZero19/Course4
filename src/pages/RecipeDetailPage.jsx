import { useParams } from "react-router-dom";
import recipes from "../recipes";
import { useEffect } from "react";

function RecipeDetailPage() {
    const { recipeId } = useParams();
    const recipe = recipes.find((r) => r.id === Number(recipeId));

    useEffect(() => {
        if (recipe) {
          document.title = `${recipe.name} — Книга рецептов`;
        } else {
          document.title = "Рецепт не найден — Книга рецептов";
        }
    }, [recipe]);

    if (!recipe) {
        return <p>Такой рецепт не найден.</p>;
    }

    return (
        <div className="recipe-detail">
            <h1>{recipe.name}</h1>
            <h3>Ингредиенты:</h3>
            <ul>
                {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3>Приготовления:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetailPage;