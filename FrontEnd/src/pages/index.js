import React, { useState } from "react";
import UserList from "@/components/users/list";
import NavBar from "@/components/common/elements/navbar";
import ProtectedRoute from "@/components/protectedRoute";
import Layout from "@/components/common/layout/user";


export default function Home() {
    return (
        <>
            <Layout>
            <div className="container">
            <NavBar/>
            <UserList />
            </div>
            </Layout>
        </>
    )
}
