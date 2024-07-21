"use client"

import { useStoreModal } from "@/hooks/user-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // console.log("IsOpen state:", !isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return (
    <div className="">
      Root page
    </div>
  )

}

export default SetupPage;