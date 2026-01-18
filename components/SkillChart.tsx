"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Java", value: 90 },
  { name: "Spring", value: 85 },
  { name: "Quarkus", value: 80 },
  { name: "FlutterFlow", value: 75 },
];

export default function SkillChart() {
  return (
    <div className="card h-80">
      <h3 className="font-semibold mb-4">Skill Proficiency</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="rgb(var(--accent))"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

