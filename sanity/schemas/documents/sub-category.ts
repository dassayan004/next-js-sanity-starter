import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { BookA } from "lucide-react";

export default defineType({
  name: "subcategory",
  title: "Sub Category",
  type: "document",
  icon: BookA,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),   
    orderRankField({ type: "subcategory" }),
  ],
});
