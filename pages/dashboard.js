import { useEffect, useState } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboardData(data);
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading.....🔄</h2>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <h2>Posts - {dashboardData.posts}</h2>
      <br />
      <h2>Likes - {dashboardData.likes}</h2>
      <br />
      <h2>Followers - {dashboardData.followers}</h2>
      <br />
      <h2>Followings - {dashboardData.followings}</h2>
    </>
  );
}

export default Dashboard;
