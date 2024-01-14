import { useEffect, useState } from "react";
import ClassGroup from "./ClassGroup";
import SearchBox from "./SearchBox";

export default function StudentsTable() {
  const [std1, setStd1] = useState([]);
  const [std2, setStd2] = useState([]);
  const [std3, setStd3] = useState([]);
  useEffect(() => {
    fetch("stdArr1.json")
      .then((res) => res.json())
      .then((data) => setStd1(data));

    fetch("stdArr2.json")
      .then((res) => res.json())
      .then((data) => setStd2(data));

    fetch("stdArr3.json")
      .then((res) => res.json())
      .then((data) => setStd3(data));
  }, []);

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>

          <SearchBox />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>

            <tbody>
              {/* class one */}
              <ClassGroup classTitle={"Class One"} stundentsArr={std1} />

              {/* class two */}
              <ClassGroup classTitle={"Class Two"} stundentsArr={std2} />

              {/* class three */}
              <ClassGroup classTitle={"Class Three"} stundentsArr={std3} />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
