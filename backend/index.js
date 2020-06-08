const { Keystone } = require('@keystonejs/keystone')
const { PasswordAuthStrategy } = require('@keystonejs/auth-password')
const { StaticApp } = require('@keystonejs/app-static')
const {
  Integer,
  Text,
  Checkbox,
  Password,
  Slug,
  Select,
  Color,
  DateTime,
  Relationship,
  CloudinaryImage,
} = require('@keystonejs/fields')
const { Markdown } = require('@keystonejs/fields-markdown')
const { GraphQLApp } = require('@keystonejs/app-graphql')
const { AdminUIApp } = require('@keystonejs/app-admin-ui')
const { CloudinaryAdapter } = require('@keystonejs/file-adapters')
const initialiseData = require('./initial-data')

require('dotenv').config()

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: process.env.CLOUDINARY_FOLDER,
})
/* keystone-cli: generated-code */
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose')
const PROJECT_NAME = process.env.PROJECT_NAME
/* /keystone-cli: generated-code */

var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: true,
  optionsSuccessStatus: 204,
}

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  cors: corsOptions,
  onConnect: async (keystone) => {
    initialiseData(keystone)
  },
})

const createdAtDefault = () => new Date().toISOString()
const beforeChangeHook = (args) => {
  let operation = args.operation
  let context = args.context

  if (operation === 'update') {
    // console.log('update')
    args.resolvedData.updatedAt = new Date().toISOString()
  } else if (operation === 'create') {
    // console.log('create')
    let user = context.authedItem
    args.resolvedData.createdBy = user.id
  }
}
// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin)
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false
  }
  return { id: user.id }
}
const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth)
  const isOwner = access.userOwnsItem(auth)
  return isAdmin ? isAdmin : isOwner
}
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner }

keystone.createList('User', {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
})

keystone.createList('PageCategory', {
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      from: 'name',
      isUnique: true,
      access: {
        update: false,
        create: false,
      },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    menuLabel: { type: Text },
    pages: { type: Relationship, ref: 'Page.category', many: true },
  },
})

keystone.createList('Page', {
  labelField: 'name',
  fields: {
    name: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      from: 'name',
      isUnique: true,
      access: {
        update: false,
        create: false,
      },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    state: {
      type: Select,
      options: ['draft', 'published', 'archived'],
      default: () => 'draft',
    },
    order: { type: Integer },
    group: {
      type: Select,
      options: ['Selected Works', 'Other'],
      default: 'Other',
    },
    pictures: { type: Relationship, ref: 'Picture', many: true },
    galleries: { type: Relationship, ref: 'ImageGallery', many: true },
    textblocks: { type: Relationship, ref: 'TextBlock', many: true },
    category: { type: Relationship, ref: 'PageCategory.pages' },
  },
  hooks: {
    beforeChange: beforeChangeHook,
  },
})

keystone.createList('Picture', {
  labelField: 'title',
  fields: {
    title: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      isUnique: true,
      from: 'title',
      access: { create: false, update: false },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    picture: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    gridArea: { type: Integer },
  },
})

keystone.createList('ImageGallery', {
  labelField: 'title',
  fields: {
    title: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      isUnique: true,
      from: 'title',
      access: { create: false, update: false },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    pictures: { type: Relationship, ref: 'Picture', many: true },
    gridArea: { type: Integer },
  },
  hooks: {
    beforeChange: beforeChangeHook,
  },
})

keystone.createList('TextBlock', {
  labelField: 'title',
  fields: {
    title: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      isUnique: true,
      from: 'title',
      access: { create: false, update: false },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    content: { type: Markdown },
    gridArea: { type: Integer },
  },
  hooks: {
    beforeChange: beforeChangeHook,
  },
})

keystone.createList('Setting', {
  fields: {
    name: { type: Text, isRequired: true },
    slug: {
      type: Slug,
      from: 'name',
      isUnique: true,
      access: { update: false, create: false },
    },
    createdAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    createdBy: {
      type: Relationship,
      ref: 'User',
      isRequired: true,
      access: {
        update: false,
        create: false,
      },
    },
    updatedAt: {
      type: DateTime,
      defaultValue: createdAtDefault,
      access: {
        create: false,
        update: false,
      },
    },
    active: { type: Checkbox },
    titleImage: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    bannerTexture: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    bannerText: { type: Text, default: (_) => 'Hello World' },
    primaryColor: { type: Color, default: () => 'rgba(247,199,169,1)' },
  },
  hooks: {
    beforeChange: async ({
      operation,
      resolvedData,
      context,
      actions: { query },
    }) => {
      if (operation === 'update') {
        // console.log('update')
        resolvedData.updatedAt = new Date().toISOString()
      } else if (operation === 'create') {
        // console.log('create')
        let user = context.authedItem
        resolvedData.createdBy = user.id
      }
      if (resolvedData && resolvedData.active) {
        let { errors, data } = await keystone.executeQuery(
          `query {
            allSettings {
              id
            }
          }`,
          { skipAccessControl: true }
        )
        if (errors) {
          console.error(errors)
          throw errors
        }
        console.log(data)
        let allSettings = data ? data.allSettings : []
        try {
          let { errors, data } = await query(
            `mutation UnActivateAll($data: [SettingsUpdateInput] ) {
              updateSettings(data: $data) {
                name
                active
              }
            }`,
            {
              skipAccessControl: true,
              variables: {
                data: allSettings.map((x) => ({
                  id: x.id,
                  data: { active: false },
                })),
              },
            }
          )
          console.log('errors', errors)
          console.log('data', data)
        } catch (err) {
          console.error(err)
        }
      }
    },
  },
})

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
})

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy,
    }),
    new StaticApp({
      path: '/',
      src: './public',
      fallback: 'index.html',
    }),
  ],
}
