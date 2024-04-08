export default function CardItem(props: any) {
  return (
    <div
      className="rounded-lg bg-white flex flex-col transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-50 hover:shadow-xl"
      style={{ boxShadow: "0px 2.51px 10.65px 0px #4A55EA4D" }}
    >
      <div className="w-3/4 m-auto"><img className="object-cover" src={props.image}></img></div>

      <div className="text-center mt-4 text-xs text-blue-600">{props.name}</div>
    </div>
  );
}
