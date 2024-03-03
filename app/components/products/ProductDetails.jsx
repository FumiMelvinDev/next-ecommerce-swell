import { currencyFormatter } from "@/lib/utils";
import { motion } from "framer-motion";

function ProductDetails({ product, totalPrice, totalOriginalPrice }) {
  return (
    <div className="lg:max-w-xl">
      <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {product.name}
        </h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4 bg-white">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>

        <div
          className="mt-6 space-y-6 text-base text-stone-500"
          dangerouslySetInnerHTML={{ __html: product?.description || "" }}
        ></div>

        <motion.div
          key={totalPrice}
          initial={{
            backgroundColor: "#fff",
          }}
          animate={{
            backgroundColor: "#fff",
          }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="-mx-3 -my-1 mt-6 flex w-max flex-col px-3 py-1"
        >
          <p className="text-lg font-medium sm:text-2xl">
            {currencyFormatter({ totalPrice })}
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default ProductDetails;
