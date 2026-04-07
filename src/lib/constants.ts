export const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const INGREDIENT_IMAGE_URL = "https://www.themealdb.com/images/ingredients";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Foods", href: "/ingredients" },
  { label: "Local Culinary", href: "/local-culinary" },
] as const;

export const ITEMS_PER_PAGE = 40;
