import All_Projects from "../Assets/Projects_List";
import AllProjects from "../AllProjects/AllProjects";
import ActiveLink from "../ActiveLink/ActiveLink";

function OurProject() {
  return (
    <div className="mt-40">
      <div className="mini-title w-max mx-auto">
        <span>OUR PROJECTS</span>
      </div>
      <h3 className="text-center font-bold text-dark mt-5 text-4xl">
        Recently Completed Projects
      </h3>
      <div className="flex justify-center mt-5 gap-4 text-lg font-medium">
        <ActiveLink filter="all" name="All" />
        <ActiveLink filter="web" name="Web Design" />
        <ActiveLink filter="graphic" name="Graphic Design" />
      </div>
      <div className="project-boxes w-[85%] mt-9 mx-auto grid gap-y-9 gap-7 ">
        {All_Projects.map((item, i) => {
          return (
            <AllProjects key={i} image={item.image} category={item.category} />
          );
        })}
      </div>
    </div>
  );
}

export default OurProject;
