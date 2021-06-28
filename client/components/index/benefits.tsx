import { Travis } from "../../utils/icons";

const domainData: Array<{
  icon: JSX.Element;
  title: string;
  text: string;
}> = [
  {
    icon: <Travis />,
    title: "edcfjbej",
    text: "Students can contribute to Open Source Projects under the banner of SRMIST allowing students to get industry-level exposure through SRMIST’s organization.",
  },
  {
    icon: <Travis />,
    title: "edcfjbej",
    text: "Students can contribute to Open Source Projects under the banner of SRMIST allowing students to get industry-level exposure through SRMIST’s organization.",
  },
  {
    icon: <Travis />,
    title: "edcfjbej",
    text: "Students can contribute to Open Source Projects under the banner of SRMIST allowing students to get industry-level exposure through SRMIST’s organization.",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center lg:my-20">
      <h2 className="text-2xl lg:text-center font-extrabold lg:text-5xl text-base-black my-4">
        Benefits of GitHub Campus Partner Program
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {domainData.map((data) => (
          <div key={data.title}>
            <div className="flex flex-col justify-center p-6 rounded-xl text-justify">
              <div className="flex justify-center mb-5">{data.icon}</div>
              <p className="text-gray-600 font-regular text-sm lg:text-lg">
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
