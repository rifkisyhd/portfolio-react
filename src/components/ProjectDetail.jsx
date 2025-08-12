import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function fetchProject() {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .eq("slug", slug)
                .single();
            if (!error) setProject(data);
        }
        fetchProject();
    }, [slug]);

    if (!project) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-orange-500 text-xl">Loading...</span>
            </div>
        );
    }

    return (
        <section className="container mx-auto p-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-96 object-cover rounded mb-6"
                />
                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                    {project.title}
                </h2>
                <p className="text-lg mb-4">{project.description}</p>
                {/* Tambahkan detail lain sesuai kebutuhan */}
            </div>
        </section>
    );
};

export default ProjectDetail;
