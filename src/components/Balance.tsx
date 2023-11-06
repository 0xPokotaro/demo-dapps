'use client'

import useBalanceOf from "@/hooks/useBalanceOf"

const Balance = () => {
  const { balance } = useBalanceOf()

  return (
    <div>
      NFT Amount: {balance.toString()}
    </div>
  )
}

export default Balance
