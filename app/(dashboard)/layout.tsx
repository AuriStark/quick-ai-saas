import Navbar from "@/components/navbar";


const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) =>  {
  return (    
    <div>
        <div className="h-full relative">
            <div className="hidden h-full md:flex
            md:flex-col md:fixed md:insert-y-0 z-[80]
            bg-gray-900">
                Hello Sidebar
            </div>
        </div>
        <main className="md:pl-72">
            <Navbar />
                {children}
        </main>
    </div>
    );
}

export default DashboardLayout;
  