import {defineType, defineField} from "sanity";

export default defineType({
  name: "villa",
  title: "Villa",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: r => r.required() }),
    defineField({ name: "subtitle", title: "Sous-titre", type: "string" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "usp", title: "Points forts", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "equipments", title: "Équipements", type: "array", of: [{ type: "string" }] }),
  ],
});

