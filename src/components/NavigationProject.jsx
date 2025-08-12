import React from "react";
import { Link } from "react-router-dom";

const NavigationProject = ({ projects = [], currentIndex = 0 }) => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex =
        currentIndex < projects.length - 1 ? currentIndex + 1 : null;

    const prevProject = prevIndex !== null ? projects[prevIndex] : null;
    const nextProject = nextIndex !== null ? projects[nextIndex] : null;

    return (
        <section className="h-16 md:mx-20 mx-5 flex justify-between">
            {prevProject ? (
                <Link
                    className="flex flex-row items-center hover:text-orange-500 hover:animate-pulse"
                    to={`/${prevProject.slug}`}>
                    <div className="mr-4">
                        <i className="fa-solid fa-arrow-left fa-2x"></i>
                    </div>
                    <p>{prevProject.title}</p>
                </Link>
            ) : (
                <div></div>
            )}
            {nextProject ? (
                <Link
                    className="flex flex-row items-center hover:text-orange-500 hover:animate-pulse"
                    to={`/${nextProject.slug}`}>
                    <p>{nextProject.title}</p>
                    <div className="ml-4">
                        <i className="fa-solid fa-arrow-right fa-2x"></i>
                    </div>
                </Link>
            ) : (
                <div></div>
            )}
        </section>
    );
};

export default NavigationProject;
