import Product from "@/app/components/products/Product";
import Products from "@/app/components/products/Products";
import {
  getCategories,
  getProductBySlugOrId,
  getProducts,
  sortMap,
} from "@/lib/swell/products";

async function Page({ params, searchParams }) {
  const { results: categories } = await getCategories();

  const { slug } = params;
  const productSlug = slug?.length === 1 && slug[0];
  const categorySlug = slug?.length === 2 && slug[1];

  if (productSlug) {
    const product = await getProductBySlugOrId(productSlug);
    return <Product product={product} />;
  }

  const { sort } = searchParams;
  const mappedSort = sort ? sortMap.get(sort) : "";

  const { results: products } = await getProducts({
    sort: mappedSort,
    ...(categorySlug ? { categories: [categorySlug] } : {}),
  });
  return (
    <div>
      <Products products={products} categories={categories} />
    </div>
  );
}

export default Page;
