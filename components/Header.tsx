// components/Header.tsx
'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyCodeWeb
        </Link>

        <nav>
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Hola, {session.user?.name}</span>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Panel
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link
              href="/"
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Iniciar sesión
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
