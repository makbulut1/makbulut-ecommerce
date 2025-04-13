import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Makbulut Store",
  description:
    "Topluluk destekli açık kaynak e-ticaret altyapısı. Next.js + Tailwind ile geliştirildi.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero /> {/* Artık Makbulut versiyonu */}
      <div className="py-12 px-4">
        <ul className="flex flex-col gap-y-12">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}