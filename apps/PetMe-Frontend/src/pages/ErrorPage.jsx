import React from 'react';
import Error from '../components/Error'

function ErrorPage() {
    return (
        <section className="grid-template h-[100vh]">
            <main className="flex flex-col w-full justify-center">
                <Error />
            </main>
        </section>
    );
}

export default ErrorPage;