import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/kadianAnirudh/repos"
  );
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <ul className="repo-list">
        {repos.map((repo) => (
          <li className={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3> {repo.name} </h3>
              <p> {repo.description} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
