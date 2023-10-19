import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useSectionInView(sectionName, threshold) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked]);

  return {
    ref,
  };
}
