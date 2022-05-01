
import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
function Page() {
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
            
            </>
);
}

createRoot(document.getElementById("root")).render(<Page />);
