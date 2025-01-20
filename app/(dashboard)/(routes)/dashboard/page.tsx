const DashboardPage = ({
    children
}: {
    children: React.ReactNode;
}) =>  {
  return (    
    <div>
       This is the DashboardPage (Protected)
        <main>
            {children}
        </main>
    </div>
    );
}

export default DashboardPage;
  