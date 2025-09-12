"use client"; // Client component

import { useEffect } from "react";

export default function BootstrapLoader() {
  useEffect(() => {
    // Dynamically import Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    // Dynamically import Bootstrap CSS
    import("bootstrap/dist/css/bootstrap.min.css");
    
    // Dynamically import Bootstrap Icons CSS
    import("bootstrap-icons/font/bootstrap-icons.css");

  }, []);

  return null;
}
