import React, { useState } from 'react';
import "tailwindcss/tailwind.css"

function Main() {
    const [store, setStore] = useState('')

    function createHandler(event) {
        event.preventDefault();
        let store = {
            Location: event.target.location.value,
            Minimum: event.target.min.value,
            Maximum: event.target.max.value,
            Average: event.target.ave.value,
        }

        setStore(store)
    }

    return (
        <main className="grid w-full p-12 px-0 text-center bg-green-100 justify-items-stretch">
            <form onSubmit={createHandler} className="px-15 py-5 mx-12 bg-green-300 rounded w-4/5justify-self-center">
                <h2 className="p-7 text-2xl">Create Cookie Stand</h2>
                <label className="w-5/6">Location:<input className="w-5/6 m-4 " name="location" /></label>
                <section className="py-6">
                    <label className="inline-block m-4">Minimum Customers per Hour<br /><input className="w-60" name="min" /></label>
                    <label className="inline-block m-4">Maximum Customers per Hour<br /><input className="w-60" name="max" /></label>
                    <label className="inline-block m-4">Average Cookies per Sale<br /><input className="w-60" name="ave" /></label>
                    <button className="p-10 py-5 m-4 bg-green-400" type="submit">Create</button>
                </section>
            </form>

            <section className="text=center p-12">
                <p className='m-4 text-gray-600'></p>
                <p className="m-4">{JSON.stringify(store)}</p>
            </section>
        </main>
    )
}

export default Main;