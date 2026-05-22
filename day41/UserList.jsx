import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch Users
  const fetchUsers = useCallback(() => {
    const controller = new AbortController();

    fetch(
      "https://jsonplaceholder.typicode.com/users",
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      controller.abort();
      console.log("Cleanup Run");
    };
  }, []);

  // useEffect
  useEffect(() => {
    const cleanup = fetchUsers();

    return cleanup;
  }, [fetchUsers, search]);

  // Filter Users
  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Expensive Value
  const totalUsers = useMemo(() => {
    console.log("Calculating...");
    return filteredUsers.length;
  }, [filteredUsers]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button
        onClick={fetchUsers}
        style={{ marginLeft: "10px" }}
      >
        Refresh
      </button>

      <h3>Total Users: {totalUsers}</h3>

      {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;