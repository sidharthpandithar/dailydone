function Hello({ person }) {
  return (
    <h1 className="bg-red-900 text-5xl">
      Hello {person.name} {person.job} {person.salary}
    </h1>
  );
}
export default Hello;
