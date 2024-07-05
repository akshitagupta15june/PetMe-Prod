import React from 'react';
import NotFound from "../components/404";

function ErrorPage() {
    return (
        <section className="grid-template h-[100vh]">
            <main className="flex flex-col w-full justify-center">
                <NotFound />
            </main>
        </section>
    );
}

export default ErrorPage;