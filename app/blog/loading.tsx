export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 lg:max-w-5xl">
      <div className="mb-12">
        {/* Skeleton cho Header */}
        <div className="h-10 bg-gray-200 rounded w-1/3 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </div>
      
      {/* Skeleton cho Grid Danh sách */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full animate-pulse">
            <div className="h-56 bg-gray-200"></div>
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="mt-auto pt-4 flex justify-between gap-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
