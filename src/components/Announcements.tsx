const event = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    date: " 01-01-2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    date: " 01-01-2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    date: " 01-01-2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    date: " 01-01-2025",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4 m">Announcements</h1>
        <span className="text-sm text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {event.map((ev, idx) => {
          const colors = ["bg-lamaSkyLight", "bg-lamaYellowLight", "bg-lamaPurpleLight"];
          const bg = colors[idx % colors.length];
          return (
            <div key={ev.id} className={`p-4 rounded-xl ${bg}`}>
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-gray-600">{ev.title}</h1>
                <span className="text-sm text-gray-300 bg-white rounded-md px-1 py-1">
                  {ev.date}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{ev.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
