import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      Profile:
      <p>{id}</p>
    </div>
  );
};

export default Profile;
