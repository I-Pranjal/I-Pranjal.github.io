import React, { useState, useEffect } from "react";
import axios from "axios";



// GitHub Icon
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-green-400"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 
        3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 
        6.44-7A5.44 5.44 0 0 0 20 4.77 
        5.07 5.07 0 0 0 19.91 1S18.73.65 
        16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 
        5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
        5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 
        6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Main Component
const DeveloperStats = () => {
  const [leetCodeRank, setLeetCodeRank] = useState("2,77,117");
  const [leetCodeSolved, setLeetCodeSolved] = useState(0);
  const [githubRepos, setGithubRepos] = useState(0);
  const [isSpinning, setIsSpinning] = useState(true);

  const targetLeetCodeRank = 277117;
  const targetLeetCodeSolved = 376;
  const [targetGithubRepos, setTargetGithubRepos] = useState(0);

  // Fetch number of GitHub Repositories
    useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await axios.get("https://api.github.com/users/I-Pranjal/repos");
        const repos = response.data.filter(repo => !repo.fork);
        console.log("GitHub Repositories:", repos.length);
        setTargetGithubRepos(repos.length) ;
        } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };
    fetchGithubRepos();
    }, []);

//   // Animate LeetCode Rank
//   useEffect(() => {
//     if (isSpinning) {
//       const spinInterval = setInterval(() => {
//         setLeetCodeRank(Math.floor(Math.random() * 10000));
//       }, 10);

//       setTimeout(() => {
//         clearInterval(spinInterval);
//         setIsSpinning(false);
//         let current = Math.floor(Math.random() * 10000);
//         const finalInterval = setInterval(() => {
//           if (Math.abs(current - targetLeetCodeRank) < 10) {
//             setLeetCodeRank(targetLeetCodeRank);
//             clearInterval(finalInterval);
//           } else {
//             current += targetLeetCodeRank > current ? 10 : -10;
//             setLeetCodeRank(current);
//           }
//         }, 50);
//       }, 2000);
//     }
//   }, [isSpinning]);

  // Animate LeetCode Solved & GitHub Repos
  useEffect(() => {
    let startTime;
    const duration = 6000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setLeetCodeSolved(Math.floor(easedProgress * targetLeetCodeSolved));
      setGithubRepos(Math.floor(easedProgress * targetGithubRepos));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetGithubRepos]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <div className="p-6 sm:p-8 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* LeetCode Rank */}
          <div className=" rounded-lg p-6 shadow border border-green-400 flex flex-col items-center">
            <p className="text-green-400 font-semibold uppercase text-xs sm:text-sm mb-2">LeetCode Rank</p>
            <p className="text-4xl font-extrabold text-green-300">#{leetCodeRank}</p>
            <p className="text-green-400 text-xs mt-1">Global Ranking</p>
          </div>

          {/* LeetCode Solved */}
          <div className=" rounded-lg p-6 shadow border border-green-400 flex flex-col items-center">
            <p className="text-green-400 font-semibold uppercase text-xs sm:text-sm mb-2">LeetCode Solved</p>
            <p className="text-4xl font-extrabold text-green-300">{leetCodeSolved}</p>
            <p className="text-green-400 text-xs mt-1">Problems Completed</p>
          </div>

          {/* GitHub Repos */}
          <div className="rounded-lg p-6 shadow border border-green-400 flex flex-col items-center">
            <div className="flex items-center mb-2">
              <GitHubIcon />
              <span className="text-green-400 font-semibold uppercase text-xs sm:text-sm ml-2">GitHub Repos</span>
            </div>
            <p className="text-4xl font-extrabold text-green-300">{githubRepos}</p>
            <p className="text-green-400 text-xs mt-1">Public Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperStats;
