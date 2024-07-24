export default function ProjectDetails({ data }) {
  return (
    <div className="container">
      <table className="w-full max-w-[850px] mx-auto border-[#dfe1e7] border-collapse border my-3 text-left text-[#555555] text-xs md:text-lg">
        <tbody>
          {Object.entries(data).map(([name, value]) => {
            return (
              <TableRow key={crypto.randomUUID()} name={name} value={value} />
            );
          })}

          <TableRow />
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ name = "value", value = "value" }) {
  return (
    <tr className="border border-[#dfe1e7]">
      <td className="max-w-1/2 md:max-w-14 py-2 pl-1 pr-3">{name}</td>
      <td className="text-black py-2 pl-1">{value}</td>
    </tr>
  );
}
