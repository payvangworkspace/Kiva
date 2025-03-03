import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../AnimatedStats.css";

const stats = [
  { label: "Trusted by", value: 19, suffix: "+" },
  { label: "Feedback", value: 4000, suffix: "k" },
  { label: "Branches", value: 0, suffix: "+" },
  { label: "Workers", value: 65, suffix: "+" },
];

const AnimatedStats = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="stats-section">
      <h2 className="stats-title">We Always Strive for Excellence</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.span
              className="stat-value"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {counts[index]}
              {stat.suffix}
            </motion.span>
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedStats;

// CSS (Separate file: AnimatedStats.css)
const styles = `
.stats-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8fafc, #e3f2fd);
}

.stats-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #003366;
  margin-bottom: 2rem;
}

.stats-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.stat-box {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  min-width: 180px;
}

.stat-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.stat-value {
  font-size: 2.8rem;
  font-weight: bold;
  color: #007bff;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #555;
  font-weight: 500;
}

@media (max-width: 900px) {
  .stats-title {
    font-size: 2rem;
  }
  .stat-box {
    padding: 1.5rem;
  }
  .stat-value {
    font-size: 2.2rem;
  }
  .stat-label {
    font-size: 1rem;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
