import { columns } from "@/app/people/columns";
import PeopleDataTable from "@/app/people/data-table";
import { people } from "@/data/people";

const Page = () => {
  return (
    <>
      <PeopleDataTable
        columns={columns}
        data={people}
      />
    </>
  );
};

export default Page;
