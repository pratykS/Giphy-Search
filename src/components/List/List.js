import { Card } from "../../components";
const ListComponent = (props) => {
  const { data } = props;
  return (
    <div>
      {data &&
        data.data.map((d, i) => {
          return <Card content={d} key={i}></Card>;
        })}
    </div>
  );
};

export const List = ListComponent;
