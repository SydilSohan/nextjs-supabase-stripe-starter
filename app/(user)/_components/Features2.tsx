import React from 'react'
import { Home, User, Circle, ShieldOff, Sun, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {}

const Features2 = () => {
    const features = [
        {
            icon: <Home />,
            title: "Shooting Stars",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
        {
            icon: <User />,
            title: "The Catalyzer",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
        {
            icon: <Circle />,
            title: "Neptune",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
        {
            icon: <ShieldOff />,
            title: "Melanchole",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
        {
            icon: <Sun />,
            title: "Bunker",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
        {
            icon: <LifeBuoy />,
            title: "Ramona Falls",
            description: "Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
        },
    ];

    return (
        <section className="text-gray-600 body-font max-w-7xl">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Pitchfork Kickstarter Taxidermy
                    </h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                        gentrify, subway tile poke farm-to-table.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {features.map((feature, index) => (
                        <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-orange-100 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                    {feature.title}
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <Button className="flex mx-auto mt-16 text-lg">
                    Sign Up
                </Button>
            </div>
        </section>
    )
}

export default Features2
