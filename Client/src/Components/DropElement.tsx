import { useRecoilValue } from "recoil";
import { SourceAtom, LoadAtom, PathAtom } from "../atom/atom";
import DropRow from "./DropRow";
import { ImageModel } from "../model/models";
export default function DropElement() {
  const atom: ImageModel[] = useRecoilValue(LoadAtom);
  console.log(atom);
  return (
    <div className="xl:w-5/12 w-1/2 py- mt-16 grid grid-col-3 gap-2">
      <DropRow title="Source" atom={SourceAtom} value={[1,3,7]} ></DropRow>
      <DropRow title="Load" atom={LoadAtom} value={[2,5,6]}></DropRow>
      <DropRow title="Path" atom={PathAtom} value={[4,8,9]}></DropRow>
    </div>
  );
}
