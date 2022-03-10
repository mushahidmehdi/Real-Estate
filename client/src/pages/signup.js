import SignUp from "../components/SignUp";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";

const signup = () => {
  return (
    <div className="signup__page">
      <Navbar />
      <SignUp />
      <Alert />
    </div>
  );
};

export default signup;
