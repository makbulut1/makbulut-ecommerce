import Makbulut from "@medusajs/js-sdk"

// Defaults to standard port for Makbulut server
let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL
}

export const sdk = {
  client: {
    fetch: async () => {
      return {
        products: [
          {
            id: "mock-1",
            title: "Mock Ürün",
            thumbnail: "/mock.jpg",
            variants: [],
            handle: "mock-urun",
            description: "Bu bir mock üründür.",
            images: [],
            tags: [],
            options: [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ],
        count: 1,
      }
    },
  },
}

