import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";


export default function AppLayout() {
    return (
        <>
            <header><MainHeader /></header>
            <main>
                <Outlet />
            </main>
            
        </>
    )
}