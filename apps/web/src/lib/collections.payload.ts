import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";
// import { slateEditor } from "@payloadcms/richtext-slate";


// import {
//   MetaDescriptionField,
//   MetaImageField,
//   MetaTitleField,
//   OverviewField,
//   PreviewField,
// } from "@payloadcms/plugin-seo/fields";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Main",
          fields: [
            {
              name: "tags",
              type: "text",
              label: "Tags (separate tags by commas)",
            },
            {
              name: "description",
              type: "textarea",
            },
            {
              type: "row",
              fields: [
                {
                  name: "author",
                  type: "text",
                },
                {
                  name: "slug",
                  type: "text",
                  unique: true,
                  // required: true,
                  hooks: {
                    beforeChange: [
                      ({ value, data }) => {
                        if (!value) {
                          // console.log("check----------", data.title, data);
                          // @ts-expect-error title is not defined
                          return data.title.toLowerCase().replace(/\s+/g, "-");
                        }
                        return value;
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
              label: "Write body of the content",
              editor: lexicalEditor({}),
              // editor: slateEditor({}),
            },
          ],
        },
        // {
        //   name: "meta",
        //   label: "SEO",
        //   fields: [
        //     OverviewField({
        //       titlePath: "meta.title",
        //       descriptionPath: "meta.description",
        //       imagePath: "meta.image",
        //     }),
        //     MetaTitleField({
        //       hasGenerateFn: true,
        //     }),
        //     MetaImageField({
        //       relationTo: "media",
        //     }),

        //     MetaDescriptionField({}),
        //     PreviewField({
        //       // if the `generateUrl` function is configured
        //       hasGenerateFn: true,

        //       // field paths to match the target field for data
        //       titlePath: "meta.title",
        //       descriptionPath: "meta.description",
        //     }),
        //   ],
        // },
      ],
    },

    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "notes",
      label: "Author Notes",
      type: "textarea",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export const Media: CollectionConfig = {
  slug: "media",

  upload: {
    staticDir: "/public/media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

// export const Course: CollectionConfig = {
//   slug: "course",
//   fields: [
//     {
//       name: "title",
//       type: "text",
//       required: true,
//     },
//     {
//       name: "description",
//       type: "textarea",
//     },
//     {
//       type: "row",
//       fields: [
//         {
//           name: "author",
//           type: "text",
//         },
//         {
//           name: "slug",
//           type: "text",
//           unique: true,
//           hooks: {
//             beforeChange: [
//               ({ value, data }) => {
//                 if (!value) {
//                   // @ts-ignore
//                   return data.title?.toLowerCase().replace(/\s+/g, "-");
//                 }
//                 return value;
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       type: "relationship",
//       name: "chapters",  // Fixed: Plural name for hasMany relationship
//       relationTo: "chapter",  // Must match Chapter collection slug
//       hasMany: true,
//       admin: {
//         description: "Select chapters belonging to this course",
//       }
//     }
//   ]
// }

// export const Chapter: CollectionConfig = {
//   slug: "chapter",  // Fixed: Singular to match relationship reference
//   fields: [
//     {
//       name: "title",
//       type: "text",
//       required: true,
//     },
//     {
//       type: "tabs",
//       tabs: [
//         {
//           label: "Main",
//           fields: [
//             {
//               name: "tags",
//               type: "text",
//               label: "Tags (separate tags by commas)",
//             },
//             {
//               name: "description",
//               type: "textarea",
//             },
//             {
//               type: "row",
//               fields: [
//                 {
//                   name: "author",
//                   type: "text",
//                 },
//                 {
//                   name: "slug",
//                   type: "text",
//                   unique: true,
//                   hooks: {
//                     beforeChange: [
//                       ({ value, data }) => {
//                         if (!value) {
//                           // @ts-ignore
//                           return data.title?.toLowerCase().replace(/\s+/g, "-");
//                         }
//                         return value;
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: "Content",
//           fields: [
//             {
//               name: "content",
//               type: "richText",
//               label: "Write body of the content",
//               editor: lexicalEditor({}),
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "isPublished",
//       type: "checkbox",
//       defaultValue: false,
//       admin: {
//         position: "sidebar",
//       },
//     },
//     {
//       name: "notes",
//       label: "Author Notes",
//       type: "textarea",
//       admin: {
//         position: "sidebar",
//       },
//     },
//     {
//       name: "course",
//       type: "relationship",
//       relationTo: "course",
//       required: true,
//       admin: {
//         position: "sidebar",
//         description: "Parent course for this chapter",
//       }
//     }
//   ],
// };





// export const Chapter: CollectionConfig = {
//   slug: "course",
//   fields: [
//     {
//       name: "title",
//       type: "text",
//       required: true,
//     },
//     {
//       type: "tabs",
//       tabs: [
//         {
//           name: "main",
//           fields: [
//             {
//               name: "thumbnail",
//               type: "upload",
//               relationTo: "media",
//             },

//             {
//               name: "tags",
//               type: "text",
//               label: "Tags (separate tags by commas)",
//             },
//             {
//               name: "description",
//               type: "textarea",
//             },
//             {
//               type: "row",
//               fields: [
//                 {
//                   name: "author",
//                   type: "text",
//                 },
//                 {
//                   name: "slug",
//                   type: "text",
//                   unique: true,
//                   // required: true,
//                   hooks: {
//                     beforeChange: [
//                       ({ value, data }) => {
//                         if (!value) {
//                           // console.log("check----------", data.title, data);
//                           // @ts-ignore
//                           return data.title.toLowerCase().replace(/\s+/g, "-");
//                         }
//                         return value;
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: "Content",
//           fields: [
//             {
//               name: "content",
//               type: "richText",
//               label: "Write body of the content",
//               editor: lexicalEditor({}),
//             },
//           ],
//         },
//         {
//           name: "meta",
//           label: "SEO",
//           fields: [
//             OverviewField({
//               titlePath: "meta.title",
//               descriptionPath: "meta.description",
//               imagePath: "meta.image",
//             }),
//             MetaTitleField({
//               hasGenerateFn: true,
//             }),
//             MetaImageField({
//               relationTo: "media",
//             }),

//             MetaDescriptionField({}),
//             PreviewField({
//               // if the `generateUrl` function is configured
//               hasGenerateFn: true,

//               // field paths to match the target field for data
//               titlePath: "meta.title",
//               descriptionPath: "meta.description",
//             }),
//           ],
//         },
//       ],
//     },

//     {
//       name: "isPublished",
//       type: "checkbox",
//       defaultValue: false,
//       admin: {
//         position: "sidebar",
//       },
//     },
//     {
//       name: "notes",
//       label: "Author Notes",
//       type: "textarea",
//       admin: {
//         position: "sidebar",
//       },
//     },
//   ],
// };
// export const Chapter: CollectionConfig = {
//   slug: "course",
//   fields: [
//     {
//       name: "title",
//       type: "text",
//       required: true,
//     },
//     {
//       type: "tabs",
//       tabs: [
//         {
//           name: "main",
//           fields: [
//             {
//               name: "thumbnail",
//               type: "upload",
//               relationTo: "media",
//             },

//             {
//               name: "tags",
//               type: "text",
//               label: "Tags (separate tags by commas)",
//             },
//             {
//               name: "description",
//               type: "textarea",
//             },
//             {
//               type: "row",
//               fields: [
//                 {
//                   name: "author",
//                   type: "text",
//                 },
//                 {
//                   name: "slug",
//                   type: "text",
//                   unique: true,
//                   // required: true,
//                   hooks: {
//                     beforeChange: [
//                       ({ value, data }) => {
//                         if (!value) {
//                           // console.log("check----------", data.title, data);
//                           // @ts-ignore
//                           return data.title.toLowerCase().replace(/\s+/g, "-");
//                         }
//                         return value;
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: "Content",
//           fields: [
//             {
//               name: "content",
//               type: "richText",
//               label: "Write body of the content",
//               editor: lexicalEditor({}),
//             },
//           ],
//         },
//         {
//           name: "meta",
//           label: "SEO",
//           fields: [
//             OverviewField({
//               titlePath: "meta.title",
//               descriptionPath: "meta.description",
//               imagePath: "meta.image",
//             }),
//             MetaTitleField({
//               hasGenerateFn: true,
//             }),
//             MetaImageField({
//               relationTo: "media",
//             }),

//             MetaDescriptionField({}),
//             PreviewField({
//               // if the `generateUrl` function is configured
//               hasGenerateFn: true,

//               // field paths to match the target field for data
//               titlePath: "meta.title",
//               descriptionPath: "meta.description",
//             }),
//           ],
//         },
//       ],
//     },

//     {
//       name: "isPublished",
//       type: "checkbox",
//       defaultValue: false,
//       admin: {
//         position: "sidebar",
//       },
//     },
//     {
//       name: "notes",
//       label: "Author Notes",
//       type: "textarea",
//       admin: {
//         position: "sidebar",
//       },
//     },
//   ],
// };
