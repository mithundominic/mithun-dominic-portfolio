import { motion } from 'framer-motion';
import './Timeline.scss';

const Timeline = ({ items, type }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
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
            {item.achievements && (
              <ul className="achievements">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;