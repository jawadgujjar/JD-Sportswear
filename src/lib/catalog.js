// Catalog data: Category -> Subcategory -> Product.
// Pages only use the async getters below, so this static data can later be
// swapped for a database or API without touching the pages.

const categories = [
  { slug: "basketball", name: "Basketball", tagline: "Reversible & pro-cut", description: "Fully sublimated basketball jerseys, uniform sets and shooting shirts built for fast play.", colors: ["#FF5A1F", "#0B0F19"], shape: "tank", number: "23" },
  { slug: "football", name: "Football", tagline: "Game-day ready", description: "Tough, breathable football jerseys for tackle, 7v7 and flag teams.", colors: ["#1D4ED8", "#F8FAFC"], shape: "tee", number: "12" },
  { slug: "soccer", name: "Soccer", tagline: "Lightweight & breathable", description: "Match kits, goalkeeper jerseys and training wear for clubs of every level.", colors: ["#16A34A", "#F8FAFC"], shape: "tee", number: "10" },
  { slug: "baseball", name: "Baseball", tagline: "Classic button-down", description: "Button-down baseball and softball jerseys with custom names and numbers.", colors: ["#B91C1C", "#F8FAFC"], shape: "tee", number: "7" },
  { slug: "volleyball", name: "Volleyball", tagline: "Stretch performance fit", description: "Stretch-fit indoor and beach volleyball jerseys that move with you.", colors: ["#7C3AED", "#FACC15"], shape: "tank", number: "4" },
];

const subcategories = [
  { slug: "jerseys", categorySlug: "basketball", name: "Basketball Jerseys", description: "Single and reversible game jerseys." },
  { slug: "uniform-sets", categorySlug: "basketball", name: "Uniform Sets", description: "Matching jersey and shorts sets." },
  { slug: "warm-ups", categorySlug: "basketball", name: "Warm-ups", description: "Shooting shirts and practice pinnies." },
  { slug: "7v7-jerseys", categorySlug: "football", name: "7v7 Jerseys", description: "Lightweight jerseys for 7v7 play." },
  { slug: "tackle-jerseys", categorySlug: "football", name: "Tackle Jerseys", description: "Durable jerseys built for full contact." },
  { slug: "flag-football", categorySlug: "football", name: "Flag Football", description: "Uniforms for flag leagues of all ages." },
  { slug: "match-kits", categorySlug: "soccer", name: "Match Kits", description: "Home and away kits for game day." },
  { slug: "goalkeeper", categorySlug: "soccer", name: "Goalkeeper", description: "Padded and standout goalkeeper jerseys." },
  { slug: "training-wear", categorySlug: "soccer", name: "Training Wear", description: "Tops for practice and warm-up." },
  { slug: "baseball-jerseys", categorySlug: "baseball", name: "Baseball Jerseys", description: "Full-button and two-button jerseys." },
  { slug: "softball-jerseys", categorySlug: "baseball", name: "Softball Jerseys", description: "Fitted jerseys for softball teams." },
  { slug: "indoor", categorySlug: "volleyball", name: "Indoor Volleyball", description: "Sleeveless and cap sleeve match jerseys." },
  { slug: "beach", categorySlug: "volleyball", name: "Beach Volleyball", description: "Light tanks for the sand." },
];

const defaults = {
  sizes: ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL"],
  fabric: "100% polyester, moisture-wicking mesh",
  features: ["Full sublimation, colors never fade or crack", "Custom names, numbers and logos", "Free design mockup within 48 hours"],
};

