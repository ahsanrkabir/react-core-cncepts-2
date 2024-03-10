import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Users: {users.length}</h3>
    </div>
  );
}

/**
 * 1. use useState declare a state to hold the data
 * 2. use useEffect with callback function and dependency array
 * 3. use fetch to load data
 * 4. use setState to set loaded data to the state
 * 5. display data on the component
 */
