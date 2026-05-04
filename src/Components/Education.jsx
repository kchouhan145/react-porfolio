import React from "react";

const Education = () => {
  const records = [
    {
      title: "Master of Computer Applications",
      institution: "Kurukshetra University, Kurukshetra",
      timeline: "2024 - 2026",
      score: "Pursuing",
    },
    {
      title: "Bachelor of Computer Science",
      institution: "Gurukul Kangri (DU), Haridwar",
      timeline: "2021 - 2024",
      score: "CGPA: 8.15",
    },
  ];

  return (
    <section className="page-shell">
      <div className="text-center mb-8">
        <h2 className="section-title">Education</h2>
        <p className="section-lead mt-2">
          Academic foundation shaped by computer science and practical
          application development.
        </p>
      </div>

      <div className="space-y-5 max-w-3xl mx-auto">
        {records.map((record) => (
          <article key={record.title} className="glass-card p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <h3 className="font-bold text-xl tone-title">{record.title}</h3>
              <span className="chip">{record.timeline}</span>
            </div>
            <p className="tone-body font-semibold">{record.institution}</p>
            <p className="tone-muted mt-2 text-sm">{record.score}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
