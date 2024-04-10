import { useRecoilState } from "recoil";
import { CheckAtom, DragAtom, LoadAtom, PathAtom, SourceAtom } from "../atom/atom";
import { models } from "../model/models";

export default function ButtonBar() {
  const [dragAtom, setDragAtom] = useRecoilState(DragAtom);
  const [sourceAtom, setSourceAtom] = useRecoilState(SourceAtom);
  const [loadAtom, setLoadAtom] = useRecoilState(LoadAtom);
  const [pathAtom, setPathAtom] = useRecoilState(PathAtom);
  const [checkAtom, setCheckAtom] = useRecoilState(CheckAtom);

  function reset() {
    setSourceAtom([]);
    setLoadAtom([]);
    setPathAtom([]);
    setDragAtom(models);
  }

  function check() {
      setCheckAtom(true);
      setTimeout(() => {
        setCheckAtom(false);
      }, 1000);
}

  return (
    <div className="text-center">
      <button
        onClick={check}
        className="w-20 h-10 m-6 p-2 rounded-xl bg-green-500 focus:outline-none"
      >
        Check
      </button>

      <button
        onClick={reset}
        className="w-20 h-10 m-6 p-2 rounded-xl bg-yellow-400 focus:outline-none "
      >
        Reset
      </button>
    </div>
  );
}
