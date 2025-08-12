import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase.from("projects").select("*");
            if (!error) setProjects(data);
        }
        fetchProjects();
    }, []);

    return (
        <section id="project" className="mb-8 bg-gray-100 mx-auto p-4 mt-8">
            <div className="container mx-auto text-gray-800">
                <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">
                    Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, idx) => (
                        <div
                            className="bg-white p-4 rounded-lg shadow-md"
                            key={idx}>
                            <img
                                src={p.image_url}
                                alt={p.title}
                                className="h-80 w-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {p.title}
                            </h3>
                            <p className="text-base mb-4">{p.description}</p>
                            <button className="rounded bg-orange-500 text-white px-4 py-2 hover:bg-orange-400">
                                <Link to={`/${p.slug}`}>Selengkapnya</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
