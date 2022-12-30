import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:4000/dashboard");
  const data = await res.json();

  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h1>Error.............</h1>;
  if (!data) return <h1>Loading.............</h1>;

  return (
    <>
      <h1>Dashboard</h1>
      <br />
      <h2>Posts - {data.posts}</h2>
      <br />
      <h2>Likes - {data.likes}</h2>
      <br />
      <h2>Followers - {data.followers}</h2>
      <br />
      <h2>Followings - {data.followings}</h2>
    </>
  );
}

export default DashboardSWR;
