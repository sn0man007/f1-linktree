import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const f1Links = [
    { name: "Official F1 Site", url: "https://www.formula1.com/" },
    { name: "F1 TV", url: "https://f1tv.formula1.com/" },
    { name: "Live Timing", url: "https://www.formula1.com/en/f1-live.html" },
    { name: "Driver Standings (2025)", url: "https://www.formula1.com/en/results.html/2025/drivers.html" },
    { name: "Constructor Standings (2025)", url: "https://www.formula1.com/en/results.html/2025/team.html" },
    { name: "Race Calendar (2025)", url: "https://www.formula1.com/en/racing/2025.html" },
    { name: "Autosport F1 News", url: "https://www.autosport.com/f1/" },
    { name: "F1 Fantasy League", url: "https://fantasy.formula1.com/" },
    { name: "r/formula1 Subreddit", url: "https://www.reddit.com/r/formula1/" },
  ];

  const raceWeekendLinks = [
    { name: "Australian GP", url: "https://www.formula1.com/en/racing/2025/Australia.html", endDate: "2025-03-16", startDateGMT: "2025-03-16T04:00:00Z" },
    { name: "Chinese GP", url: "https://www.formula1.com/en/racing/2025/China.html", endDate: "2025-03-23", startDateGMT: "2025-03-23T07:00:00Z" },
    { name: "Japanese GP", url: "https://www.formula1.com/en/racing/2025/Japan.html", endDate: "2025-04-06", startDateGMT: "2025-04-06T05:00:00Z" },
    { name: "Bahrain GP", url: "https://www.formula1.com/en/racing/2025/Bahrain.html", endDate: "2025-04-13", startDateGMT: "2025-04-13T15:00:00Z" },
    { name: "Saudi Arabian GP", url: "https://www.formula1.com/en/racing/2025/Saudi_Arabia.html", endDate: "2025-04-20", startDateGMT: "2025-04-20T17:00:00Z" },
    { name: "Miami GP", url: "https://www.formula1.com/en/racing/2025/Miami.html", endDate: "2025-05-04", startDateGMT: "2025-05-04T20:00:00Z" },
    { name: "Emilia Romagna GP", url: "https://www.formula1.com/en/racing/2025/Emilia_Romagna.html", endDate: "2025-05-18", startDateGMT: "2025-05-18T13:00:00Z" },
    { name: "Monaco GP", url: "https://www.formula1.com/en/racing/2025/Monaco.html", endDate: "2025-05-25", startDateGMT: "2025-05-25T13:00:00Z" },
    { name: "Spanish GP", url: "https://www.formula1.com/en/racing/2025/Spain.html", endDate: "2025-06-01", startDateGMT: "2025-06-01T13:00:00Z" },
    { name: "Canadian GP", url: "https://www.formula1.com/en/racing/2025/Canada.html", endDate: "2025-06-15", startDateGMT: "2025-06-15T18:00:00Z" },
    { name: "Austrian GP", url: "https://www.formula1.com/en/racing/2025/Austria.html", endDate: "2025-06-29", startDateGMT: "2025-06-29T13:00:00Z" },
    { name: "British GP", url: "https://www.formula1.com/en/racing/2025/Great_Britain.html", endDate: "2025-07-06", startDateGMT: "2025-07-06T14:00:00Z" },
    { name: "Belgian GP", url: "https://www.formula1.com/en/racing/2025/Belgium.html", endDate: "2025-07-27", startDateGMT: "2025-07-27T13:00:00Z" },
    { name: "Hungarian GP", url: "https://www.formula1.com/en/racing/2025/Hungary.html", endDate: "2025-08-03", startDateGMT: "2025-08-03T13:00:00Z" },
    { name: "Dutch GP", url: "https://www.formula1.com/en/racing/2025/Netherlands.html", endDate: "2025-08-31", startDateGMT: "2025-08-31T13:00:00Z" },
    { name: "Italian GP", url: "https://www.formula1.com/en/racing/2025/Italy.html", endDate: "2025-09-07", startDateGMT: "2025-09-07T13:00:00Z" },
    { name: "Azerbaijan GP", url: "https://www.formula1.com/en/racing/2025/Azerbaijan.html", endDate: "2025-09-21", startDateGMT: "2025-09-21T11:00:00Z" },
    { name: "Singapore GP", url: "https://www.formula1.com/en/racing/2025/Singapore.html", endDate: "2025-10-05", startDateGMT: "2025-10-05T12:00:00Z" },
    { name: "United States GP", url: "https://www.formula1.com/en/racing/2025/United_States.html", endDate: "2025-10-19", startDateGMT: "2025-10-19T19:00:00Z" },
    { name: "Mexico City GP", url: "https://www.formula1.com/en/racing/2025/Mexico.html", endDate: "2025-10-26", startDateGMT: "2025-10-26T20:00:00Z" },
    { name: "São Paulo GP", url: "https://www.formula1.com/en/racing/2025/Brazil.html", endDate: "2025-11-09", startDateGMT: "2025-11-09T17:00:00Z" },
    { name: "Las Vegas GP", url: "https://www.formula1.com/en/racing/2025/Las_Vegas.html", endDate: "2025-11-22", startDateGMT: "2025-11-23T04:00:00Z" },
    { name: "Qatar GP", url: "https://www.formula1.com/en/racing/2025/Qatar.html", endDate: "2025-11-30", startDateGMT: "2025-11-30T16:00:00Z" },
    { name: "Abu Dhabi GP", url: "https://www.formula1.com/en/racing/2025/Abu_Dhabi.html", endDate: "2025-12-07", startDateGMT: "2025-12-07T13:00:00Z" },
  ];

  const linkClassName = "block w-full px-6 py-2 text-center text-base font-medium bg-gray-800/70 rounded-md border border-gray-600 hover:bg-red-700 hover:border-red-500 transition-all duration-200 ease-in-out transform hover:scale-[1.02] shadow-md hover:shadow-red-500/40 backdrop-blur-sm";
  // Checkered flag style for next race
  const nextRaceClassName = `
    bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%3E%3Crect%20width%3D%2710%27%20height%3D%2710%27%20fill%3D%27%231f2937%27%2F%3E%3Crect%20x%3D%2710%27%20y%3D%2710%27%20width%3D%2710%27%20height%3D%2710%27%20fill%3D%27%231f2937%27%2F%3E%3Crect%20x%3D%2710%27%20width%3D%2710%27%20height%3D%2710%27%20fill%3D%27%23e5e7eb%27%2F%3E%3Crect%20y%3D%2710%27%20width%3D%2710%27%20height%3D%2710%27%20fill%3D%27%23e5e7eb%27%2F%3E%3C/svg%3E")] 
    [background-size:20px_20px] 
    text-red-600 
    font-bold 
    [text-shadow:0_0_2px_white,0_0_2px_white] 
    border-gray-400 
    hover:opacity-90 
    hover:border-gray-300 
    hover:shadow-lg
  `;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextRaceIndex = raceWeekendLinks.findIndex(race => new Date(race.endDate) >= today);
  const nextRaceForTimer = nextRaceIndex !== -1 ? raceWeekendLinks[nextRaceIndex] : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white p-4 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-extrabold italic text-center my-8 text-red-600">
        Formula 1 Hub
      </h1>

      {nextRaceForTimer && (
        <CountdownTimer
          targetDate={nextRaceForTimer.startDateGMT}
          raceName={nextRaceForTimer.name}
        />
      )}

      <main className="w-full max-w-4xl p-6 bg-black bg-opacity-50 rounded-xl shadow-lg backdrop-blur-sm flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-400">
            Key Links
          </h2>
          <div className="space-y-3">
            {f1Links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-center mb-6 text-red-400">
            2025 Race Weekends
          </h2>
          <div className="space-y-3 pr-2 max-h-[460px] overflow-y-auto">
            {raceWeekendLinks.map((link, index) => {
              const isNextRace = index === nextRaceIndex;

              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClassName} ${isNextRace ? nextRaceClassName : ''}`}
                >
                  {isNextRace ? (
                    <span className="bg-white/95 text-black font-semibold px-2 py-0.5 rounded-sm backdrop-blur-sm border-2 border-red-600">
                      {link.name} (Next Race)
                    </span>
                  ) : (
                    link.name
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-400 text-sm">
        Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
