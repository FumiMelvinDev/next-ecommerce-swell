import swell from "./client";
import { cache } from "react";

export const getCatgories = cache(async (limit = 25, page = 1) => {
  return await swell.categories.list({
    limit,
    page,
    expand: ["products"],
  });
});

export const getProducts = cache(
  async ({
    page = 1,
    sort = "",
    search = "",
    categories = [],
    limit = PRODUCTS_PER_PAGE,
  }) => {
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

export const getProduct = cache(async (slugOrId) => {
  return await swell.products.get(slugOrId);
});
