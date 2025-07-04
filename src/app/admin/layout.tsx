export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Admin Dashboard</h1>
            {children}
        </>
    );
}
