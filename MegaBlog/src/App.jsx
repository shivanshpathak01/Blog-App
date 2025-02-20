import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import React from "react";
import TinyMCEEditor from "./components/Editor";

function App() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(""); // State for editor content
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    console.log("Editor Content:", newContent);
  };

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
          {/* TinyMCE Editor */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Write Your Content</h2>
            <TinyMCEEditor onChange={handleEditorChange} />
            {/* Content Preview */}
            <div className="mt-4 p-2 bg-white shadow-md">
              <h3 className="text-lg font-semibold">Preview:</h3>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
