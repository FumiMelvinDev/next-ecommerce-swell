import swell from "swell-js";

const storeID = process.env.NEXT_PUBLIC_SWELL_STORE_ID;
const publicKey = process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY;

swell.init(storeID, publicKey, { useCamelCase: true });

export default swell;
