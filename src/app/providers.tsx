'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const projectId = 'd48ea8b5f03a7ead10e406f4518f6810'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

const chains = [mainnet, sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'light' })

export function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
