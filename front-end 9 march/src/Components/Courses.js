import { useNavigate } from "react-router-dom";
import { courses } from "./course";
import "./courses.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Courses = () => {

  const notify = () =>
    toast("You are Redirected to Another Page", {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <>
      <section className="courses container-fluid">
        <div class="col-sm-12">
          <div class="section-header text-center mt-5 mx-5 ">
            <h1 class="shadow p-3  bg-dark   ">
              <span class="text-danger">
                <strong>Boost your Skills</strong>
              </span>
            </h1>
          </div>
        </div>
        <div className="course-cardDeck card-group ">
          {courses.map((each) => {
            return (
              <div
                className="course-card"
                onClick={() => {
                  // window.location.href = each.link
                  notify()
                  setTimeout(() => {
                    window.open(each.link);
                  }, 1000);
                }}
              >
                <div className="course-card-image">
                  <img src={each.imgsrc} alt="" />
                </div>
                <div className="course-card-detail">
                  <h2>{each.title}</h2>
                  <p className="course-creator">{each.creator}</p>
                  <div className="card-bottom">
                    {" "}
                    <span className="rating">
                      {each.rate} <i className="fa-solid fa-star"></i>
                    </span>{" "}
                    <span className="price">{each.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
export default Courses;
