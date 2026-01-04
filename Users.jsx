function Users({ users }) {
  return (
    <table border="2">
      <thead>
        <tr>
            <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
