import {EventCard} from "@components/EventCard/EventCard.tsx";
import {Event} from "@domain/Interfaces/Event.tsx";

export const EventsList = () => {

    const list: Event[] = [
        {
            name: "Voluntariado JSDay Canarias 2023",
            website: "https://jsdaycanarias.com",
            time: "Mayo 2023"
        }
    ]

    return (
        <section className="md:w-[70%]">
            {list.map((event: Event, index) => <EventCard key={index}  event={event}/>)}
        </section>
    )
}