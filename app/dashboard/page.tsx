// app/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import CodeUploadForm from '@/components/CodeUploadForm'
import CodePanel from '@/components/CodePanel'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [codes, setCodes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.id) {
      fetchCodes()
    }
  }, [session])

  async function fetchCodes() {
    setLoading(true)
    const { data, error } = await supabase
      .from('codes')
      .select('*')
      .eq('user_id', session?.user?.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
    } else {
      setCodes(data || [])
    }
    setLoading(false)
  }

  if (status === 'loading' || loading) {
    return <div className="flex justify-center items-center h-64">Cargando tu panel...</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">👋 ¡Bienvenido, {session?.user?.name}!</h1>
      
      <CodeUploadForm />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Tus Snippets</h2>

      {codes.length === 0 ? (
        <p className="text-gray-500">Aún no has subido ningún código. ¡Empieza ahora!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codes.map((code) => (
            <CodePanel key={code.id} code={code} />
          ))}
        </div>
      )}
    </div>
  )
}
