import {defineType, defineField} from "sanity";

export default defineType({
  name: "activity",
  title: "Activity",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: r => r.required() }),
    defineField({ name: "category", title: "Catégorie", type: "string" }),
    defineField({ name: "distance", title: "Distance", type: "string" }),
    defineField({ name: "excerpt", title: "Description courte", type: "text" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "link", title: "Lien", type: "url" }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
