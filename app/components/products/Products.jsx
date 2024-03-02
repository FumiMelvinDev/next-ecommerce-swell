import { currencyFormatter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

async function Products({ products = [], categories = [] }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.slug} hreclassName="group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 border p-2">
                <Image
                  alt={product.name}
                  width={product.images?.[0].file?.width || 600}
                  height={product.images?.[0].file?.height || 300}
                  src={product.images?.[0].file?.url}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {currencyFormatter(product.price)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
