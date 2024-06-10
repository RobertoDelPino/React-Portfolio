import {Event} from "@domain/Interfaces/Event.tsx";


interface EventCardProps {
    event: Event
}

export const EventCard = ({event}: EventCardProps) => <>
    <article className="hidden md:block border-b-2 border-black dark:border-white pb-4 mt-3">
        <article className="flex justify-between">
            <h3 className="text-xl font-medium dark:text-white">{event.name}</h3>
            <a href={event.website} target="_blank"><p
                className=" bg-amber-300 text-black font-bold dark:hover:bg-amber-400 inline-block rounded-xl w-24 text-center ">Website</p>
            </a>

        </article>
        <p className="mt-4 dark:text-gray-300">📅 {event.time}</p>
    </article>

    <article className="block md:hidden border-b-2 border-black dark:border-white pb-4 my-8">
        <h3 className="text-lg font-medium dark:text-white">{event.name}</h3>
        <p className="dark:text-gray-300 mt-4">📅 {event.time}</p>
        <p className="mt-3"><a href={event.website} target="_blank"
                               className="bg-amber-300 font-bold dark:hover:bg-amber-400 inline-block rounded-xl w-24 text-center ">Website</a>
        </p>
    </article>
</>;