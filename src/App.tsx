import LazyRecipe from "./lazy-recipe";
import "./styles.css";
import RECIPES from "./RECIPES";

export default function App() {
  return (
    <div className="App p-4 space-y-6">
      <h1 className="text-2xl font-bold">Lazy Image</h1>
      <h2 className="text-lg text-gray-600">Lazy image loading</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECIPES.map((recipe, index) => (
          <LazyRecipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
