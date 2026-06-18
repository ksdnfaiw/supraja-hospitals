import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpCShrqjBNivLsDwdr7FHpoBlYJVYWXDyRH15TdmWVVXWj73jNtxBnz2Jv0JivPhlfyAIadxcaBUW8TzoQWb1sR1xcQ7aslugDpm6_71yZ1S_cLUO2MF5ot75J1Ms-PEOCCgoZt7-a411eu6H_fJj5zmuNE23pkELaSpRTx8sFHx-KVng9JuAQyM8AEKQPg9THR5c1G9qCPiVcJMVkRvJoWWfHOv51ZYfBt7Mz5nP0WEKzz7_fzptvniLPyOuj0_GZrVxuW3CGnFA" 
          style={{ width: '80%', height: '80%', objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  )
}
