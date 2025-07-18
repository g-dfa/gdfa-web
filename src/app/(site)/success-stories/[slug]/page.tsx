export default function SuccessStoryDetailPage({ params }: { params: Promise<{ slug: string }>}){
    console.log(params)
    return (
        <div className="min-h-screen bg-background">
            <main className="container px-4 mx-auto py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Story Not Found</h1>
                <p className="text-gray-600">The success story you&#39;re looking for doesn&#39;t exist.</p>
            </main>
        </div>
    )
}
