import React, { useEffect, useState } from "react";
import axios from "axios";
import "./work.css";

const url =
  "https://api.github.com/users/ratKBD/repos?per_page=100&sort=updated";
const MAX_DESC = 80;

const shorten = (text) => {
  if (!text) return "No description provided.";
  const clean = text.trim();
  return clean.length > MAX_DESC
    ? clean.slice(0, MAX_DESC).trimEnd() + "…"
    : clean;
};

export default function ProjectList() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setRepo(response.data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    getData();
  }, []);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="title-box text-center">
          <h3 className="title-a">Portfolio</h3>
          <p className="subtitle-a">
            The projects delineated below are designed for the purpose of
            self-directed learning.
          </p>
          <div className="line-mf"></div>
        </div>

        <div className="project-grid">
          {repo.map((item) => (
            <a
              key={item.id}
              className="project-card"
              href={item.html_url}
              target="_blank"
              rel="noreferrer"
              title={item.description || item.name}
            >
              <h4 className="project-name">{item.name}</h4>
              <p className="project-desc">{shorten(item.description)}</p>
              <span className="project-link">View on GitHub →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
