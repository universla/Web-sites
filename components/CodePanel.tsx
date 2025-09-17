// components/CodePanel.tsx
export default function CodePanel({ code }: { code: any }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{code.title}</h3>
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
          {code.language}
        </span>
      </div>
      <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm overflow-x-auto">
        <code>{code.code}</code>
      </pre>
      <div className="text-xs text-gray-500 mt-2">
        Creado: {new Date(code.created_at).toLocaleDateString()}
      </div>
    </div>
  )
}
