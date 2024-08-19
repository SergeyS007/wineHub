import { Helmet } from "react-helmet";
import TroubleForm from "../components/TroubleForm";

export default function TroubleLogIn() {
  return (
    <div>
      <Helmet>
        <title>TroubleLogIn</title>
      </Helmet>
      <TroubleForm />
    </div>
  );
}
