export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return { props: { users: data } };
};

function UserList({ users }) {
  return (
    <>
      <h1>List of user</h1>
      {users.map((user) => (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      ))}
    </>
  );
}

export default UserList;
