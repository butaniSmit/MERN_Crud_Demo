import ProtectedRoute from "@/components/protectedRoute";

const Layout =({children})=>{
return(
    <>
    <ProtectedRoute>
    {children}
    </ProtectedRoute>
    </>
)
}
export default Layout;