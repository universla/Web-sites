// components/DiscordGitHubButtons.tsx
export default function DiscordGitHubButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://discord.gg/tu-invite-aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752c4] flex items-center gap-2 shadow-md transition"
        aria-label="Únete a nuestro Discord"
      >
        <svg width="20" height="20" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M13.55 2.314a11.04 11.04 0 00-2.74-.375c.115.13.186.285.207.454a9.78 9.78 0 00-7.94 0 7.09 7.09 0 00.207-.454A11.04 11.04 0 00.55 2.314a.07.07 0 00-.056.033C.002 3.528 0 4.865 0 6.21c0 4.524 3.78 8.19 8.44 8.19s8.44-3.666 8.44-8.19c0-1.345-.002-2.682-.494-3.863a.07.07 0 00-.056-.033zM5.77 10.57c-1.22 0-2.22-1.107-2.22-2.47 0-1.362 1.02-2.47 2.22-2.47 1.23 0 2.24 1.108 2.22 2.47 0 1.363-1.01 2.47-2.22 2.47zm4.46 0c-1.22 0-2.22-1.107-2.22-2.47 0-1.362 1.02-2.47 2.22-2.47 1.23 0 2.24 1.108 2.22 2.47 0 1.363-1.01 2.47-2.22 2.47z"
          />
        </svg>
        Únete a Discord
      </a>

      <a
        href="https://github.com/tu-usuario/my-code-web"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2 shadow-md transition"
        aria-label="Ver código en GitHub"
      >
        <svg width="20" height="20" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        Ver en GitHub
      </a>
    </div>
  )
}
