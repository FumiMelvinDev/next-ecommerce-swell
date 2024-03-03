"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ProductImage from "./ProductImage";
import useProduct from "../../../lib/hooks/useProduct";

function Product({ product }) {
  const router = useRouter();

  const { price, basePrice, originalPrice } = useProduct({ product });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(basePrice || 0);
  }, [basePrice]);

  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
  useEffect(() => {
    if (!product.sale) return;
    setTotalOriginalPrice(originalPrice || 0);
  }, [product, originalPrice]);

  return (
    <section className="py-24">
      <div className="container">
        <button
          className="-mt-10 mb-10 flex items-center gap-2 text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="h-4 w-5" />
          <span className="text-[12px] font-medium uppercase">Go Back</span>
        </button>
        <div className="flex flex-col gap-8 lg:flex-row-reverse">
          <ProductImage images={product.images} />
          <div className="flex-1">
            <ProductDetails
              product={product}
              totalPrice={totalPrice}
              totalOriginalPrice={totalOriginalPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
