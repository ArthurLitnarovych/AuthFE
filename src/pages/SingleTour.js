import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getTour } from "../redux/slices/tourSlice";
import Spinner from "../components/spinner/Spinner";

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour, loading } = useSelector((state) => state.tour);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <MDBContainer>
      <MDBCard className="mb-3 mt-2">
        <MDBCardImage
          position="top"
          style={{ width: "100%", maxHeight: "600px" }}
          src={tour && tour.imageFile}
          alt={tour.title}
        />
        <MDBCardBody>
          <h3>{tour.title}</h3>
          <span>
            <p className="text-start tourNmae"> Created by: {tour?.name}</p>
          </span>
          <div style={{ float: "left" }}>
            <span className="text-start">
              {tour && tour.tags && tour.tags.map((item) => `#${item}`)}
            </span>
          </div>
          <br />
          <MDBCardText className="text-start mt-2">
            <MDBIcon
              style={{ float: "left", margin: "5px" }}
              far
              icon="calendar=alt"
              size="lg"
            />
            <small className="text-muted">
              {moment(tour.createdAt).fromNow()}
            </small>
          </MDBCardText>
          <MDBCardText className="lead mb-0 text-start">
            {tour.description}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SingleTour;
