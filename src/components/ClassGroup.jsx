/* eslint-disable react/prop-types */
import { Fragment } from "react";

export default function ClassGroup({ classTitle, stundentsArr }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {classTitle}
        </td>
      </tr>

      {stundentsArr.map((student) => (
        <Fragment key={student.id}>
          {/* returning a table row for each student */}
          <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{student.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={`https://i.pravatar.cc/${
                    student.id < 10 ? "10" + student.id : "1" + student.id
                  }`}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {student.percentage}%
            </td>
          </tr>
        </Fragment>
      ))}
    </>
  );
}
