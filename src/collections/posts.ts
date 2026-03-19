import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'published'],
  },

  access: {
    read: () => true, // public API access
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },

    {
      name: 'date',
      type: 'date',
      required: true,
    },

    {
      name: 'excerpt',
      type: 'textarea',
    },

    {
      name: 'content',
      type: 'richText',
    },

    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // uses your existing media collection
          required: true,
        },
      ],
    },

    {
      name: 'location',
      type: 'text',
    },

    {
      name: 'lat',
      type: 'number',
    },

    {
      name: 'lng',
      type: 'number',
    },

    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      index: true,
    },
  ],

  timestamps: true,
}

/*
// Example fields for your Travel Post
fields: [
  { name: 'title', type: 'text', required: true },
  { name: 'date', type: 'date', required: true },
  {
    name: 'images',
    type: 'array', // This allows "more than one picture"
    fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
  },
  { name: 'story', type: 'richText' }, // This is where you'll write your text
  { name: 'locationLink', type: 'text' }, // For your Google Maps link
]

*/
