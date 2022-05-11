import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Edson Repository",
    description: "Nlw Return Repository",
    link: 'https://github.com/edsonjunior1/nlw-return'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}
