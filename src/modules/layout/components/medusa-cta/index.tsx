import { Text } from "@medusajs/ui"

import Makbulut from "../../../common/icons/makbulut" // kendi logonun svg dosyası
import NextJs from "../../../common/icons/nextjs"

const MakbulutCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://github.com/makbulut1/makbulut-ecommerce" target="_blank" rel="noreferrer">
        <Makbulut fill="#9ca3af" className="fill-[#9ca3af] w-5 h-5" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" className="w-5 h-5" />
      </a>
    </Text>
  )
}

export default MakbulutCTA