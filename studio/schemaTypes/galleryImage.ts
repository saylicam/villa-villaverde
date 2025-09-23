import {defineType, defineField} from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: r => r.required() }),
    defineField({ name: "title", title: "Titre", type: "string" }),
    defineField({ name: "category", title: "Catégorie", type: "string" }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