// Prices and descriptions are placeholders.
const products = [
  { slug: "pro-reversible-basketball-jersey", subcategorySlug: "jerseys", categorySlug: "basketball", name: "Pro Reversible Jersey", price: 24.99, moq: 10, colors: ["#FF5A1F", "#0B0F19"], shape: "tank", number: "23", description: "Two jerseys in one. Flip it for home and away games." },
  { slug: "classic-basketball-jersey", subcategorySlug: "jerseys", categorySlug: "basketball", name: "Classic Game Jersey", price: 19.99, moq: 10, colors: ["#0EA5E9", "#F8FAFC"], shape: "tank", number: "11", description: "A clean, lightweight game jersey for leagues and schools." },
  { slug: "elite-basketball-uniform-set", subcategorySlug: "uniform-sets", categorySlug: "basketball", name: "Elite Uniform Set", price: 39.99, moq: 10, colors: ["#0EA5E9", "#0B0F19"], shape: "tank", number: "3", description: "Matching sublimated jersey and shorts, fully customized." },
  { slug: "basketball-shooting-shirt", subcategorySlug: "warm-ups", categorySlug: "basketball", name: "Shooting Shirt", price: 22.99, moq: 10, colors: ["#0B0F19", "#FF5A1F"], shape: "tee", number: "30", description: "Warm-up shirt for pre-game shoot-arounds." },
  { slug: "basketball-training-pinnie", subcategorySlug: "warm-ups", categorySlug: "basketball", name: "Training Pinnie", price: 14.99, moq: 15, colors: ["#FACC15", "#0B0F19"], shape: "tank", number: "8", description: "Lightweight pinnie for practice and scrimmages." },
  { slug: "7v7-sublimated-jersey", subcategorySlug: "7v7-jerseys", categorySlug: "football", name: "7v7 Sublimated Jersey", price: 29.99, moq: 10, colors: ["#1D4ED8", "#F8FAFC"], shape: "tee", number: "12", description: "Fitted, fast and fully sublimated for 7v7 tournaments." },
  { slug: "full-tackle-football-jersey", subcategorySlug: "tackle-jerseys", categorySlug: "football", name: "Full Tackle Jersey", price: 34.99, moq: 10, colors: ["#B91C1C", "#FACC15"], shape: "tee", number: "88", description: "Reinforced jersey built to fit over pads." },
  { slug: "football-practice-jersey", subcategorySlug: "tackle-jerseys", categorySlug: "football", name: "Practice Jersey", price: 17.99, moq: 15, colors: ["#F8FAFC", "#1D4ED8"], shape: "tee", number: "50", description: "Durable practice jersey for daily training." },
  { slug: "flag-football-uniform", subcategorySlug: "flag-football", categorySlug: "football", name: "Flag Football Uniform", price: 26.99, moq: 10, colors: ["#16A34A", "#0B0F19"], shape: "tee", number: "1", description: "Comfortable uniform for youth and adult flag leagues." },
  { slug: "soccer-match-day-kit", subcategorySlug: "match-kits", categorySlug: "soccer", name: "Match Day Kit", price: 27.99, moq: 10, colors: ["#16A34A", "#F8FAFC"], shape: "tee", number: "10", description: "Complete match jersey with custom crest and sponsor logos." },
  { slug: "youth-club-soccer-kit", subcategorySlug: "match-kits", categorySlug: "soccer", name: "Youth Club Kit", price: 21.99, moq: 10, colors: ["#0EA5E9", "#F8FAFC"], shape: "tee", number: "6", description: "Affordable kit sized for youth clubs." },
  { slug: "soccer-goalkeeper-jersey", subcategorySlug: "goalkeeper", categorySlug: "soccer", name: "Goalkeeper Jersey", price: 29.99, moq: 5, colors: ["#FACC15", "#0B0F19"], shape: "tee", number: "1", description: "High-visibility jersey for keepers." },
  { slug: "soccer-training-top", subcategorySlug: "training-wear", categorySlug: "soccer", name: "Training Top", price: 19.99, moq: 15, colors: ["#0B0F19", "#16A34A"], shape: "tee", number: "9", description: "Breathable top for practice sessions." },
  { slug: "full-button-baseball-jersey", subcategorySlug: "baseball-jerseys", categorySlug: "baseball", name: "Full Button Jersey", price: 32.99, moq: 10, colors: ["#B91C1C", "#F8FAFC"], shape: "tee", number: "7", description: "Classic full-button jersey with sublimated details." },
  { slug: "two-button-baseball-jersey", subcategorySlug: "baseball-jerseys", categorySlug: "baseball", name: "Two-Button Jersey", price: 28.99, moq: 10, colors: ["#1D4ED8", "#F8FAFC"], shape: "tee", number: "21", description: "Henley-style two-button baseball jersey." },
  { slug: "softball-jersey", subcategorySlug: "softball-jerseys", categorySlug: "baseball", name: "Softball Jersey", price: 26.99, moq: 10, colors: ["#EC4899", "#0B0F19"], shape: "tee", number: "15", description: "Fitted softball jersey with custom graphics." },
  { slug: "sleeveless-volleyball-jersey", subcategorySlug: "indoor", categorySlug: "volleyball", name: "Sleeveless Match Jersey", price: 23.99, moq: 10, colors: ["#7C3AED", "#FACC15"], shape: "tank", number: "4", description: "Stretch-fit sleeveless jersey for indoor play." },
  { slug: "cap-sleeve-volleyball-jersey", subcategorySlug: "indoor", categorySlug: "volleyball", name: "Cap Sleeve Jersey", price: 25.99, moq: 10, colors: ["#0EA5E9", "#F8FAFC"], shape: "tee", number: "11", description: "Cap sleeve jersey with full freedom of movement." },
  { slug: "volleyball-libero-jersey", subcategorySlug: "indoor", categorySlug: "volleyball", name: "Libero Jersey", price: 24.99, moq: 5, colors: ["#0B0F19", "#7C3AED"], shape: "tee", number: "6", description: "Contrasting libero jersey to match your team set." },
  { slug: "beach-volleyball-tank", subcategorySlug: "beach", categorySlug: "volleyball", name: "Beach Volleyball Tank", price: 19.99, moq: 10, colors: ["#F59E0B", "#0B0F19"], shape: "tank", number: "2", description: "Ultra-light tank for beach tournaments." },
].map((product) => ({ ...defaults, ...product }));

export async function getCategories() {
  return categories;
}

export async function getCategory(categorySlug) {
  return categories.find((c) => c.slug === categorySlug) ?? null;
}

export async function getSubcategories(categorySlug) {
  return categorySlug ? subcategories.filter((s) => s.categorySlug === categorySlug) : subcategories;
}

export async function getSubcategory(categorySlug, subcategorySlug) {
  return subcategories.find((s) => s.categorySlug === categorySlug && s.slug === subcategorySlug) ?? null;
}

export async function getProducts({ categorySlug, subcategorySlug } = {}) {
  return products.filter(
    (p) =>
      (!categorySlug || p.categorySlug === categorySlug) &&
      (!subcategorySlug || p.subcategorySlug === subcategorySlug)
  );
}

export async function getProduct(categorySlug, subcategorySlug, productSlug) {
  return (
    products.find(
      (p) => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug && p.slug === productSlug
    ) ?? null
  );
}

// Menu data: every category with its subcategories.
export async function getCatalogMenu() {
  return categories.map((c) => ({
    ...c,
    subcategories: subcategories.filter((s) => s.categorySlug === c.slug),
  }));
}

export const categoryUrl = (categorySlug) => `/shop/${categorySlug}`;
export const subcategoryUrl = (categorySlug, subcategorySlug) => `/shop/${categorySlug}/${subcategorySlug}`;
export const productUrl = (p) => `/shop/${p.categorySlug}/${p.subcategorySlug}/${p.slug}`;
