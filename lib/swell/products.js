import swell from "@/lib/swell/client";
import { cache } from "react";

export const getCategories = cache(async (limit = 25, page = 1) => {
  return await swell.categories.list({
    limit,
    page,
    expand: ["products"],
  });
});

export const getProducts = cache(
  async ({ page = 1, sort = "", search = "", categories = [], limit = 25 }) => {
    const query = {
      page,
      limit,
      sort,
      search,
      categories,
      expand: ["variants", "categories"],
    };

    return await swell.products.list(query);
  }
);

export const getProductBySlugOrId = cache(async (slugOrId) => {
  return await swell.products.get(slugOrId);
});

export const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Trending", value: "trending" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export const sortMap = new Map([
  ["latest", ""],
  ["price-asc", "price asc"],
  ["price-desc", "price desc"],
  ["trending", "popularity"],
]);
