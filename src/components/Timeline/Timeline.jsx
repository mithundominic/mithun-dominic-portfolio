import { motion } from "framer-motion";
import "./Timeline.scss";

const Timeline = ({ items, type }) => {
  console.log("items", items);
  console.log("type", type);
  console.log("items", items);
  console.log("type", type);
  console.log(
    "items.map",
    items.map((item, index) => item)
  );
  console.log("items.length", items.length);

  return (
    <div className={`${type !== "experience" ? "timeline" : ""}`.trim()}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="timeline-content">
            <div className="timeline-date">{item.date}</div>
            <h3>{item.title}</h3>
            <h4>{item.organization}</h4>
            <p>{item.description}</p>
            {item.achievements && Array.isArray(item.achievements) && (
              <div className="achievements">
                {item.achievements.map((achievement, i) => (
                  <div key={i} className="achievement-item">
                    <h5>{achievement.project}</h5>
                    <ul>
                      {achievement.details.map((detail, j) => (
                        <li key={j}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
