import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import LoadingScreen from "./Components/Ui/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function App() {

    const [loading, setLoading] = useState(
        !sessionStorage.getItem("loading-shown")
    );

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 120,
            easing: "ease-out-cubic",
        });
    }, []);

    const handleLoadingFinish = () => {
        sessionStorage.setItem("loading-shown", "true");
        setLoading(false);
    }

    if (loading) {
        return (
            <LoadingScreen
                onFinish={handleLoadingFinish}
            />
        );
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
        </Routes>
    );
}