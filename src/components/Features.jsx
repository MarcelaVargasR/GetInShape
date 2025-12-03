export default function Features() {
  const features = [
    {
      title: "Personalized Workouts",
      text: "Short, effective workouts designed for your goals and lifestyle and Customized training plans based on your goals and level, Strength, cardio, mobility, and fat-loss sessions included.",
      img: "/public/perzonalized-nutrition.webp",
    },
    {
      title: "Flexible Nutrition",
      text: "A simple, balanced approach to eating—no restrictions, just real habits Simple recipes and portion suggestions you can follow daily,Balanced meal ideas for energy and healthy habits.",
      img: "/public/flexible-nutrition.jpg",
    },
    {
      title: "Progress Tracking",
      text: "Track your workouts, meals, and victories to see your growth clearly, Visual charts that show strength, endurance, and consistency.Celebrate milestones as you get closer to your goals.",
      img: "/public/saving-progress.jpeg",
    },
  ];

  return (
    <section id="features" className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl sm:text-4xl font-bold text-white mb-16">
        Transforming Fitness <br />
        <span className="text-blue-400">
          Designed for You to Fit Your Lifestyle
        </span>
      </h2>

      <div className="space-y-24">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center lg:items-start gap-10 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg max-w-md">{item.text}</p>
            </div>

            <div className="flex-1">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-2xl w-full object-cover shadow-2xl border border-slate-800"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
