import { useContractWrite } from 'wagmi'
import MockNftAbi from "@/config/MockNftAbi.json"

const useMint = () => {
  const { data, isLoading, isSuccess, write, writeAsync } = useContractWrite({
    address: "0x54711edf2918cc1d1bd93eaac4b50b3c4238cd62",
    abi: MockNftAbi,
    functionName: 'mint',
    onSuccess(data) {
      console.log('onSuccess: ', data)
    },
    onError(data) {
      console.log('onError: ', data)
    },
  })

  return {
    write,
    writeAsync,
    data,
    isLoading,
    isSuccess,
  }
}

export default useMint
