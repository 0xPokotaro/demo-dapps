import { useState, useEffect } from 'react'
import { useAccount, useContractRead } from 'wagmi'

import MockNftAbi from "@/config/MockNftAbi.json"

const useBalanceOf = () => {
  const [balance, setBalance] = useState<string>('0')
  const [enabled, setEnabled] = useState<boolean>(false)

  const { address } = useAccount()

  const {
    data: balanceWei,
    refetch,
    isError,
    isLoading,
  } = useContractRead({
    address: "0x54711edf2918cc1d1bd93eaac4b50b3c4238cd62",
    abi: MockNftAbi,
    functionName: 'balanceOf',
    args: [address],
    enabled: enabled,
    watch: true,
    onSuccess(data: bigint) {
      console.log('onSuccess: ', data)
      return data
    },
    onError() {
      return BigInt(0)
    },
  })

  useEffect(() => {
    let result = '0'

    if (balanceWei) {
      result = balanceWei.toString()
    }

    setBalance(result)
  }, [balanceWei])

  useEffect(() => {
    setEnabled(Boolean(address))
  }, [address])

  useEffect(() => {
    ;async () => {
      if (!enabled) return
      await refetch()
    }
  }, [address])

  return {
    balanceWei,
    balance,
    isError,
    isLoading,
  }
}

export default useBalanceOf
