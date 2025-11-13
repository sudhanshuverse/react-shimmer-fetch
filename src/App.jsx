import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUserData(data.users);

      // 🕒 Keep shimmer for 2 seconds even if data loads fast
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };


  return (
    <div className="app-container">
      <h1>User Directory</h1>

      <div className="user-grid">
        {loading
          ? // --- Skeleton Loading Cards ---
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="user-card skeleton">
              <div className="avatar skeleton-box"></div>
              <div className="text-line skeleton-box short"></div>
              <div className="text-line skeleton-box"></div>
              <div className="text-line skeleton-box"></div>
            </div>
          ))
          : // --- Actual User Cards ---
          userData.map((user) => (
            <div className="user-card" key={user.id}>
              <img
                src={user.image}
                alt={user.firstName}
                className="avatar"
              />
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.email}</p>
              <span>Age: {user.age}</span>
            </div>
          ))}
      </div>

    </div>
  );
}

export default App;
