import type { CollectionConfig, slugField } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Tittel",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "summary",
      label: "Sammendrag",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      label: "Pris",
      type: "number",
      required: true,
      min: 0,
    },
  ],
};
