import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ——— lecture & validation des ENV (trim pour enlever espaces) ———
const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim();
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "production").trim();

// Si tu veux DIAGNOSE vite fait, décommente la ligne ci-dessous pour voir la valeur côté serveur :
// console.log("[SANITY ENV]", { projectId, dataset });

if (!projectId || !/^[a-z0-9-]+$/.test(projectId)) {
  // ⬇️ Basculer sur un hardcode temporaire pour être sûr que ça démarre :
  // const fallback = "xjicb5t5"; // <- ton vrai projectId
  // throw new Error(`Invalid Sanity projectId. Got "${projectId}". Try fallback "${fallback}" or fix .env.local`);
  throw new Error(`Invalid Sanity projectId. Got "${projectId}". Vérifie .env.local à la racine du FRONT (pas dans studio).`);
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (src: any) => builder.image(src).width(1600).url();
