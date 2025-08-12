import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        async function fetchProjectAndDetail() {
            // Ambil project berdasarkan slug
            const { data: projectData, error: projectError } = await supabase
                .from("projects")
                .select("*")
                .eq("slug", slug)
                .single();
            if (!projectError && projectData) {
                setProject(projectData);
                // Ambil detail berdasarkan project_id
                const { data: detailData, error: detailError } = await supabase
                    .from("project_details")
                    .select("*")
                    .eq("project_id", projectData.id)
                    .single();
                if (!detailError) setDetail(detailData);
            }
        }
        if (slug) fetchProjectAndDetail();
    }, [slug]);

    if (!project || !detail) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-orange-500 text-xl">Coming Soon...</span>
            </div>
        );
    }

    return (
        <div>
            <Navbar />

            <section className="p-4 bg-gray-100 min-h-screen">
                <div className="container mx-auto text-gray-800">
                    <h1 className="text-4xl md:text-4xl font-bold mb-5 mt-24 md:mt-40 text-center">
                        {project.title ? project.title : "Judul Project"}
                    </h1>
                    <div className="flex justify-center mb-12">
                        <img
                            src={detail.thumbnail}
                            className="w-3/4 md:w-3/4 h-auto rounded-lg shadow-lg"
                            alt={project.title}
                        />
                    </div>

                    <section id="fitur">
                        <h2 className="text-3xl font-semibold mb-4 text-center text-orange-500">
                            Fitur Utama
                        </h2>
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 mx-auto w-full md:w-3/4">
                            {detail.fitur &&
                                detail.fitur.map((fitur, idx) => (
                                    <div
                                        className="bg-white p-4 rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300"
                                        key={idx}>
                                        <i
                                            className={`${fitur.icon} text-4xl text-orange-500 mr-4`}
                                        />
                                        <h3 className="text-xl font-semibold mb-2">
                                            {fitur.title}
                                        </h3>
                                        <p className="text-base md:text-lg mb-2">
                                            {fitur.desc}
                                        </p>
                                    </div>
                                ))}
                        </section>
                    </section>

                    <section id="user-research">
                        <h2 className="text-3xl font-semibold mb-4 text-center text-orange-500">
                            Ringkasan User Research
                        </h2>
                        <p className="text-base md:text-lg mb-12 text-center">
                            {detail.user_research}
                            {detail.user_research_link && (
                                <>
                                    {" "}
                                    <a
                                        className="text-blue-600 underline"
                                        href={detail.user_research_link}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Detail hasil survey
                                    </a>
                                </>
                            )}
                        </p>
                    </section>

                    <section id="flowchart">
                        <h2 className="text-3xl font-semibold my-4 text-center text-orange-500">
                            Flowchart
                        </h2>
                        <div className="flex flex-col items-center mb-12">
                            <a
                                href={detail.flowchart}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={detail.flowchart}
                                    alt="Flowchart"
                                    className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300"
                                />
                            </a>
                            {detail.flowchart_link && (
                                <a
                                    className="text-blue-600 underline mt-2"
                                    href={detail.flowchart_link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Detail Flowchart
                                </a>
                            )}
                        </div>
                    </section>

                    <section id="design-system">
                        <h2 className="text-3xl font-semibold my-4 text-center text-orange-500">
                            Design System
                        </h2>
                        <div className="flex flex-col items-center mb-12">
                            <a
                                href={detail.design_system}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={detail.design_system}
                                    alt="Design System"
                                    className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300"
                                />
                            </a>
                            {detail.design_system_link && (
                                <a
                                    className="text-blue-600 underline mt-2"
                                    href={detail.design_system_link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Detail Design System
                                </a>
                            )}
                        </div>
                    </section>

                    <section id="wireframe">
                        <h2 className="text-3xl font-semibold my-4 text-center text-orange-500">
                            Wireframe
                        </h2>
                        <div className="flex flex-col items-center mb-12">
                            <a
                                href={detail.wireframe}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={detail.wireframe}
                                    alt="Wireframe"
                                    className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300"
                                />
                            </a>
                            {detail.wireframe_link && (
                                <a
                                    className="text-blue-600 underline mt-2"
                                    href={detail.wireframe_link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Detail Wireframe
                                </a>
                            )}
                        </div>
                    </section>

                    <section id="mockup">
                        <h2 className="text-3xl font-semibold my-4 text-center text-orange-500">
                            Mockup
                        </h2>
                        <div className="flex flex-col items-center mb-12">
                            <a
                                href={detail.mockup}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={detail.mockup}
                                    alt="Mockup"
                                    className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300"
                                />
                            </a>
                            {detail.mockup_link && (
                                <a
                                    className="text-blue-600 underline mt-2"
                                    href={detail.mockup_link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Detail Mockup
                                </a>
                            )}
                        </div>
                    </section>

                    <section id="prototype">
                        <h2 className="text-3xl font-semibold my-4 text-center text-orange-500">
                            Prototype
                        </h2>
                        <div className="flex flex-col items-center mb-10">
                            <a
                                href={detail.prototype}
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={detail.prototype}
                                    alt="Prototype"
                                    className="mx-auto w-full md:w-2/4 hover:scale-150 transition-transform duration-300"
                                />
                            </a>
                            {detail.prototype_link && (
                                <a
                                    className="text-blue-600 underline mt-2"
                                    href={detail.prototype_link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Detail Prototype
                                </a>
                            )}
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
