'use client'

import useMint from '@/hooks/useMint'

const MintButton = () => {
  const { write, data } = useMint()

  const handleClick = () => {
    console.log('mint')
    write({
      args: [1]
    })

  }

  return (
    <>
      <button onClick={() => handleClick()}>mint</button>
      {data?.hash && (
        <div>
          <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`}>{`https://sepolia.etherscan.io/tx/${data?.hash}`}</a>
        </div>
      )}
    </>
  )
}

export default MintButton
