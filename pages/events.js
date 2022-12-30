import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : "";
  const res = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await res.json();

  return { props: { eventList: data } };
}

function Events({ eventList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventList);

  const filterCategory = async (key) => {
    const res = await fetch(`http://localhost:4000/events?category=${key}`);
    const data = await res.json();

    router.push(`/events?category=${key}`, undefined, { shallow: true });
    //shallow: Cập nhật đường dẫn của trang hiện tại mà không cần chạy lại getServerSideProps
    setEvents(data);
  };

  return (
    <>
      <button onClick={() => filterCategory("sports")}>Sports</button>
      <br />
      <br />
      <button onClick={() => filterCategory("showbiz")}>Showbiz</button>
      <br />
      <br />
      <button onClick={() => filterCategory("technology")}>Technology</button>
      <h1>Lists of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id}:{event.title} {event.date} | {event.category}{" "}
            </h2>
            <p>{event.description}</p>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default Events;
