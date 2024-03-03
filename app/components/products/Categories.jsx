import { getCategories } from "@/lib/swell/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Categories() {
  const { results: categories } = await getCategories();
  const mainCategories = categories
    .filter((c) => c.parentId === null)
    .slice(0, 4);
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          {mainCategories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  alt={category.name}
                  width={category.images?.[0].file?.width || 600}
                  height={category.images?.[0].file?.height || 300}
                  src={category.images?.[0].file?.url}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href={`/products/category/${category.slug}`}>
                  <span className="absolute inset-0" />
                  {category.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
