import React from "react";
import { Link } from "react-router-dom";
import recipes from "../recipes";
import { useEffect } from "react";

function RecipeListPage () {
    useEffect(() => {
        document.title = "Книга рецептов";
    }, []);

    return (
        <div>
        <h1>Список рецептов:</h1>
        <ul className="recipe-list">
            {recipes.map((recipe) => (
            <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default RecipeListPage;